import React from 'react';
import s from './../Dialogs.module.css';


type MessagesPropsType = {
    message: string
}


const Message = (props: MessagesPropsType) => {


    //let text=newMessage.current.value
    return <div className={s.dialog}>{props.message}

    {/*<textarea id={newMessage}></textarea>*/}

    </div>
}
export default Message;