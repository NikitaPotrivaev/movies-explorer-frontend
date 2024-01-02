class MainApi {
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

    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            } 
        })
        .then(this._checkRequest)
    }

    register(password, email, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, email, name })
        })
        .then(this._checkRequest)
    }

    login(password, email) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, email })
        })
        .then(this._checkRequest)
        .then((data) => {
            localStorage.setItem('token', data.token)
            return data;
        })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    updateUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ name, email })
        })
        .then(this._checkRequest)
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }

    addMovie(movieInfo) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            },
            body: JSON.stringify({ movieInfo })
        })
        .then(this._checkRequest)
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('token') }`
            }
        })
        .then(this._checkRequest)
    }
}

export const mainApi = new MainApi({ baseUrl: 'https://api.kolschik.nomoredomainsmonster.ru' });