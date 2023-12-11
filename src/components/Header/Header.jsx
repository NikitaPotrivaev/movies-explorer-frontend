import './Header.css';
import logo from '../../images/logo.svg';

export function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="логотип шапки профиля" />
            </div>
            <ul className='header__links'>
                <li className='header__links-films'>Фильмы</li>
                <li className='header__links-films'>Сохранённые фильмы</li>
            </ul>
            <div className='header__account'>
                <p className='header__register'>Регистрация</p>
                <button className='header__button-account'>Аккаунт</button>
            </div>
        </header>
    );
}