import './AccountButton.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export function AccountButton({ onClose, isLoggedin }) {
    return (
        <Link to="/profile" onClick={onClose}>
            {isLoggedin ? (
                <Button text="Аккаунт" />
            ) : (
                <Button text="Войти" />
            )}
        </Link>
    )
}