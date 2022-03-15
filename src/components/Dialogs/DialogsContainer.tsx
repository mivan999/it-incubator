// import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {DialogsPageType} from "../../redux/state";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

type mapStateToPropsType = {
    isAuth: boolean
    dialogsP: DialogsPageType
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}
export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsP: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) ;