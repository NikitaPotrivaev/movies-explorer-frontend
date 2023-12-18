import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export function AccountButton({ isLoggedin }) {
    return (
        <Link to="/profile">
            {isLoggedin ? (
                <Button isLoggedin={isLoggedin} text="Аккаунт" />
            ) : (
                <Button isLoggedin={isLoggedin} text="Войти" />
            )}
        </Link>
    )
}