import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store';

// type responseType = {
//     resultCode: number
//     messages: string[]
//     data: {
//         id: number
//         email: string
//         login: string
//     }
// }
export type AuthPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
        />;
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);