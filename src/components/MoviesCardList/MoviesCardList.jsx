import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList({   movies, moviesCardList, onSave, onDelete, isSaved }) {
    return (
        <div className='movies__container'>
            <ul className='movies__list'>
                {movies.map((moviesPoster) => (
                    <MoviesCard
                        key={moviesPoster.id || moviesPoster.movieId}
                        moviesPoster={moviesPoster}
                        moviesCardList={moviesCardList}
                        onSave={onSave}
                        onDelete={onDelete}
                        isSaved={isSaved}
                    />
                ))}
            </ul>
        </div>
    )
}