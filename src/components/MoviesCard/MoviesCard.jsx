import './MoviesCard.css';
import { SaveButton } from '../SaveButton/SaveButton';

export function MoviesCard({ moviesPoster, isMarked, isSaved }) {
    return (
        <li className='movies-card' key={moviesPoster.id}>
                <img src={moviesPoster.image} className='movies-card__img' alt={`Постер к фильму ${moviesPoster.title}`}/>
                {!isSaved ? <SaveButton isMarked={isMarked} /> : <button type="button" className="movies-card__delete"></button>}
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{moviesPoster.title}</h2>
                    <p className='movies-card__duration'>{moviesPoster.duration}</p>
                </div>
        </li>
    )
}