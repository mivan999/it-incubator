import React from 'react';

import Post from './Post/Post'
import s from './MyPosts.module.css'

export type PostDataType = {
    id: number
    message: string
    likeCount: number
}
const MyPosts = () => {
    let postData: PostDataType[] = [
        {
            id: 0,
            message: 'Hi hou are you',
            likeCount: 5
        },
        {
            id: 1,
            message: 'HI, yo',
            likeCount: 12
        },
    ]
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
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>


            </div>
        </div>

    );
};

export default MyPosts;