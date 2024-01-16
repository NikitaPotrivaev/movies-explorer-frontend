import './App.css'
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies'
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { FormLogin } from '../FormLogin/FormLogin';
import { FormRegister } from '../FormRegister/FormRegister';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { mainApi } from '../utils/MainApi';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export function App() {
    const [isLoggedin, setIsloggedin] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [savedMovies, setSavedMovies] = useState([])
    const [status, setStatus] = useState(false)
    const [tooltip, setTooltip] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const token = localStorage.getItem('token')
         if(token) {
           mainApi.checkToken(token)
            .then(() => {
                setIsloggedin(true)
                navigate(location)
             })
           .catch(err => console.log(`Ошибка при обработке токена, ${err}`))
         }
       }, [isLoggedin])

    useEffect(() => {
        if (isLoggedin) {
        Promise.all([ mainApi.getUserInfo(), mainApi.getSavedMovies() ])
            .then(([userInfo, savedMovies]) => {
                setCurrentUser(userInfo)
                setSavedMovies(savedMovies);
            })
            .catch(err => console.log(`Сервер не нашёл данные, ${err}`))
        }
    }, [isLoggedin])

    useEffect(() => {
        const timer = setTimeout(() => setTooltip(false), 2000)
        return () => clearTimeout(timer)
    })

    function closePopup() {
        setTooltip(false)
    }

    function handleLogin(email, password) {
        mainApi.login(email, password)
            .then(res => {
                localStorage.setItem('token', res.token)
                setIsloggedin(true)
                navigate('/movies')                 
            })
            .catch(err => {console.log(`Ошибка при авторизации пользователя ${err}`)
            setTooltip(true)
            setStatus(false)           
        })
    }

    function handleRegister(name, email, password) {
        mainApi.register(name, email, password)
            .then(() => {
            handleLogin(email, password)
        })
        .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
            setTooltip(true)
            setStatus(false)            
        })
    }

    function handleLogout() {
        localStorage.clear()
        setIsloggedin(false)
    }

    function handleUpdateUser(user) {
        mainApi.updateUserInfo(user.name, user.email)
            .then((res) => {
            setCurrentUser(res)
            setTooltip(true)
            setStatus(true)   
            })
        .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
            setTooltip(true)
            setStatus(false)            
        })
    }

    function handleSaveMovie(movieInfo) {
        mainApi.addMovie(movieInfo)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies])
            })
        .catch(err => console.log(`Ошибка при сохранении фильма, ${err}`))
    }

    function handleMovieDelete(movie) {
        mainApi.deleteMovie(movie._id)
            .then(() => {setSavedMovies((element) => element.filter((item) => item._id !== movie._id))
            })
        .catch(err => console.log(`Ошибка при удалении карточки, ${err}`))
    }

    return (
        <CurrentUserContext.Provider value = { currentUser }>
        <div className="app">
            <Routes>
                <Route path='/'
                    element = {<Main
                        isLoggedin = { isLoggedin } 
                    />}
                />
                <Route path='/movies'
                    element = { <ProtectedRoute
                        element = { Movies }
                        isLoggedin = { isLoggedin }
                        onSave = { handleSaveMovie }
                        onDelete={ handleMovieDelete }
                        moviesCardList = { savedMovies }
                    /> }
                />
                <Route path='/saved-movies'
                    element = { <ProtectedRoute
                        element = { SavedMovies }
                        isLoggedin = { isLoggedin }
                        onDelete = { handleMovieDelete }
                        moviesCardList = { savedMovies }
                    /> }
                />
                <Route path='/profile'
                    element = { <ProtectedRoute
                        element = { Profile }
                        isLoggedin = { isLoggedin }
                        onLogout = { handleLogout }
                        onUpdateUser = { handleUpdateUser }
                        isOpen = { tooltip }
                        onClose = { closePopup }
                        status = { status }
                    /> }
                />
                <Route path="/signup"
                   element = {<FormRegister
                        onRegister = { handleRegister }
                        isOpen = { tooltip }
                        onClose = { closePopup }
                        status = { status }
                />}
                />
                <Route path="/signin"
                    element = {<FormLogin 
                        onLogin = { handleLogin }
                        isOpen = { tooltip }
                        onClose = { closePopup }
                        status = { status }
                />}
                />
                <Route path='*'
                    element = {<NotFound />}
                />
            </Routes>
        </div>
        </CurrentUserContext.Provider>
    );
}