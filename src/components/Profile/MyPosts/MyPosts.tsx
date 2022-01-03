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
    postData:PostDataType[]
    addPost:(message:addPostType)=>void
}
const MyPosts = (props:MyPostPropsType) => {
    let newPost=React.createRef<HTMLTextAreaElement>()

    let addPost=()=> {
        let post:addPostType={message:""}
        post.message=newPost.current?.value
        props.addPost(post)
    }
    return (

        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="post">
                <Post message={props.postData[0].message} likeCount={props.postData[0].likeCount}/>
                <Post message={props.postData[1].message} likeCount={props.postData[1].likeCount}/>
            </div>
        </div>

    );
};

export default MyPosts;