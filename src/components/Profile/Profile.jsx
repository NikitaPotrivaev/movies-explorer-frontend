import './Profile.css';
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <div className='profile'>
            <h3 className='profile__title'>Привет, Никитос!</h3>
            <form className='profile__form'>
                <div className='profile__input-container'>Имя
                    <input className='profile__input-element' name='name' type='text' defaultValue='Никитос' required></input>
                </div>
                <div className='profile__input-container'>Email
                    <input className='profile__input-element' name='email' type='text' defaultValue='nikitos@mail.ru' placeholder='E-mail' required></input>
                </div>
                <button className='profile__button' type='submit'>Редактировать</button>
            </form>
            <Link className='profil__exit' to='/'>Выйти из аккаунта</Link>
        </div>
    )
}