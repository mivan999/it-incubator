import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

export let rerenderEntireTree=()=>{
    ReactDOM.render(
        <App
            store={store}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );

}