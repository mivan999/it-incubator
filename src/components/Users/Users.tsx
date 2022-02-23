import React from 'react';
import s from './Users.module.css'
import styles from './Users.module.css'
import ava from './../../assets/ava.jpeg'
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";


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
                            <button onClick={() => {
                                setFollow(u.id, u.followed)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"061180f8-35f1-47f3-a76b-f5b0c6efcb15"
                                    }
                                }).then((response) => {
                                    if(response.data.resultCode===0) {props.follow(u.id)}
                                })
                            }}>
                                Follow
                            </button>
                            : <button onClick={() => {
                                setFollow(u.id, u.followed)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"061180f8-35f1-47f3-a76b-f5b0c6efcb15"
                                    }

                                }).then((response) => {
                                    if(response.data.resultCode===0) {props.unfollow(u.id)}
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