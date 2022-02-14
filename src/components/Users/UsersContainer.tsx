import {connect} from 'react-redux';

import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";
import axios from "axios";
import Preloader from '../common/Preloader/Preloader';


type mapStateToPropsType={
    users:UserType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
    isFetching:boolean
}
type mapDispatchToPropsType={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(usersCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}
type responseType = {
    items: UserType[]
    totalCount: number,
    error: string,
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data.items)
        })

    }
    onPageChanges=(pageNumber:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            console.log(response.data.items)
        })

    }
    render() {


        console.log('page=',this.props)
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
            />
            </>
        );
    }
}
export type UserPropsType= mapDispatchToPropsType & mapStateToPropsType
export const  mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
    }
}
// export const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
//     return {
//         follow:(userID:string)=>{
//             dispatch(follow(userID))
//         },
//         unfollow:(userID:string)=>{
//             dispatch(unfollow(userID))
//         },
//         setUsers:(users:UserType[])=>{
//             dispatch(setUsers(users))
//         },
//         setCurrentPage:(page:number)=>{
//             dispatch(setCurrentPage(page))
//         },
//         setTotalUsersCount:(usersCount:number)=>{
//             dispatch(setTotalUsersCount(usersCount))
//         },
//         toggleIsFetching:(isFetching:boolean)=>{
//             dispatch(toggleIsFetching(isFetching))
//         },
//     }
// }

export default  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);

