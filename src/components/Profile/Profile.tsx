import React from 'react';
//import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType, StoreType} from '../../redux/state';

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    store:StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch.bind(props.store)}
                store={props.store}
            />
        </div>
    );
};

export default Profile;