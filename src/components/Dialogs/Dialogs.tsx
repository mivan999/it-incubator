import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
// type DialogsPropsType={
//
// }
type DialogItemPropsType = {
    name: string
    id: number
}
type MessagesPropsType = {
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + String(props.id)
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagesPropsType) => {

    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = () => {
    let dialogsData: DialogsDataType[] = [
        {
            id: 0,
            name: 'Dimych'
        },
        {
            id: 1,
            name: 'Andrey'
        },
        {
            id: 2,
            name: 'Sveta'
        },
        {
            id: 3,
            name: 'Sasha'
        },
        {
            id: 4,
            name: 'Viktor'
        },
        {
            id: 5,
            name: 'Valera'
        }

    ]
    let messageData:MessageDataType[]=[
        {
            id:0,
            message:"Hi"
        },
        {id:1,
            message:"Yo"
        }
    ]
    let dialogsElement=dialogsData.map((d)=>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messageElement=messageData.map((m)=>
        <Message message={m.message}/>
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

                <Message message={messageData[1].message}/>
            </div>
        </div>
    )
}
export default Dialogs;