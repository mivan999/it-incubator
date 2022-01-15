import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store, {addPostType, StoreType} from './redux/state';

type PropsType = {
    store: StoreType
    addPost: (postMessage:addPostType) => void
    updateNewPostText:(newText:string|undefined)=>void
}
function App(props: PropsType) {
    console.log("App props", props)
    const state=props.store.getState()
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                dialogsP={props.store._state.dialogsPage}
                                store={store}
                            />}/>
                        <Route path="/profile" element={
                            <Profile
                                store={props.store}
                                profilePage={state.profilePage}
                                dispatch={props.store.dispatch.bind(store)}

                            />}/>
                    </Routes>
                </div>


            </div>
        </Router>
    );
}

export default App;
