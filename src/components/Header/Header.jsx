import './Header.css';
import { Logo } from '../Logo/Logo';
import { AccountButton } from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useState, useEffect } from 'react';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      }, [isMenuOpen]);

    function handleClick() {
        setIsLoggedin(true)
    }

    function toggleMenu() {
        setMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className="header">
                <Logo handleClick = {handleClick}/>
                {isLoggedin ? (
            <>
                <Navigation />
                <Link className='header__account' to='/profile'>
                    <AccountButton isLoggedin={isLoggedin} />
                </Link> 
                <button className='header__burger' onClick={toggleMenu} type='button'></button>
                {isMenuOpen ? (
                    <>
                    <div className='menu menu_opened'></div>
                    <div className='menu__container menu__container_opened'>
                        <BurgerMenu onClose={closeMenu}/>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='menu'></div>
                    <div className='menu__container'>
                        <BurgerMenu />
                    </div>
                    </>
                    )} 
            </>
                ) : (
                <div className='header__account'>
                    <Link to="/signup" className="header__register">Регистрация</Link>
                        <Link to='/signin'>
                            <AccountButton isLoggedin={isLoggedin}/>
                        </Link>
                </div>
                )}
        </header>
    );
}