import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../medias/logo/logo-kasa.svg';

 
const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <Logo className="colored-logo"/>
            </div>
            <nav className='navigation'>
                <ul>
                    <li className='links'>
                        <NavLink
                            className={({isActive}) => (isActive ? 'active_navlink' : 'navlink')}
                            title='Accueil'
                            end to='/'
                        >Accueil</NavLink>
                    </li>
                    <li className='links'>
                        <NavLink
                            className={({isActive}) => (isActive ? 'active_navlink' : 'navlink')}
                            title='À propos'
                            end to='/About'
                        >À propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header