import { Link } from "react-router-dom";
import './Form.css';
import { Logo } from "../Logo/Logo";
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';

export function Form({children, title, text, linkCaption, linkText, path, onSubmit, isDisabled, isValid, successfulText, errorText, isOpen, onClose, status }) {

    return (
        <>
        <section className="form">
            <div className="form__header">
                <Logo />
                <h2 className="form__header-title">{title}</h2>
            </div>
            <form className="form__base" onSubmit={onSubmit} noValidate>
                <div className="form__base-inputs">
                    {children}
                </div>
                    <button className={isValid ? 'form__base-button' : 'form__base-buttton-inactive'} disabled={isDisabled}>{text}</button>
                <div className="form__link-container">
                    <p className="form__link-caption">{linkCaption}</p>
                    <Link className="form__link" to={path}>{linkText}</Link>
                </div>
            </form>
        </section>
        <InfoTooltip
            successfulText = { successfulText }
            errorText = { errorText }
            isOpen = { isOpen }
            onClose = { onClose }
            status = { status }
         />
        </>
    )
}