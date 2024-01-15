import './MoviesCard.css';
import { SaveButton } from '../SaveButton/SaveButton';

export function MoviesCard({ moviesPoster, isSaved, isMarked }) {

    function movieTimeInMin(min) {
        const hours = Math.trunc(min / 60)
        const minutes = min % 60
        return `${hours}ч ${minutes}м`
    }

    return (
        <li className='movies-card' key={moviesPoster.id}>
            <img src={moviesPoster.image} className='movies-card__img' alt={`Постер к фильму ${moviesPoster.nameRU}`}/>
            {!isSaved ? <SaveButton isMarked={isMarked} /> : <button type="button" className="movies-card__delete"></button>}
            <div className='movies-card__info'>
                <h2 className='movies-card__title'>{moviesPoster.nameRU}</h2>
                <p className='movies-card__duration'>{movieTimeInMin(moviesPoster.duration)}</p>
            </div>
        </li>
    )
}