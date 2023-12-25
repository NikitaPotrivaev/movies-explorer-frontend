import './Header.css';
import { Logo } from '../Logo/Logo';
import { AccountButton } from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useState, useEffect } from 'react';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      }, [isMenuOpen]);

    function toggleMenu() {
        setMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    const isLoggedin = true;

    return (
        <header className="header">
                <Logo />
                {isLoggedin ? (
            <>
                <Navigation />
                <Link className='header__account' to='/profile'>
                    <AccountButton isLoggedin={isLoggedin} />
                </Link> 
                <button className='header__burger' onClick={toggleMenu} type='button'></button>
                {isMenuOpen ? (
                    <>
                    <div className='header__menu header__menu_opened'></div>
                    <div className='header__menu-container header__menu-container_opened'>
                        <BurgerMenu onClose={closeMenu}/>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='header__menu'></div>
                    <div className='header__menu-container'>
                        <BurgerMenu />
                    </div>
                    </>
                    )} 
            </>
                ) : (
                <div className='header__account'>
                    <Link to="/signup" className="header__account-register">Регистрация</Link>
                        <Link to='/signin'>
                            <AccountButton isLoggedin={isLoggedin}/>
                        </Link>
                </div>
                )}
        </header>
    );
}