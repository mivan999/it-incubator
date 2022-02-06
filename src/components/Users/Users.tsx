import React from 'react';
import {UserPropsType} from './UsersContainer';
import s from './Users.module.css'
import * as axios from "axios"

const Users = (props: UserPropsType) => {
    const getUsers = () => {
        debugger
        axios.default.get('https://social-network.samuraijs.com/api/1.0/users').then((response:any)=>{
            props.setUsers(response.data.users)
            console.log(response.data.users)
        })
    }
    if (props.usersPage.users.length === 0) {

        // props.setUsers([
        //     {
        //         id: '3',
        //         name: 'bob',
        //         followed: false,
        //
        //         image: 'https://i.imgur.com/dmRcOOI.png',
        //         status: 'i am a status',
        //         location: {
        //             country: 'usa',
        //             city: 'NY'
        //         },
        //     }
        // ])
    }
    const setFollow = (id:string, f:boolean) => {
      if(!f) props.follow(id)
      if(f) props.unfollow(id)
    }
    return (
        <div className={s.wrap}>
            <button onClick={getUsers}>getUsers</button>
            {props.usersPage.users.map((u:any) => (
                <div>
<div className={s.name}>                   {u.name}</div>
                    <div ><img className={s.imgAva} src={u.photos?u.photos.small:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fseeding.com.ua%2Fwp-content%2Fuploads%2F2017%2F04%2F%25D0%25B0%25D0%25B2%25D0%25B0%25D1%2582%25D0%25B0%25D1%2580%25D0%25BA%25D0%25B0-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25BE%25D1%2582%25D0%25B7%25D1%258B%25D0%25B2%25D0%25BE%25D0%25B2.jpg&imgrefurl=https%3A%2F%2Fseeding.com.ua%2Fotzyvy%2Fvolodimir-merkulov-pp-m-agro-zaporizka-obl%2Fattachment%2Favatarka-dlja-otzyvov%2F&tbnid=a70AaaHLqPZj6M&vet=10CHAQMyiZAWoXChMI0MSGt47r9QIVAAAAAB0AAAAAEAI..i&docid=_Pl5cIGQZoljkM&w=500&h=541&q=avatarka&ved=0CHAQMyiZAWoXChMI0MSGt47r9QIVAAAAAB0AAAAAEAI"} alt="img"/></div>
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