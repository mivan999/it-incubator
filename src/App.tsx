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
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                dialogsData={props.dialogsData}
                                messageData={props.messageData}
                            />}/>
                        <Route path="/profile" element={
                            <Profile
                                postData={props.postData}
                            />}/>
                    </Routes>
                </div>


            </div>
        </Router>
    );
}

export default App;
