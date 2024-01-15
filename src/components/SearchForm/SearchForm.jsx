import './SearchForm.css';
import searchImg from '../../images/find-3.svg';
import { Checkbox } from '../Checkbox/Checkbox';
import { useEffect, useState } from 'react';

export function SearchForm({ onSearch, savedRoute }) {

    const [keyWord, setKeyWord] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!savedRoute) {
          const query = localStorage.getItem('keyWord')
    
          if (query) {
            setKeyWord(query)
          }
        }
    }, [savedRoute])

    useEffect(() => {
        if (!savedRoute) {
          const status = localStorage.getItem('checkBox')
    
          if (JSON.parse(status) === true) {
            setCheckBox(true)
          } else {
            setCheckBox(false)
          }
        }
    }, [savedRoute])

    function handleSubmit(e) {
        e.preventDefault()
        if (!keyWord) {
          setError(true)
        } else {
          setError(false)
          onSearch(keyWord, checkBox)
        }
    }

    function handleSearchInputChange(e) {
        setKeyWord(e.target.value)
        setError(false)
    }

    function handleCheckBoxChange(e) {
        setCheckBox(e.target.checked)
        onSearch(keyWord, e.target.checked)
    }

    return (
            <div className='search'>
                <form className='search__form' onSubmit={handleSubmit} noValidate>
                    <div className='search__form-content'>
                        <input className='search__form-input' type='text' placeholder='Фильм' onChange={handleSearchInputChange} value={keyWord || ''} />
                        <span className='search__form-error'>{error ? 'Введите название фильма' : ''}</span>
                    </div>
                    <button className='search__form-button' type='submit'>
                        <img src={searchImg} className='search__img' alt='Кнопка поиска'/>
                    </button>
                </form>
                <Checkbox checkBox={checkBox} changeCheckbox={handleCheckBoxChange}/>
            </div>
    )
}