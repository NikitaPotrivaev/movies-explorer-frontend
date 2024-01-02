import { Button } from '../Button/Button';

export function AccountButton({ isLoggedin }) {
    return (
        <>
            {isLoggedin ? (
                <Button isLoggedin={isLoggedin} text="Аккаунт" />
            ) : (
                <Button isLoggedin={isLoggedin} text="Войти" />
            )}
        </>
    )
}