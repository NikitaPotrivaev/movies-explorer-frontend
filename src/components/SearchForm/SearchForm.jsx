import './SearchForm.css';
import searchImg from '../../images/find-3.svg';
import { Checkbox } from '../Checkbox/Checkbox';

export function SearchForm() {

    return (
            <div className='search'>
                <form className='search__form'>
                    <div className='search__form-content'>
                        <input className='search__input' type='text' placeholder='Фильм' required/>
                    </div>
                    <button className='search__button' type='submit'>
                        <img src={searchImg} className='search__img'/>
                    </button>
                </form>
                <Checkbox />
            </div>
    )
}