import React from 'react';

import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ActionType, addPostType, StoreType} from '../../../redux/state';
import {AddPostAC, ChangePostAC} from '../../../redux/profile-reducer';



export type PostDataType = {
    id: number
    message: string|undefined
    likeCount: number

}
export type MyPostPropsType={
    posts:PostDataType[]
    newPostText:string|undefined
    dispatch:(action:ActionType)=>void
    store:StoreType
}
const MyPosts = (props:MyPostPropsType) => {
    console.log("MyPosts props", props)
    let newPost=React.createRef<HTMLTextAreaElement>()

    let addPost=()=> {
        let post:addPostType={message:""}
        post.message=newPost.current?.value
        // props.addPost(post)
        props.dispatch(AddPostAC(post))

    }
    let onPostChange=()=>{
        let text=newPost.current?.value
        // props.updateNewPostText(text)
        props.dispatch(ChangePostAC(text))
    }
    return (

        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="post">
                {props.posts.map(m=>(
                    <Post message={m.message} likeCount={m.likeCount}/>
                ))}
            </div>
        </div>

    );
};

export default MyPosts;