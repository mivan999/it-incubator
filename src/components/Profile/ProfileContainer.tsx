import React from 'react';
//import s from "./Profile.module.css"
import Profile from './Profile';
import {getUsersProfile, profileType,getStatus,updateStatus} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string
}
type ProfileType =
    mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType>

type mapDispatchToPropsType = {
    getUsersProfile: (UserId:string) => void
    getStatus:(userId:string)=>void
    updateStatus:(status:string)=>void
}
type mapStateToPropsType = {
    profile: profileType | null
    status:string
}

class ProfileContainer extends React.Component<ProfileType> {
    componentDidMount() {

        let UserId = this.props.match.params.userId;
        if(!UserId){
            UserId="9514"
        }
       this.props.getUsersProfile(UserId)
        this.props.getStatus(UserId)
    }

    render() {



        return (

            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />

        );
    }
}

// let AuthRedirectContainer=(props:any)=>{
//     if (!props.isAuth) return <Redirect to={"/login"}/>
//     return <ProfileContainer {...props}/>
// }
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getUsersProfile,getStatus,updateStatus}),
    // withAuthRedirect
)(ProfileContainer)