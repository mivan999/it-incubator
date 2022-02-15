import React from 'react';
//import s from "./Profile.module.css"
import Profile from './Profile';
import axios from "axios";
import {profileType, setUsersProfile} from '../../redux/profile-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType={
    userId:string
}
type ProfileType=mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

type mapDispatchToPropsType={
    setUsersProfile: (profile: profileType) => {readonly type: "SET_USER_PROFILE", readonly profile: profileType}
}
type mapStateToPropsType={
    profile: profileType | null
}

class ProfileContainer extends React.Component<ProfileType> {
    componentDidMount() {
        let UserId=this.props.match.params.userId;
        axios.get<profileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+UserId).then((response) => {
            this.props.setUsersProfile(response.data)
        })
    }

    render() {

        return (

                <Profile {...this.props} profile={this.props.profile}/>

        );
    }
}
let mapStateToProps=(state:AppStateType)=>({
profile:state.profilePage.profile
})
let WithUrlDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUsersProfile})(WithUrlDataContainerComponent);