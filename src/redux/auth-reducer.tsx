import {ActionType} from './state';
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
type authType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth:boolean
}
let initialState: authType = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state: authType = initialState, action: ActionType): authType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            };
        default:
            return state
    }

}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA, 
    data: {
        userId,
        email,
        login,
    }
} as const)

export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data
               dispatch(setAuthUserData(userId, email, login))
            }
        })
}

export default authReducer;