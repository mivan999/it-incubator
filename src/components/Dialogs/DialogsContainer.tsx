import React from 'react';
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


// export type DialogsContainerPropsType = {
//     store: StoreType
//     dialogsP: DialogsPageType
// }


const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {

    return <StoreContext.Consumer>{
        (store) => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC())

            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs dialogsP={store.getState().dialogsPage}
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;