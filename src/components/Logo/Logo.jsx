import { Link } from 'react-router-dom';
import './Logo.css';

export function Logo(props) {
    return (
        <div className='logo' onClick={props.handleClick}>
            <Link className='logo-img' to='/'></Link>
        </div>
    )
}