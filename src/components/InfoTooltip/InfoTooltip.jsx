import successfuly from '../../images/successfuly.svg'
import error from '../../images/error.svg'
import './InfoTooltip.css';

import { useNavigate, useLocation } from "react-router-dom"

export function InfoTooltip({ isOpen, onClose, status, successfulText, errorText }) {
    const location = useLocation()
    const navigate = useNavigate()

    function redirect() {
        if(status) {
            onClose()
            if(location.pathname === '/signup') {
                navigate('/signin')
            }
        }
        onClose()
    }

    return(
        <div className={ `popup ${isOpen ? 'popup_opened' : ''}` }>
            <div className="popup__container">
                <button className="popup__close" onClick = { redirect } type="button" aria-label="Закрыть форму" />
                <div className="auth__status">
                    { status ? (
                        <>
                            <img src={successfuly} className="auth__icon" alt="Успешно" />
                            <p className="auth__text">{ successfulText }</p>
                        </>
                    ) : (
                        <>
                            <img src={error} className="auth__icon" alt="Ошибка"/>
                            <p className="auth__text">{ errorText }</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}