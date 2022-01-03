import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AppPropsType} from './index';


function App(props: AppPropsType) {

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                state={props.state.dialogsPage}
                            />}/>
                        <Route path="/profile" element={
                            <Profile
                                postData={props.state.profilePage.posts}
                            />}/>
                    </Routes>
                </div>


            </div>
        </Router>
    );
}

export default App;
