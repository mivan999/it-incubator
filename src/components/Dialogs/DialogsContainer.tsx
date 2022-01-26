// import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../redux/state";



type mapStateToPropsType={
    dialogsP:DialogsPageType
}
type mapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void,
    sendMessage:()=>void
}
export type DialogsPropsType=mapDispatchToPropsType & mapStateToPropsType


let mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return {
        dialogsP:state.dialogsPage
    }
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;