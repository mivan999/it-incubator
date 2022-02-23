import {DialogsDataType, MessageDataType} from '../components/Dialogs/Dialogs';
import {PostDataType} from '../components/Profile/MyPosts/MyPosts';
import profileReducer, {AddPostAC, ChangePostAC, profileType, setUsersProfile} from './profile-reducer';
import dialogsReducer, {
    sendMessageAC,
    updateNewMessageBodyAC
} from './dialogs-reducer';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from './users-reducer';
import { setAuthUserData } from './auth-reducer';
// import {getUsersAC} from './users-reducer';


export type ProfilePageType = {

    posts: PostDataType[]
    newPostText: string | undefined
    profile:profileType|null
}
export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
    newMessageBody: string
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


export type StoreType = {
    _state: StateType
    addPost: (postMessage: addPostType) => void
    updateNewPostText: (newText: string | undefined) => void
    subscriber: (observer: () => void) => void
    rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof ChangePostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setAuthUserData>


const store: StoreType = {
    _state: {
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
            profile:null,
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
            newMessageBody: ''
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
    addPost(postMessage: addPostType) {
        let newPost: PostDataType = {
            id: 3,
            message: postMessage.message,
            likeCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree()
    },
    updateNewPostText(newText: string | undefined) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    subscriber(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.rerenderEntireTree()

    }
}
export default store