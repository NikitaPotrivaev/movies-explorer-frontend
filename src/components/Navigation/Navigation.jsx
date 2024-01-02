import './Navigation.css';
import { Link } from "react-router-dom";

export function Navigation() {
    return (
    <nav className='navigate'>
        <Link className='navigate__link' to='/movies'>Фильмы</Link>
        <Link className='navigate__link' to='/saved-movies'>Сохранённые фильмы</Link>
    </nav>
    )
}