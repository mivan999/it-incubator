import React from 'react';
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={s.content}>
            <img src=" https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg" alt=""/>
            <div>ava+descriptions</div>
            <div>Mypost
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;