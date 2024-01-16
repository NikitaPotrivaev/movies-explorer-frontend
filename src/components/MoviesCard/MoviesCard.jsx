import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import { SaveButton } from '../SaveButton/SaveButton';

export function MoviesCard({ moviesPoster, moviesCardList, onSave, onDelete }) {
    const location = useLocation()

    const isSaved = moviesPoster.id && moviesCardList.some((item) => item.movieId === moviesPoster.id)

    function handleMovie() {
        if (isSaved) {
            onDelete(
                moviesCardList.filter((item) => item.movieId === moviesPoster.id)[0]
            )
        } else {
            onSave(moviesPoster)
        }
    }

    function handleDelete() {
        onDelete(moviesPoster)
    }

    function movieTimeInMin(min) {
        const hours = Math.trunc(min / 60)
        const minutes = min % 60
        return `${hours}ч ${minutes}м`
    }

    return (
        <li className='movies-card' key={moviesPoster.id}>
            <a className='movies-card__link' href={moviesPoster.trailerLink} target='_blank' rel='noreferrer'>
                <img src={moviesPoster.image} className='movies-card__img' alt={`Постер к фильму ${moviesPoster.nameRU}`}/>
            </a>
            {matchPath({ path: '/movies' }, location.pathname) && <SaveButton isSaved={isSaved} click={handleMovie} />}
            {matchPath({ path: '/saved-movies' }, location.pathname) && (
            <button type="button" className="movies-card__delete" onClick = {handleDelete}></button>)}
            <div className='movies-card__info'>
                <h2 className='movies-card__title'>{moviesPoster.nameRU}</h2>
                <p className='movies-card__duration'>{movieTimeInMin(moviesPoster.duration)}</p>
            </div>
        </li>
    )
}