import React from 'react';
import {addPostType} from '../../../redux/state';
import {AddPostAC, ChangePostAC} from '../../../redux/profile-reducer';
import {StoreType} from '../../../redux/redux-store';
import MyPosts from './MyPosts';

export type MyPostContainerPropsType = {
    store: StoreType
}
const MyPostsContainer = (props: MyPostContainerPropsType) => {
    let addPost = (post: addPostType) => {
        props.store.dispatch(AddPostAC(post))
    }
    let onPostChange = (text: string) => {
        props.store.dispatch(ChangePostAC(text))
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                 posts={props.store.getState().profilePage.posts}
                 newPostText={props.store.getState().profilePage.newPostText}/>

    );
};

export default MyPostsContainer;