import React from 'react';
import {Field, reduxForm } from 'redux-form';

const LoginForm=(props:any)=>{
    return (
    <form onSubmit={props.handleSubmit} >
        <div>
            <Field name={"login"} placeholder={"Login"} component={"input"}/>
        </div>
        <div>
            <Field name={"password"} placeholder={"Password"} component={"input"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}
const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)
const Login = () => {
    const onSubmit=(formData:any)=>{
        console.log(formData)
    }
    return (
        <div>
        <h1>
           LOGIN
        </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;