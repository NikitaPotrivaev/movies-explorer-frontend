import './BurgerButton.css';
import burggerIcon from '../../images/Burger.svg';

export function BurgerButton({ isOpen, handleClick }) {
    return (
        <button type="button" className={ !isOpen ? 'burger-button' : '' } onClick={handleClick}>
            <img src={burggerIcon} className='burger-icon' alt='Бургерное меню'/>
        </button>
    )
}