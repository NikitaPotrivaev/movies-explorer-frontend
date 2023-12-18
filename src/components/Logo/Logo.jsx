import './Logo.css';
import { Link } from 'react-router-dom';

export function Logo(props) {
    return (
        <Link className='logo' to='/' onClick={props.handleClick}>
            <div className='logo-img'></div>
        </Link>
    )
}