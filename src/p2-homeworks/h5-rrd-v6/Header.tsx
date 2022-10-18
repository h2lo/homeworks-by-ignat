import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css'

type ActionType = {
    [key: string]: boolean
}

function Header() {

    const navLinkClass = ({isActive}: ActionType) => `${s.navLink} ${isActive ? s.active : s.link}`

    return (
        <div className={s.headerNavigation}>
            <NavLink to={PATH.PRE_JUNIOR} className={navLinkClass}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={navLinkClass}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={navLinkClass}>Junior+</NavLink>
            <div className = {s.round}/>

            {/*    <NavLink to={PATH.PRE_JUNIOR} className={navLink => navLink.isActive ? s.active : s.link}>Pre-Junior</NavLink>*/}
            {/*    <NavLink to={PATH.JUNIOR} className={navLink => navLink.isActive ? s.active : s.link} >Junior</NavLink>*/}
            {/*    <NavLink to={PATH.JUNIOR_PLUS} className={navLink => navLink.isActive ? s.active : s.link} >Junior+</NavLink>*/}

        </div>
    )
}

export default Header

// activeClassName не работает 6 версии rrd, поэтому пишем через тернарный оператр
{/*    <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName = {s.active}>Junior+</NavLink>*/}
