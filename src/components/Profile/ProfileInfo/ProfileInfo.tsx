import React from 'react';
import s from './Profile.module.css'
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ava from './../../../assets/ava.jpeg'
import ProfileStatus from './ProfileStatus'

export type ProfilePropsType = {
    profile: profileType | null
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<img src=" https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg" alt=""/>*/}
            <div className={s.description}>

                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus} />
                <div><span>Имя: </span>{props.profile.fullName}</div>
                <div><span>About me: </span>{props.profile.aboutMe}</div>
                <div><img
                    src={props.profile.photos.large ? props.profile.photos.large : ava}
                    alt="avatar"/></div>
                <div><span>GitHub: </span>{props.profile.contacts.github}</div>
                <div><span>Vk: </span>{props.profile.contacts.vk}</div>
                <div><span>Inst: </span>{props.profile.contacts.instagram}</div>
                <div><span>Site: </span>{props.profile.contacts.website}</div>
            </div>

        </div>
    );
};

export default ProfileInfo;