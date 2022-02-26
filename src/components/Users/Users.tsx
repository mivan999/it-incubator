import React from 'react';
import s from './Users.module.css'
import styles from './Users.module.css'
import ava from './../../assets/ava.jpeg'
import {follow, unfollow, UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';


type propsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setCurrentPage: (page: number) => void
    onPageChanges: (p: number) => void

    followingInProgress: string[]
    getUsers: (currentPage: number, pageSize: number) => void
}
const Users = (props: propsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
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
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                follow(u.id)
                            }}>
                                Follow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                unfollow(u.id)
                            }}>
                                Unfollow
                            </button>}
                    </div>
                </div>))}
        </div>
    );
}

export default Users;