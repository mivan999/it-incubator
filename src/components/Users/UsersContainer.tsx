import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";
import axios from "axios";


type mapStateToPropsType={
    users:UserType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
}
type mapDispatchToPropsType={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(usersCount:number)=>void
}
type responseType = {
    items: UserType[]
    totalCount: number,
    error: string,
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data.items)
        })

    }
    onPageChanges=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            console.log(response.data.items)
        })

    }
    render() {


        console.log('page=',this.props)
        return (
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

    }
}
export const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(page:number)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount:(usersCount:number)=>{
            dispatch(setTotalUsersCountAC(usersCount))
        },
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

