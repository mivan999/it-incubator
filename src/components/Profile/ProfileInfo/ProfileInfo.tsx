import React from 'react';
import s from './Profile.module.css'
import {profileType} from "../../../redux/profile-reducer";
export type ProfilePropsType = {
    profile: profileType|null
}
const ProfileInfo = (props:ProfilePropsType) => {
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