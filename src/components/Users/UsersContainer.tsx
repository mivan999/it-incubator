import {connect} from 'react-redux';

import {AppStateType} from '../../redux/redux-store';
import {follow, getUsers, setCurrentPage, unfollow, UserType} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


type mapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UserPropsType, {}> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanges = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        console.log('page=', this.props)
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setCurrentPage={this.props.setCurrentPage}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    followingInProgress={this.props.followingInProgress}
                    currentPage={this.props.currentPage}
                    onPageChanges={this.onPageChanges}
                    getUsers={this.props.getUsers}
                />
            </>
        );
    }
}

export type UserPropsType = mapDispatchToPropsType & mapStateToPropsType
export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer)

