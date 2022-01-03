import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';
import {DialogsPageType} from '../../redux/state';

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogsPropsType={
    state:DialogsPageType
}
let newMessage=React.createRef<HTMLTextAreaElement>()

const Dialogs:React.FC<DialogsPropsType>= (props) => {
debugger;
    let dialogsElement=props.state.dialogs.map((d)=>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messageElement=props.state.messages.map((m)=>
        <Message message={m.message}/>

    )
    let sendMessage=()=>{
        let text=newMessage.current?.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

                <div><textarea ref={newMessage}>123</textarea></div>
             <button onClick={sendMessage}>send message  </button>
            </div>
        </div>
    )
}
export default Dialogs;