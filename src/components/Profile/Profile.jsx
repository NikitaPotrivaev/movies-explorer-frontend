import './Profile.css';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';

export function Profile({ isloggedin, onUpdateUser, onLogout }) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setName(currentUser.name)
        setEmail(currentUser.email)
    }, [currentUser])

    function handleSubmitProfileForm(e) {
        e.preventDefault()
        onUpdateUser(name, email)
    }

    return (
        <>
            <Header isloggedin={isloggedin} />
            <section className='profile'>
                <h3 className='profile__title'>Привет, Никитос!</h3>
                <form className='profile__form' onSubmit={handleSubmitProfileForm}>
                    <label className='profile__input-container'>Имя
                        <input className='profile__input-element' name='name' type='text' defaultValue='Никитос' required></input>
                    </label>
                    <label className='profile__input-container'>Email
                        <input className='profile__input-element' name='email' type='text' defaultValue='nikitos@mail.ru' placeholder='E-mail' required></input>
                    </label>
                    <button className='profile__button' type='submit'>Редактировать</button>
                </form>
                <Link className='profile__exit' to='/' onClick={onLogout}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}