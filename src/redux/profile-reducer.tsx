import {PostDataType} from '../components/Profile/MyPosts/MyPosts';
import {ActionType, addPostType, ProfilePageType} from './state';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'
const SET_USER_PROFILE='SET_USER_PROFILE'
let initialState:ProfilePageType={

        posts: [
            {
                id: 0,
                message: 'Hi hou are you',
                likeCount: 5
            },
            {
                id: 1,
                message: 'HI, yo',
                likeCount: 12
            },
        ],
        newPostText: 'it',
    profile: null
    }
const profileReducer = (state:ProfilePageType=initialState, action:ActionType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost: PostDataType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
            }
            return {...state,newPostText:'',posts:[...state.posts,newPost]}}
        case UPDATE_NEW_POST_TEXT: {
            return  {...state,newPostText :action.newText}
        }
        case SET_USER_PROFILE: {
            return  {...state,profile :action.profile}
        }
        default:
            return state
    }
}

export const ChangePostAC = (text: string | undefined) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const AddPostAC = (post: addPostType) => ({type: ADD_POST, postMessage: post} as const)
export type profileType={
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small?: string
        large?: string
    }
}
export const setUsersProfile = (profile:profileType) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer;