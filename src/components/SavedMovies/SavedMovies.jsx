import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { movies } from '../utils/movies';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';

export function SavedMovies(props) {
    return (
        <section className='movies'>
            <Header isLoggedin={props.isLoggedin}/>
            <SearchForm />
            <MoviesCardList 
                movies={movies}
                isSaved={true}
            />
            <div className="movies__devider"></div>
            <Footer />
        </section>
    )
}