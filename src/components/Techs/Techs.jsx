import './Techs.css';
import { Title } from '../Title/Title';

export function Techs() {
    return (
        <section className='tech'>
            <Title title='Технологии'/>
            <div className='tech__container'>
                <h2 className='tech__title'>7 технологий</h2>
                <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='tech__list'>
                    <li className='tech__list-element'>HTML</li>
                    <li className='tech__list-element'>CSS</li>
                    <li className='tech__list-element'>JS</li>
                    <li className='tech__list-element'>React</li>
                    <li className='tech__list-element'>Git</li>
                    <li className='tech__list-element'>Express.js</li>
                    <li className='tech__list-element'>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}