import {PostDataType} from '../components/Profile/MyPosts/MyPosts';
import {ActionType, addPostType, ProfilePageType} from './state';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'

const profileReducer = (state:ProfilePageType, action:ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: 3,
                // message: action.postMessage.message,
                message: state.newPostText,
                likeCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const ChangePostAC = (text: string | undefined) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const AddPostAC = (post: addPostType) => ({type: ADD_POST, postMessage: post} as const)

export default profileReducer;