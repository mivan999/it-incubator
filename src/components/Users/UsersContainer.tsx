
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    initialStateType,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';


type mapStateToPropsType={
    usersPage:initialStateType
}
type mapDispatchToPropsType={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
}
export type UserPropsType= mapDispatchToPropsType & mapStateToPropsType
export const  mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return {
        usersPage:state.usersPage
    }
}
export const mapDispatchtoProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchtoProps)(Users);

export default UsersContainer;