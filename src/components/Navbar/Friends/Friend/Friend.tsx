import React from 'react';
import s from "./Friend.module.css"
import {FriendsType} from '../../../../redux/state';


const Friend = (props:FriendsType) => {
    return (
        <div className={s.frImg}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt=""/>

        <span className={s.userName}>{props.name}</span>
        </div>

    );
};

export default Friend;