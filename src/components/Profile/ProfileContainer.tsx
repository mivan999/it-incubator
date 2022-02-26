import React from 'react';
//import s from "./Profile.module.css"
import Profile from './Profile';
import {getUsersProfile, profileType} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type ProfileType =
    mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType>

type mapDispatchToPropsType = {
    getUsersProfile: (UserId:string) => void
}
type mapStateToPropsType = {
    profile: profileType | null
}

class ProfileContainer extends React.Component<ProfileType> {
    componentDidMount() {
        let UserId = this.props.match.params.userId;

       this.props.getUsersProfile(UserId)
    }

    render() {

        return (

            <Profile
                profile={this.props.profile}
                // getUsersProfile={this.props.getUsersProfile}
            />

        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);