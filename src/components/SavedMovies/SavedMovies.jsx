import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../utils/constants';

export function SavedMovies({ isLoggedin, moviesCardList, onDelete }) {

    const [loadMovies, setLoadMovies] = useState([])
    const [isLoadingComplited, setIsLoadingComplited] = useState(false)
    const [keyWord, setKeyWord] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    function handleSearchMovies(keyWord, checkBox) {
        setKeyWord(keyWord)
        setCheckBox(checkBox)
        setLoadMovies(searchMovies(moviesCardList, keyWord, checkBox))
        setIsLoadingComplited(true)
    }

    useEffect(() => {
        if (loadMovies.length > 0) {
          setLoadMovies(
            searchMovies(moviesCardList, keyWord, checkBox)
          )
        } else {
          setLoadMovies(moviesCardList)
        }
      }, [moviesCardList])

    return (
        <section className='movies'>
            <Header isLoggedin={isLoggedin}/>
            <SearchForm savedRoute={true} onSearch={handleSearchMovies} />
            {isLoadingComplited ? (
                loadMovies.length > 0 ? (
                    <MoviesCardList 
                        savedRoute={true}
                        movies={loadMovies}
                        onDelete={onDelete}
                />
            ) : (
                <span className="movies__message-error">Ничего не найдено.</span>
            )
            ) : (
            <MoviesCardList
                movies={moviesCardList}
                onDelete={onDelete}
            />
            )}

            <div className="movies__devider"></div>
            <Footer />
        </section>
    )
}