import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { movies } from '../utils/movies';
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header';

export function SavedMovies() {
    const isLoggedin = true
    return (
        <section className='saved__movies'>
            <Header isLoggedin={isLoggedin}/>
            <SearchForm />
            <MoviesCardList 
                movies={movies}
                isSaved={true}
            />
            <div className="saved__margin"></div>
            <Footer />
        </section>
    )
}