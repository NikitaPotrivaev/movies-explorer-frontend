import './BurgerMenu.css';
import { Link } from 'react-router-dom';

export function BurgerMenu({ onClose }) {
    return (
      <>
        <button className='menu__close-button' onClick={onClose} type='button'></button>
        <nav className='menu__nav'>
          <Link className='menu__nav-link' to='/'>Главная</Link>
          <Link className='menu__nav-link' to='/movies'>Фильмы</Link>
          <Link className='menu__nav-link' to='/saved-movies'>Сохранённые фильмы</Link>
          <button className='menu__accaunt-button'>Аккаунт</button>
        </nav>
      </>
    )
}