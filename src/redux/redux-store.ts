import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
let rootReducers=combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
});
export type AppStateType=ReturnType<typeof rootReducers>
let store=createStore(rootReducers);
export default store;
export type StoreType=typeof store