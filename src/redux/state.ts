import {DialogsDataType, MessageDataType} from '../components/Dialogs/Dialogs';
import {PostDataType} from '../components/Profile/MyPosts/MyPosts';

export type ProfilePageType = {

    posts: PostDataType[]
}
export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
}
export type FriendsType = {
    id: number
    name: string
    ava: string
}
export type SidebarType={
    friends:FriendsType[]
}
let state: StateType = {
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
            {id:1,
            name:"Sveta",
            ava:'#',}
        ]
    }
}
export default state