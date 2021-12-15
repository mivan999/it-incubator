import React from 'react';

import Post from "./Post/Post"
const MyPosts = () => {
    return (

        <div>My posts
            <div>
                    <textarea>
                    </textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi, how are you" likeCount={5}/>
            <Post message="its my first post" likeCount={4} />
        </div>

    );
};

export default MyPosts;