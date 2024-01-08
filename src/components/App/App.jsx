import './App.css'
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { FormLogin } from '../FormLogin/FormLogin';
import { FormRegister } from '../FormRegister/FormRegister';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mainApi } from '../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute';

export function App() {
    const [isLoggedin, setIsloggedin] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [savedMovies, setSavedMovies] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedin) {
        mainApi.getUserInfo()
          .then((userInfo) => {
            setCurrentUser(userInfo)
          })
          .catch(err => console.log(`Сервер не нашёл данные, ${err}`))
        }
      }, [isLoggedin])

      useEffect(() => {
        const token = localStorage.getItem('token')
         if(token) {
           mainApi.checkToken(token)
            .then(() => {   
                 setIsloggedin(true)
                 navigate('/')
             })
           .catch(err => console.log(`Ошибка при обработке токена, ${err}`))
         }
       }, [isLoggedin, navigate])

       useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            mainApi.getSavedMovies()
                .then((moviesData) => {setSavedMovies(moviesData.filter((item) => item.owner === currentUser._id))
            }).catch(err => console.log(`Ошибка при удалении карточки, ${err}`))}
        }, [currentUser])

        function handleLogin(password, email) {
            mainApi.login(password, email)
              .then(res => {
                  localStorage.setItem('token', res.token)
                  setIsloggedin(true)
                  navigate('/movies')
              })
              .catch(err => {console.log(`Ошибка при авторизации пользователя ${err}`)})
        }

        function handleRegister(name, email, password) {
            mainApi.register(name, email, password)
              .then(() => {
                navigate('/signin')
            })
            .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
            })
        }

        function handleLogout() {
            localStorage.removeItem('token')
        }

        function handleUpdateUser(user) {
            mainApi.updateUserInfo(user)
              .then((res) => {
                setCurrentUser(res)
              })
              .catch(err => console.log(`Ошибка при редактировании профиля, ${err}`))
        }

        function handleSaveMovie(movie) {
            mainApi.addMovie(movie)
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
        <CurrentUserContext.Provider value={ currentUser }>
        <div className="app">
            <Routes>
            <Route path='*'
                    element = {<NotFound />}
                />
                <Route path='/'
                    element = {<Main
                        isloggedin = { isLoggedin }
                    />}
                />
                <Route path='/movies'
                    element = { <ProtectedRoute
                        isloggedin = { isLoggedin }
                        element = { Movies }
                        onSave = { handleSaveMovie }
                        onDelete={ handleMovieDelete }
                        moviesCardList = { savedMovies } 
                    /> }
                />
                <Route path='/saved-movies'
                   element = { <ProtectedRoute
                        isloggedin = { isLoggedin }
                        element = { SavedMovies }
                        onDelete = { handleMovieDelete }
                        moviesCardList = { savedMovies }
                    /> }
                />
                <Route path='/profile'
                   element = { <ProtectedRoute
                        isloggedin = { isLoggedin }
                        element = { Profile }
                        onLogout = { handleLogout }
                        onUpdateUser = { handleUpdateUser }
                    /> }
                />
                <Route path="/signup"
                   element = {<FormRegister
                        onRegister = { handleRegister }
                />}
                />
                <Route path="/signin"
                    element = {<FormLogin 
                        onLogin = { handleLogin }
                />}
                />
            </Routes>
        </div>
        </CurrentUserContext.Provider>
    );
}