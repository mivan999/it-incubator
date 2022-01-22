import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/redux-store';

type PropsType = {
    store: StoreType
    // addPost: (postMessage:addPostType) => void
    // /updateNewPostText:(newText:string|undefined)=>void
}
function App(props: PropsType) {
    console.log("App props", props)

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                dialogsP={props.store.getState().dialogsPage}
                                store={props.store}
                            />}/>
                        <Route path="/profile" element={
                            <Profile
                                store={props.store}
                                profilePage={props.store.getState().profilePage}
                                dispatch={props.store.dispatch.bind(props.store)}

                            />}/>
                    </Routes>
                </div>


            </div>
        </Router>
    );
}

export default App;
