import React from 'react';
//import s from "./Profile.module.css"
import MyPosts, {PostDataType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType={
    postData:PostDataType[]
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

export default Profile;