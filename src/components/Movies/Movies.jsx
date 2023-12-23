import './Movies.css';
import { useState, useEffect } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { More } from '../More/More';
import { Preloader } from '../Preloader/Preloader';
import { movies } from '../utils/movies';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';

export function Movies() {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(!isLoading), 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className='movies'>
            <Header />
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
            <Footer />
        </section>
    )
}