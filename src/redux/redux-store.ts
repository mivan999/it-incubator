import {combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
let rootReducers=combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
});
export type AppStateType=ReturnType<typeof rootReducers>
let store=createStore(rootReducers);
export default store;
export type StoreType=typeof store