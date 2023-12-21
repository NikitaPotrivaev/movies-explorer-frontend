import './Main.css';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { Student } from '../Student/Student';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Main() {
    return (
        <>
            <main className='main'>
                <Promo />
                <AboutProject />
                <Techs />
                <Student />
                <Footer />
            </main>
        </>
    )
}