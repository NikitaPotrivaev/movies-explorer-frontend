import successfuly from '../../images/successfuly.svg'
import error from '../../images/error.svg'
import './InfoTooltip.css';
import { useEffect } from 'react';

export function InfoTooltip({ isOpen, onClose, status, successfulText, errorText }) {

    useEffect(() => {
        if (isOpen) return;
        
        function handleESC(e) {
          if (e.key === "Escape") {
            onClose()
          }
        }
        document.addEventListener("keydown", handleESC);
    
        return () => document.removeEventListener("keydown", handleESC);
    }, [isOpen]);

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
          onClose();
        }
      }

    return(
        <div className={ `popup ${isOpen ? 'popup_opened' : ''}` } onMouseDown={handleOverlayClose}>
            <div className="popup__container">
                <button className="popup__close" onClick = { onClose } type="button" aria-label="Закрыть форму" />
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