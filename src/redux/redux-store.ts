import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
let reducers=combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
});
let store=createStore(reducers);
export default store;
export type AppStateType=ReturnType<typeof reducers>
export type StoreType=typeof store