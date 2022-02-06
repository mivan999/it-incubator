import {ActionType} from './state';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'

export type UserType = {
    id: string
    photos: {
        small?: string,
        large?: string
    }
    status: string
    name: string
    // location:UserLocations
    followed: boolean
}
export type UserLocations = {
    country: string
    city: string
}

const initialState = {
    users: [
        // {
        //     id: '1',
        //     name: 'alex',
        //     followed: false,
        //
        //     photos: {small: 'https://i.imgur.com/dmRcOOI.png'},
        //     status: 'i am a status',
        // },
        {},
    ] as UserType[]
}
export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW: {

            return {
                ...state, users: state.users.map
                (u => {
                        if (u.id === action.payload.userID) {
                            return {...u, followed: true};
                        }
                        return u;
                    }
                )
            };
        }
        case UNFOLLOW: {

            return {
                ...state, users: state.users.map
                (u => {
                        if (u.id === action.payload.userID) {
                            return {...u, followed: false};
                        }
                        return u;
                    }
                    // u.id === action.payload.userID ? {...u, followed: false} : u

                )
            };
        }
        case SET_USER: {
            return {...state, users: {...action.payload.users}}
        }
        default:
            return state
    }

}

export const followAC = (userID: string) => (
    {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const)

export const unfollowAC = (userID: string) => (
    {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const)
export const setUsersAC = (users: UserType[]) => (
    {
        type: SET_USER,
        payload: {
            users
        }
    } as const)


export default usersReducer;