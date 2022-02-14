import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


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
                            <DialogsContainer
                                // dialogsP={props.store.getState().dialogsPage}
                                // store={props.store}
                            />}/>
                        <Route path="/profile" element={
                            <ProfileContainer/>}/>

                        <Route path="/users" element={
                            <UsersContainer/>}/>
                    </Routes>
                </div>


            </div>
        </Router>
    );
}

export default App;
