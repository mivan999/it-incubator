import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunk from 'redux-thunk';

let rootReducer=combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
});
export type AppStateType=ReturnType<typeof rootReducer>
let store=createStore(rootReducer,applyMiddleware(thunk));
export default store;
export type StoreType=typeof store