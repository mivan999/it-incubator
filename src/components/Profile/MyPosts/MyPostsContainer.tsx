import React from 'react';
import {addPostType} from '../../../redux/state';
import {AddPostAC, ChangePostAC} from '../../../redux/profile-reducer';
import {StoreType} from '../../../redux/redux-store';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

export type MyPostContainerPropsType = {
    store: StoreType
}
const MyPostsContainer = (props: MyPostContainerPropsType) => {

    return (
        <StoreContext.Consumer>{
            (store)=>{
                let addPost = (post: addPostType) => {
                    props.store.dispatch(AddPostAC(post))
                }
                let onPostChange = (text: string) => {
                    props.store.dispatch(ChangePostAC(text))
                }
            return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={store.getState().profilePage.posts}
                     newPostText={store.getState().profilePage.newPostText}/>
        }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;