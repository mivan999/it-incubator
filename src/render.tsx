import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from './StoreContext';

export let rerenderEntireTree=()=>{
    ReactDOM.render(
        <Provider store={store}>
        <App
            store={store}
            // addPost={store.addPost.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
        /></Provider>,
        document.getElementById('root')
    );

}