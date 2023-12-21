import './Movies.css';
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { More } from '../More/More';
import { Preloader } from '../Preloader/Preloader';
import { movies } from '../utils/movies';

export function Movies() {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(!isLoading), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className='movies'>
            <SearchForm />
            {!isLoading ? (
                <Preloader />
            ) : (
                <MoviesCardList 
                    movies={movies}
                    isSaved={false}
                />
            )}
            <More />
        </section>
    )
}