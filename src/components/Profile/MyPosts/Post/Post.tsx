import React from 'react';
import s from "./Post.module.css"
type PostPropsType ={
    message: string
    likeCount:number
}
const Post = (props:PostPropsType) => {
    return (

        <div className={s.item}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
            {props.message}

            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>


    );
};

export default Post;