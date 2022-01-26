import {PostDataType} from '../components/Profile/MyPosts/MyPosts';
import {ActionType, addPostType, ProfilePageType} from './state';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'
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
    }
const profileReducer = (state:ProfilePageType=initialState, action:ActionType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost: PostDataType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
            }
            let newState={...state}
            newState.posts=[...state.posts]
            newState.posts.push(newPost)
            newState.newPostText=''
            return newState;}
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state}
            newState.newPostText = action.newText
            // state.newPostText = action.newText
            return newState;
        }
        default:
            return state
    }
}

export const ChangePostAC = (text: string | undefined) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const AddPostAC = (post: addPostType) => ({type: ADD_POST, postMessage: post} as const)

export default profileReducer;