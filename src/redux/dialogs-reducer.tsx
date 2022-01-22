import {ActionType, DialogsPageType} from './state';
const SEND_MESSAGE='SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
let initialState:DialogsPageType={
    dialogs: [
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

    ],
    messages: [
        {
            id: 0,
            message: 'Hi!'
        },
        {
            id: 1,
            message: 'Yo'
        }
    ],
    newMessageBody: ''
}
const dialogsReducer = (state:DialogsPageType=initialState, action:ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: 2, message: body})
            state.newMessageBody = ''
            return state;
        default:
            return state
    }

}
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer;