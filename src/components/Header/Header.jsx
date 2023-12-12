import './Header.css';
import { Logo } from '../Logo/Logo';
import { AccountButton } from '../AccountButton/AccountButton';

export function Header({ isLoggedin }) {
    return (
        <header className="header">
            <Logo />
            {isLoggedin ? (
            <>
                <ul className='header__links'>
                    <li className='header__links-films'>Фильмы</li>
                    <li className='header__links-films'>Сохранённые фильмы</li>
                </ul>
                <div className='header__account'>
                    <AccountButton />
                </div>
            </>
            ) : (
            <div className='header__account'>
                <p className='header__register'>Регистрация</p>
                <AccountButton />
            </div>
            )}
        </header>
    );
}