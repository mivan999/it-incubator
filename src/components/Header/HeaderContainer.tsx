import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer'
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';

type responseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}
export type AuthPropsType= mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    setAuthUserData: (id:number,email:string,login:string) => void
}

class HeaderContainer extends React.Component <AuthPropsType>{
    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: any) => {
                if(response.data.resultCode===0)
                {
                    let {userId,email,login}=response.data.data
                    this.props.setAuthUserData(userId,email,login)
                }
                console.log(response.data.login)
            })
    }

    render() {
        return <Header />;
    }
}
type mapStateToPropsType={
    isAuth:boolean
    login:string|null
}
let mapStateToProps=(state:AppStateType):mapStateToPropsType=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);