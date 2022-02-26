import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
type propsType={
    login:string|null,
    isAuth:boolean
}
const Header = (props:propsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.sibbelka.ru%2Fimg%2Fheader_logo.png&imgrefurl=http%3A%2F%2Fwww.sibbelka.ru%2F&tbnid=ayiJ8Hwr5rB5QM&vet=10CDQQMyh-ahcKEwjoiIrd_LD0AhUAAAAAHQAAAAAQAg..i&docid=uuh8zIeSXo8eOM&w=291&h=331&itg=1&q=header%20logo&client=opera&ved=0CDQQMyh-ahcKEwjoiIrd_LD0AhUAAAAAHQAAAAAQAg"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth? props.login:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;