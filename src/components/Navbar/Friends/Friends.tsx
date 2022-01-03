import React from 'react';
import Friend from './Friend/Friend';
import {FriendsType} from '../../../redux/state';

export type FriendsPropsType = {
    friends: FriendsType[]
}

function Friends(props: FriendsPropsType) {
    return <div>
        <div>Friends</div>
        {props.friends.map((f) => (
            <Friend id={f.id} name={f.name} ava={f.ava}/>
        ))}
    </div>

}

export default Friends;