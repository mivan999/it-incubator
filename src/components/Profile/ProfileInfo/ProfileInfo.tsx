import React from 'react';
import s from './Profile.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <img src=" https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg" alt=""/>
            <div className={s.description}>
                ava+descriptions
            </div>

        </div>
    );
};

export default ProfileInfo;