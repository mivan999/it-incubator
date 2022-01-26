import React from 'react';
//import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// export type ProfilePropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionType) => void
//     store:StoreType
// }

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;