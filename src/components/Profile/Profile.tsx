import React from 'react';
//import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../redux/state';
import {StoreType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    store:StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;