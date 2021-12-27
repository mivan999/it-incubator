import React from 'react';

import Post from './Post/Post'
import s from './MyPosts.module.css'

export type PostDataType = {
    id: number
    message: string
    likeCount: number

}
export type MyPostPropsType={
    postData:PostDataType[]
}
const MyPosts = (props:MyPostPropsType) => {
    // console.log(props.postData[1].message)
    return (

        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>
                    </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="post">
                {/*<Post message={props.message} likeCount={props.likeCount}/>*/}
                <Post message={props.postData[0].message} likeCount={props.postData[0].likeCount}/>
                <Post message={props.postData[1].message} likeCount={props.postData[1].likeCount}/>


            </div>
        </div>

    );
};

export default MyPosts;