import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList({ movies, isMarked, isSaved }) {
    return (
        <div className='movies__container'>
            <ul className='movies__list'>
                {movies.map((moviesPoster) => (
                    <MoviesCard
                        key={moviesPoster.id}
                        moviesPoster={moviesPoster}
                        isMarked={isMarked}
                        isSaved={isSaved}
                    />
                ))}
            </ul>
        </div>
    )
}