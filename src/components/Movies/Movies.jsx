import './Movies.css';
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { More } from '../More/More';
import { Preloader } from '../Preloader/Preloader';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';
import { moviesApi } from '../../utils/MoviesApi';
import { handleShortMovies, showMovies, searchMovies } from '../../utils/constants'
import { 
    DISPLAY_MEDIUM, 
    DISPLAY_MOBILE, 
    DESCTOP_COUNT, 
    DESCTOP_QUONTITY, 
    MEDIUM_COUNT, 
    MOBILE_COUNT, 
    MEDIUM_MOBILE_QUONTITY, 
} from '../../utils/moviesConstants'

export function Movies({ isLoggedin, onSave, onDelete, moviesCardList }) {

    const [isLoading, setIsLoading] = useState(false)
    const [more, setMore] = useState(false)
    const [count, setCount] = useState(0)
    const [plus, setPlus] = useState(0)
    const [loadMovies, setLoadMovies] = useState([])
    const [originalMovies, setOriginalMovies] = useState([])
    const [isLoadingComplited, setIsLoadingComplited] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const [foundMovies, setFoundMovies] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const [searchMessage, setSearchMessage] = useState('')
    const [isError, setError] = useState(false)

    const resize = document.documentElement.clientWidth

    useEffect (() => {
        if (resize > DISPLAY_MEDIUM) {
            setCount(DESCTOP_COUNT)
            setPlus(DESCTOP_QUONTITY)
        } else if (resize <= DISPLAY_MEDIUM && resize >= DISPLAY_MOBILE) {
            setCount(MEDIUM_COUNT)
            setPlus(2)
        } else if (resize < DISPLAY_MOBILE) {
            setCount(MOBILE_COUNT)
            setPlus(MEDIUM_MOBILE_QUONTITY)
        }
    }, [resize])

    function loadMoreMovies() {
        setLoadMovies((load) =>
            foundMovies.slice(0, load.length + plus)
        )
    }

    useEffect(() => {
        if (foundMovies.length > 0) {
            if (foundMovies.length > count) {
                setLoadMovies(foundMovies.slice(0, count))
                setMore(true)
            } else {
                setLoadMovies(foundMovies)
            }
        } else if (foundMovies.length === 0) {
            setIsLoadingComplited(true)
            setLoadMovies([])
        }
    }, [count, foundMovies])

    useEffect(() => {
        const array = JSON.parse(localStorage.getItem('movies'))
        setLoadMovies(array)
        if (array && !keyWord) {
            setCheckBox(checkBox)
            setFoundMovies(checkBox ? handleShortMovies(array) : array)
        }
    }, [checkBox, keyWord])

    useEffect(() => {
        if (keyWord) {
            const array = searchMovies(originalMovies, keyWord, checkBox)
            setFoundMovies(array)
        }
    }, [keyWord, checkBox, originalMovies])

    useEffect(() => {
            if (loadMovies.length === foundMovies.length) {
                setMore(false)
            } else {
                setMore(true)
            }
    }, [foundMovies, loadMovies])

    function searchAndfilterMovies(films, kyeWord, checkBox) {
        const moviesList = searchMovies(films, kyeWord, checkBox)
        setFoundMovies(moviesList)
        localStorage.setItem('movies', JSON.stringify(moviesList))
        setIsLoadingComplited(true)
    }

    function handleSearchMovies(keyWord, checkBox) {
        setLoadMovies([])
        setKeyWord(keyWord)
        setCheckBox(checkBox)
        localStorage.setItem('keyWord', keyWord)
        localStorage.setItem('checkBox', checkBox)
        if (!originalMovies.length) {
            setIsLoading(true)
            moviesApi.getMovies().then((moviesData) => {
                showMovies(moviesData)
                setOriginalMovies(moviesData)
                searchAndfilterMovies(moviesData, keyWord, checkBox)
            }).catch((error) => {
                setError(true)
                setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
                localStorage.removeItem('movies')
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        } else {
            searchAndfilterMovies(originalMovies, keyWord, checkBox)
            setIsLoading(false)
            setError(false)
        }
    }

    return (
        <section className="movies">
            <Header isLoggedin={isLoggedin} />
            <SearchForm onSearch={handleSearchMovies} />
            {isLoading ? (
                <Preloader /> 
            ) : isLoadingComplited ? (
                loadMovies && foundMovies.length > 0 ? (
                    <MoviesCardList
                        movies={loadMovies}
                        moviesCardList={moviesCardList}
                        onSave={onSave}
                        onDelete={onDelete}
                    />
                ) : foundMovies.length === 0 && originalMovies.length > 0 ? (
                    <span className="movies__message-error">Ничего не найдено.</span>
                ) : ('')
            ) : (
                isError && (
                    <span className="movies__message-error">{searchMessage}</span>
                )
            )}
            {more && <More isLoad={loadMoreMovies} />}
            <Footer />
        </section>
    )
}