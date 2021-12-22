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
        {id:0,
            message:"Hi"},
        {id:1,
            message:"Yo"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>
    )
}
export default Dialogs;