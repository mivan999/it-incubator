import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src=" https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg" alt=""/>
            <div>
                ava+descriptions
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;