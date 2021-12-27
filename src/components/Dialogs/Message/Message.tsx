import React from 'react';
import s from './../Dialogs.module.css';


type MessagesPropsType = {
    message: string
}


const Message = (props: MessagesPropsType) => {

    return <div className={s.dialog}>{props.message}</div>
}
export default Message;