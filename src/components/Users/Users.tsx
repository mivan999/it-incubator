import React from 'react';
import {UserPropsType} from './UsersContainer';
import s from './Users.module.css'

const Users = (props: UserPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: '3',
                name: 'bob',
                followed: false,

                image: 'https://i.imgur.com/dmRcOOI.png',
                status: 'i am a status',
                location: {
                    country: 'usa',
                    city: 'NY'
                },
            }
        ])
    }
    const setFollow = (id:string, f:boolean) => {
      if(!f) props.follow(id)
      if(f) props.unfollow(id)
    }
    return (
        <div className={s.wrap}>
            {props.usersPage.users.map(u => (
                <div>
<div className={s.name}>                   {u.name}</div>
                    <div ><img className={s.imgAva} src={u.image} alt="img"/></div>
                    <div>{u.status}
                       </div>
                    <div>
                        <button onClick={()=>{setFollow(u.id,u.followed)}}>
                        {u.followed?"follow":"unfollow"}
                    </button>
                    </div>
                </div>))}
        </div>
    );
};

export default Users;