import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { movies } from '../utils/movies';

export function SavedMovies() {

    return (
        <section className='saved__movies'>
            <SearchForm />
            <MoviesCardList 
                movies={movies}
                isSaved={true}
            />
            <div className="saved__margin"></div>
        </section>
    )
}