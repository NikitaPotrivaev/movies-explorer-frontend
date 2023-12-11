import './Main.css';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { Student } from '../Student/Student';

export function Main() {
    return (
        <main className='main'>
           <Promo />
           <AboutProject />
           <Techs />
           <Student />
        </main>
    )
}