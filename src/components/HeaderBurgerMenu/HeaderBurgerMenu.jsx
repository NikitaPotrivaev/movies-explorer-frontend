import './HeaderBurgerMenu.css';
import { Link } from 'react-router-dom';

export function HeaderBurgerMenu({ onClose }) {
    return (
      <>
        <button className='header__menu-close-button' onClick={onClose} type='button'></button>
        <nav className='header__menu-nav'>
          <Link className='header__menu-nav-link' to='/'>Главная</Link>
          <Link className='header__menu-nav-link' to='/movies'>Фильмы</Link>
          <Link className='header__menu-nav-link' to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className='header__menu-nav-button' to='/profile'>
            <div className='header__menu-nav-accaunt-button'>Аккаунт</div>
          </Link>
        </nav>
      </>
    )
}