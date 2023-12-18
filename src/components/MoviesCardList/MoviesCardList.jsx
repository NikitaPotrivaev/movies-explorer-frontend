import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList() {
    return (
        <div className='movies-card__container'>
            <ul className='movies-card__list'>
                <MoviesCard />
            </ul>
        </div>
    )
}