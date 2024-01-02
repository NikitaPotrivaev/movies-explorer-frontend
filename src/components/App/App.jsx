import './App.css'
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies'
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { FormLogin } from '../FormLogin/FormLogin';
import { FormRegister } from '../FormRegister/FormRegister';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mainApi } from '../utils/MainApi';
import { moviesApi } from '../utils/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';


export function App() {
    const [isLoggedin, setIsloggedin] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [savedMovies, setSavedMovies] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedin) {
        moviesApi.getUserInfo()
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
       }, [])

       useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            mainApi.getSavedMovies()
                .then((moviesData) => {setSavedMovies(moviesData.filter((item) => item.owner === currentUser._id))
            }).catch(err => console.log(`Ошибка при удалении карточки, ${err}`))}
        }, [currentUser])

        function handleRegister(password, email, name) {
            mainApi.register(password, email, name)
              .then(() => {
                navigate('/sign-in')
            })
            .catch(err => {console.log(`Ошибка при регистрации пользователя ${err}`)
            })
        }

    return (
        <CurrentUserContext.Provider value={ currentUser }>
        <div className="app">
            <Routes>
                <Route path='/'
                    element = {<Main/>}
                />
                <Route path='/movies'
                    element = {<Movies/>}
                />
                <Route path='/saved-movies'
                   element = {<SavedMovies />}
                />
                <Route path='/profile'
                   element = {<Profile />}
                />
                <Route path="/signup"
                   element = {<FormRegister />}
                />
                <Route path="/signin"
                    element = {<FormLogin />}
                />
                <Route path='*'
                    element = {<NotFound />}
                />
            </Routes>
        </div>
        </CurrentUserContext.Provider>
    );
}