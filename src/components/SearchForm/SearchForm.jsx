import './SearchForm.css';
import searchImg from '../../images/find-3.svg';
import { Checkbox } from '../Checkbox/Checkbox';

export function SearchForm() {

    return (
            <div className='search'>
                <form className='search__form'>
                    <div className='search__form-content'>
                        <input className='search__form-input' type='text' placeholder='Фильм' required/>
                    </div>
                    <button className='search__form-button' type='submit'>
                        <img src={searchImg} className='search__img' alt='Кнопка поиска'/>
                    </button>
                </form>
                <Checkbox />
            </div>
    )
}