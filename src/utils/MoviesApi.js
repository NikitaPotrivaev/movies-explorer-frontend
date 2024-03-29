class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkRequest(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
              "Content-Type": "application/json",
            },
        }).then(this._checkRequest)
    }
}

export const moviesApi = new MoviesApi({ baseUrl: 'https://api.nomoreparties.co/beatfilm-movies' });