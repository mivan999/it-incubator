import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';
import {DialogsPageType, sendMessageAC, StoreType, updateNewMessageBodyAC} from '../../redux/state';

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogsPropsType={

    store:StoreType
        dialogsP:DialogsPageType
}
let newMessage=React.createRef<HTMLTextAreaElement>()

const Dialogs:React.FC<DialogsPropsType>= (props) => {
debugger;
    let dialogsElement=props.dialogsP.dialogs.map((d)=>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messageElement=props.dialogsP.messages.map((m)=>
        <Message message={m.message}/>

    )
    let newMessageBody=props.dialogsP.newMessageBody
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageAC())

    }
    let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body=e.currentTarget.value.toString()
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>

                <div>
                    <textarea ref={newMessage} value={newMessageBody} onChange={(e)=>onNewMessageChange(e)}>hello</textarea></div>
                <div><button onClick={onSendMessageClick}>send message  </button></div>
            </div>
        </div>
    )
}
export default Dialogs;