import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
// type DialogsPropsType={
//
// }
type DialogItemPropsType ={
    name:string
    id:number
}
type MessagesPropsType={
    message:string
}
const DialogItem = (props:DialogItemPropsType) => {
  let path="/dialogs/"+String(props.id)
    return(
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}
const Message=(props:MessagesPropsType)=>{
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="Sveta" id={3}/>
                <DialogItem name="Sasha" id={4}/>
                <DialogItem name="Viktor" id={5}/>
                <DialogItem name="Valera" id={6}/>

            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Hi"}/>
                <Message message={"Yo"}/>
                <Message message={"It"}/>

            </div>
        </div>
    )
}
export default Dialogs;