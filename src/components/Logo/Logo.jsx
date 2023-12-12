import './Logo.css';
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <Link className='logo' to='/'>
            <div className='logo-img'></div>
        </Link>
    )
}