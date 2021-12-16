import React from 'react';

import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
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
                <Post message="Hi, how are you" likeCount={5}/>
                <Post message="its my first post" likeCount={4}/>
            </div>
        </div>

    );
};

export default MyPosts;