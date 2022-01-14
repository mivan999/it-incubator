import {DialogsDataType, MessageDataType} from '../components/Dialogs/Dialogs';
import {PostDataType} from '../components/Profile/MyPosts/MyPosts';


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'

export type ProfilePageType = {

    posts: PostDataType[]
    newPostText: string | undefined
}
export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type FriendsType = {
    id: number
    name: string
    ava: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type addPostType = {
    message: string | undefined
}



export type StoreType={
    _state:StateType
    addPost:(postMessage: addPostType)=>void
    updateNewPostText: (newText: string | undefined)=>void
    subscriber: (observer: () => void)=>void
    rerenderEntireTree:()=>void
    getState:()=>StateType
    dispatch:(action:ActionType)=>void
}

export const ChangePostAC=(text:string|undefined)=>({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const AddPostAC = (post:addPostType) =>  ({type: ADD_POST,postMessage:post} as const)
export type ActionType=ReturnType<typeof AddPostAC>|ReturnType<typeof ChangePostAC>
const store: StoreType={
    _state:  {
        profilePage: {

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
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 0,
                    name: 'Dimych'
                },
                {
                    id: 1,
                    name: 'Andrey'
                },
                {
                    id: 2,
                    name: 'Sveta'
                },
                {
                    id: 3,
                    name: 'Sasha'
                },
                {
                    id: 4,
                    name: 'Viktor'
                },
                {
                    id: 5,
                    name: 'Valera'
                }

            ],
            messages: [
                {
                    id: 0,
                    message: 'Hi!'
                },
                {
                    id: 1,
                    message: 'Yo'
                }
            ],
        },
        sidebar: {
            friends: [
                {
                    id: 0,
                    name: 'Andriy',
                    ava: '#',
                },
                {
                    id: 1,
                    name: 'Sveta',
                    ava: '#',
                }
            ]
        }
    },
    addPost (postMessage: addPostType) {
        let newPost: PostDataType = {
            id: 3,
            message: postMessage.message,
            likeCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree()
    },
    updateNewPostText (newText: string | undefined) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    subscriber (observer: () => void) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree () {
        console.log('state changed')
    },
    getState(){
        return this._state
    },
    dispatch(action:ActionType){
        if (action.type===ADD_POST){
            let newPost: PostDataType = {
                id: 3,
                message: action.postMessage.message,
                likeCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree()
        } else if(action.type===UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree()
        }
    }
}
export default store