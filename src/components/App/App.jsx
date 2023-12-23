import './App.css'
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies'
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { FormLogin } from '../FormLogin/FormLogin';
import { FormRegister } from '../FormRegister/FormRegister';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';


export function App() {
    return (
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
    );
}