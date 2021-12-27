import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogsDataType, MessageDataType} from './components/Dialogs/Dialogs';
import {PostDataType} from './components/Profile/MyPosts/MyPosts';

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
let messageData: MessageDataType[] = [
    {
        id: 0,
        message: 'Hi!'
    },
    {
        id: 1,
        message: 'Yo'
    }
]

let postData: PostDataType[] = [
    {
        id: 0,
        message: 'Hi hou are you',
        likeCount: 5
    },
    {
        id: 1,
        message: 'HI, yo',
        likeCount: 12
    },
]

export type AppPropsType = {
    dialogsData: DialogsDataType[],
    messageData: MessageDataType[],
    postData:PostDataType[],
}
ReactDOM.render(
    <React.StrictMode>
        <App
            dialogsData={dialogsData}
            messageData={messageData}
            postData={postData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
