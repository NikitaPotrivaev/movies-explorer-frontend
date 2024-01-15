import './Profile.css';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';

export function Profile({ onUpdateUser, isLoggedin, onLogout, isOpen, onClose, status }) {
    const currentUser = useContext(CurrentUserContext)
    const [isDataChanged, setDataChanged] = useState(false);
    const { values, setValues, handleChange, errors, isValid } = useFormValidation()

    useEffect(() => {
        values.name === currentUser.name && values.email === currentUser.email
          ? setDataChanged(false)
          : setDataChanged(true);
      }, [values, currentUser.name, currentUser.email]);

    useEffect(() => {
        setValues({
          name: currentUser.name,
          email: currentUser.email,
        });
      }, [currentUser.name, currentUser.email, setValues]);

    function handleSubmit(e) {
        e.preventDefault()
        onUpdateUser(values)
    }

    return (
        <>
            <Header isLoggedin={isLoggedin}/>
            <section className='profile'>
                <h3 className='profile__title'>{`Привет, ${currentUser.name}!`}</h3>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <label className='profile__input-container'>Имя
                        <input name='name' className='profile__input-element' placeholder='Имя' type='text' value={values.name || '' } onChange = { handleChange } minLength="2" maxLength="40" required ></input>
                    </label>
                        <span className='profile__input-element-error profile__input-element-error_active'>{errors.name || '' }</span>
                    <label className='profile__input-container'>Email
                        <input name='email' className='profile__input-element' placeholder='E-mail' type='email' value={values.email || '' } onChange = { handleChange } minLength="2" maxLength="40" required ></input>
                    </label>
                        <span className='profile__input-element-error profile__input-element-error_active'>{errors.email || '' }</span>
                    <button className= {`profile__button ${!isDataChanged || !isValid ? 'profile__button-inactive' : ''}`} disabled={ !isValid || !isDataChanged } type='submit'>Редактировать</button>
                </form>
                <Link className='profile__exit' to='/' onClick={onLogout}>Выйти из аккаунта</Link>
            </section>
            <InfoTooltip 
                successfulText = 'Данные успешно обновлены'
                errorText = 'Имя или Email введены некорректно'
                isOpen = { isOpen }
                onClose = { onClose }
                status = { status }
            />
        </>
    )
}