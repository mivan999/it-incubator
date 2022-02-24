import React from 'react';
import s from './Users.module.css'
import styles from './Users.module.css'
import ava from './../../assets/ava.jpeg'
import {toggleFollowingProgress, UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";


type propsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    onPageChanges: (p: number) => void
    toggleFollowingProgress:(isFetching:boolean,userId:string)=>void
    followingInProgress:string[]
}
const Users = (props: propsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    const setFollow = (id: string, f: boolean) => {
        if (!f) props.follow(id)
        if (f) props.unfollow(id)
    }
    return (
        <div className={s.wrap}>
            <div>
                {
                    page.map(p => (
                            <span
                                className={props.currentPage === p ? styles.selectedPage : ''}
                                onClick={() => {
                                    props.onPageChanges(p)
                                }}>{p}</span>
                        )
                    )
                }
            </div>
            {props.users.map((u: UserType) => (
                <div>
                    <div className={s.name}>{u.name}</div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.imgAva}
                                 src={u.photos.small != null ? u.photos.small : ava}
                                 alt="img"/>
                        </NavLink>
                    </div>
                    <div>{u.status}
                    </div>
                    <div>
                        {!u.followed ?
                            <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true,u.id)
                                setFollow(u.id, u.followed)

                                usersAPI.follow(u.id)
                                    .then((data) => {
                                        props.toggleFollowingProgress(false,u.id)
                                        if(data.resultCode===0) {props.follow(u.id)}
                                    })
                            }}>
                                Follow
                            </button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true,u.id)
                                setFollow(u.id, u.followed)
                                usersAPI.unfollow(u.id)
                                    .then((data) => {
                                        props.toggleFollowingProgress(false,u.id)
                                    if(data.resultCode===0) {props.unfollow(u.id)}
                                })
                            }}>
                             Unfollow
                            </button>}
                    </div>
                </div>))}
        </div>
    );
}

export default Users;