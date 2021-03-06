import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
// import Friends from './Friends/Friends';
// import { SidebarType} from '../../redux/state';

// export type NavbarPropsType={
//     friends:FriendsType
// }
const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                         activeClassName={s.active}
                >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                         // className={navData => navData.isActive ? s.active : s.item}
                         activeClassName={s.active}
                >Messages</NavLink>
                {/*<Friends friends={props.friends}/>*/}
                {/*</div>*/}
                {/*/!*<div className={s.item}>*!/*/}
                {/*    <NavLink to "/">News</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to "/">Music</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to "/">Settings</NavLink>*/}
            </div>
            <div className={s.item}>
                <NavLink to="/users"
                         // className={classNav => classNav.isActive ? s.active : s.item}
                         activeClassName={s.active}
                >Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;