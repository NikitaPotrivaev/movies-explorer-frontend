import { SHORT_MOVIES } from '../utils/moviesConstants'

export const moviesURL = 'https://api.nomoreparties.co/';

export function handleShortMovies(movies) {
    return movies.filter((element) => element.duration < SHORT_MOVIES)
}

export function searchMovies(movies, keyWord, checkbox) {
    const query = Array.isArray(movies) ? movies.filter((element) => {
        return (element.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1)
    }) : []
    if(checkbox) {
        return handleShortMovies(query)
    }
    return query
}

export function getMovieTimeInMin(min) {
    const hours = Math.trunc(min / 60)
    const minutes = min % 60
    return `${hours}ч ${minutes}м`
}

export function showMovies(movies) {
    movies.forEach((movie) => {
        movie.thumbnail = `${moviesURL}${movie.image.formats.thumbnail.url}`
        movie.image = `${moviesURL}${movie.image.url}`
    })
}