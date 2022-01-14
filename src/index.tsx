import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
// import ReactDOM from 'react-dom';
// import App from './App';
import React from 'react';
import { rerenderEntireTree } from './render';



store.subscriber(rerenderEntireTree)
store.rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
