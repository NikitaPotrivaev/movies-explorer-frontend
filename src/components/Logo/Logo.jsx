import './Logo.css';

export function Logo(props) {
    return (
        <div className='logo' onClick={props.handleClick}>
            <div className='logo-img'></div>
        </div>
    )
}