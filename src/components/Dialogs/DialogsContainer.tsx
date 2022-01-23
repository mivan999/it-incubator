import React from 'react';
import {DialogsPageType} from '../../redux/state';
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from '../../redux/dialogs-reducer';
import {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';


// export type DialogsDataType = {
//     id: number
//     name: string
// }
// export type MessageDataType = {
//     id: number
//     message: string
// }
export type DialogsContainerPropsType = {
    store: StoreType
    dialogsP: DialogsPageType
}
// let newMessage = React.createRef<HTMLTextAreaElement>()

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    // let dialogsElement=props.dialogsP.dialogs.map((d)=>
    //     <DialogItem name={d.name} id={d.id}/>
    // )
    // let messageElement=props.dialogsP.messages.map((m)=>
    //     <Message message={m.message}/>
    //
    // )
    // let newMessageBody=props.dialogsP.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())

    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <Dialogs dialogsP={props.dialogsP}
                 updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}/>
    )
}
export default DialogsContainer;