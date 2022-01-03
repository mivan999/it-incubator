import React from 'react';
//import s from "./Profile.module.css"
import MyPosts, {PostDataType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPostType} from '../../redux/state';

export type ProfilePropsType={
    postData:PostDataType[]
    addPost:(message:addPostType)=>void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;