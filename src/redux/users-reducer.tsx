import {ActionType} from './state';
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as string[]

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
            return {...state, users: action.payload.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress:
                    action.payload.isFetching
                        ? [...state.followingInProgress, action.payload.userId]
                        : state.followingInProgress.filter(u => u !== action.payload.userId)
            }
        }
        default:
            return state
    }

}

export const followSuccess = (userID: string) => (
    {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const)

export const unfollowSuccess = (userID: string) => (
    {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const)
export const setUsers = (users: UserType[]) => (
    {
        type: SET_USER,
        payload: {
            users
        }
    } as const)
export const setCurrentPage = (currentPage: number) => (
    {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const)
export const setTotalUsersCount = (totalUsersCount: number) => (
    {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUsersCount
        }
    } as const)
export const toggleIsFetching = (isFetching: boolean) => (
    {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            userId
        }
    } as const)

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId:string) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    followSuccess(userId)
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId:string) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    unfollowSuccess(userId)
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer;