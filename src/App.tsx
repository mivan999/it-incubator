import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
                    <Switch>
                    {/*<Routes> //использовать для react-reouter-dom 6 ver*/}
                    {/*    <Route path="/dialogs/*" element={*/}
                    {/*        <DialogsContainer*/}
                    {/*            // dialogsP={props.store.getState().dialogsPage}*/}
                    {/*            // store={props.store}*/}
                    {/*        />}/>*/}
                    {/*    <Route path="/profile/:userId?" element={*/}
                    {/*        <ProfileContainer/>}/>*/}

                    {/*    <Route path="/users" element={*/}
                    {/*        <UsersContainer/>}/>*/}
                    {/*</Routes>*/}
                        <Route path="/dialogs/*" render={()=>
                            <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"  render={()=>
                            <ProfileContainer/>}/>

                        <Route path="/users"  render={()=>
                            <UsersContainer/>}/>
                    </Switch>
                </div>


            </div>
        </Router>
    );
}

export default App;
