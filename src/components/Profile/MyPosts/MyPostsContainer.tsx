// import React from 'react';
import {addPostType} from '../../../redux/state';
import {AddPostAC, ChangePostAC} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';
import MyPosts, {PostDataType} from './MyPosts';
import {connect} from "react-redux";
import {Dispatch} from "redux";


// export type MyPostContainerPropsType = {
//     store: StoreType
// }
type mapStateToPropsType={
    posts:PostDataType[],
    newPostText:string|undefined
}
type mapDispatchToPropsType={
    updateNewPostText:(text:string)=>void,
    addPost:(post: addPostType)=>void
}
export type MyPostPropsType=mapDispatchToPropsType & mapStateToPropsType
let mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        updateNewPostText:(text:string)=>{
            dispatch(ChangePostAC(text))
        },
        addPost:(post: addPostType)=>{
            dispatch(AddPostAC(post))
        },

    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;