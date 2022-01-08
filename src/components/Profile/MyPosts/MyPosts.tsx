import React from 'react';

import Post from './Post/Post'
import s from './MyPosts.module.css'
import {addPostType} from '../../../redux/state';

export type PostDataType = {
    id: number
    message: string|undefined
    likeCount: number

}
export type MyPostPropsType={
    posts:PostDataType[]
    newPostText:string|undefined
    addPost:(message:addPostType)=>void
    updateNewPostText:(newText:string|undefined)=>void
}
const MyPosts = (props:MyPostPropsType) => {
    let newPost=React.createRef<HTMLTextAreaElement>()

    let addPost=()=> {
        let post:addPostType={message:""}
        post.message=newPost.current?.value
        props.addPost(post)

    }
    let onPostChange=()=>{
        let text=newPost.current?.value
        props.updateNewPostText(text)
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
                <Post message={props.posts[0].message} likeCount={props.posts[0].likeCount}/>
                <Post message={props.posts[1].message} likeCount={props.posts[1].likeCount}/>
            </div>
        </div>

    );
};

export default MyPosts;