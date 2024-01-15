import './Movies.css';
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { More } from '../More/More';
import { Preloader } from '../Preloader/Preloader';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';
import { moviesApi } from '../utils/MoviesApi';

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

    const window = document.documentElement.clientWidth
    const cardsURL = 'https://api.nomoreparties.co/';

    useEffect (() => {
        if (window > 768) {
            setCount(12)
            setPlus(3)
        } else if (window <= 768 && window >= 500) {
            setCount(8)
            setPlus(2)
        } else if (window < 500) {
            setCount(5)
            setPlus(2)
        }
    }, [window])

    function moreMoviesLoad() {
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

    function shortMovies(movies) {
        return movies.filter((element) => element.duration < 40)
    }

    function searchMovies(films, keyWord, checkbox) {
        const query = Array.isArray(films) ? films.filter((element) => {
            return (element.nameRU.toLowerCase().includes(keyWord.toLowerCase()) > -1)
        }) : []
        if(checkbox) {
            return shortMovies(query)
        }
        return query
    }

    function searchAndfilterMovies(films, kyeWord, checkBox) {
        const moviesList = searchMovies(films, kyeWord, checkBox)
        setFoundMovies(moviesList)
        localStorage.setItem('movies', JSON.stringify(moviesList))
        setIsLoadingComplited(true)
    }

    function changeMovies(movies) {
        movies.forEach((movie) => {
        if (movie.image) {
            movie.thumbnail = `${cardsURL}${movie.image.formats.thumbnail.url}`
            movie.image = `${cardsURL}${movie.image.url}`
        }
        })
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
                changeMovies(moviesData)
                setOriginalMovies(moviesData)
                searchAndfilterMovies(moviesData, keyWord, checkBox)
            }).catch(() => {
                setError(true)
                setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
                localStorage.removeItem('movies')
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

    useEffect(() => {
        const array = JSON.parse(localStorage.getItem('movies'))
        setLoadMovies(array)
        if (array && !keyWord) {
            setCheckBox(checkBox)
            setFoundMovies(checkBox ? shortMovies(array) : array)
        }
    }, [checkBox, keyWord])

    useEffect(() => {
        if (keyWord) {
            const array = searchMovies(originalMovies, keyWord, checkBox)
            setFoundMovies(array)
        }
    }, [keyWord, checkBox, originalMovies])

    useEffect(() => {
        if (loadMovies) {
            if (loadMovies.length === foundMovies.length) {
                setMore(false)
            } else {
                setMore(true)
            }
        }
    }, [foundMovies, loadMovies])

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(!isLoading), 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="movies">
            <Header isLoggedin={isLoggedin} />
            <SearchForm onSearchMovies={handleSearchMovies} />
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
            {more && <More more={moreMoviesLoad} />}
            <Footer />
        </section>
    )
}