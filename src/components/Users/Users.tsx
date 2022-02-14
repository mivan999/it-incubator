import React from 'react';
import s from './Users.module.css'
import styles from './Users.module.css'
import ava from './../../assets/ava.jpeg'
import {UserType} from "../../redux/users-reducer";


type propsType = {
       users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(usersCount:number)=>void
    onPageChanges:(p:number)=>void
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
                            <span className={props.currentPage === p ? styles.selectedPage : ""} onClick={() => {
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
                        <img className={s.imgAva} src={u.photos.small != null ? u.photos.small : ava} alt="img"/>
                    </div>
                    <div>{u.status}
                    </div>
                    <div>
                        <button onClick={() => {
                            setFollow(u.id, u.followed)
                        }}>
                            {u.followed ? "follow" : "unfollow"}
                        </button>
                    </div>
                </div>))}
        </div>
    );
}

export default Users;