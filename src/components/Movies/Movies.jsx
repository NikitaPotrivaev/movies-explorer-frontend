import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { MoreButton } from '../MoreButton/MoreButton';

export function Movies() {

    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
        </section>
    )
}