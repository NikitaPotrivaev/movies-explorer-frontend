import './Navigation.css';
import { Link } from "react-router-dom";

export function Navigation() {
    return (
    <nav className='navigation__links'>
        <Link className='navigation__links-films' to='/movies'>Фильмы</Link>
        <Link className='navigation__links-films' to='/saved-movies'>Сохранённые фильмы</Link>
    </nav>
    )
}