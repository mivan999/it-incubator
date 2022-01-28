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
// type DialogsPageType=typeof initialState
const dialogsReducer = (state:DialogsPageType=initialState, action:ActionType):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody:action.body};
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 2, message: body}]}
        default:
            return state
    }

}
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer;