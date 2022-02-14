import {ActionType} from './state';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT ='SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'

export type UserType = {
    id: string
    name: string
    photos: {
        small?: string,
        large?: string
    }
    followed: boolean
    status?: string

}


const initialState = {
    users: [] as UserType[],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,

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
            return {...state, users:action.payload.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.payload.currentPage}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount:action.payload.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching:action.payload.isFetching}
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
export const setCurrentPageAC = (currentPage:number) => (
    {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const)
export const setTotalUsersCountAC = (totalUsersCount:number) => (
    {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUsersCount
        }
    } as const)
export const toggleIsFetchingAC = (isFetching:boolean) => (
    {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const)


export default usersReducer;