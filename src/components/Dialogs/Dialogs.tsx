import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogsPropsType={
    dialogsData:DialogsDataType[]
    messageData:MessageDataType[]
}
const Dialogs = (props:DialogsPropsType) => {

    let dialogsElement=props.dialogsData.map((d)=>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messageElement=props.messageData.map((m)=>
        <Message message={m.message}/>
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

                <Message message={props.messageData[1].message}/>
            </div>
        </div>
    )
}
export default Dialogs;