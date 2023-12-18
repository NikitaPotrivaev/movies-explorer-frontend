import './App.css'
import { Header } from "../Header/Header";
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Movies } from '../Movies/Movies'

export function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
            <Movies />
        </div>
    );
}