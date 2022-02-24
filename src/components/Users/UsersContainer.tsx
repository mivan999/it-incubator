import {connect} from 'react-redux';

import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,toggleFollowingProgress,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";
import axios from "axios";
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";


type mapStateToPropsType={
    users:UserType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
    isFetching:boolean
    followingInProgress: string[]
}
type mapDispatchToPropsType={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(usersCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
    toggleFollowingProgress:(isFetching:boolean, userId:string)=>void
}
type responseType = {
    items: UserType[]
    totalCount: number,
    error: string,
}

class UsersContainer extends React.Component<UserPropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            console.log(data.items)
        })

    }
    onPageChanges=(pageNumber:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
       usersAPI.getUsers(pageNumber,this.props.pageSize)
           .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            console.log(data.items)
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress:state.usersPage.followingInProgress,
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer);

