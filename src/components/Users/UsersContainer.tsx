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

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;