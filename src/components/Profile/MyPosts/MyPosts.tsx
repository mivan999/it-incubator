import React from 'react';
import {Post} from './Post/Post'
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
    updateNewPostText:(text:string)=>void
    addPost:(post:addPostType)=>void
}
const MyPosts = (props:MyPostPropsType) => {
    console.log("MyPosts props", props)
    let newPost=React.createRef<HTMLTextAreaElement>()

    let addPost=()=> {
        let post:addPostType={message:""}
        post.message=newPost.current?.value
        props.addPost(post)
    }
    let onPostChange=()=>{
        let text=newPost.current?.value
        if (text) props.updateNewPostText(text)
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