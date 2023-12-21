import './AboutProject.css';
import { Title } from '../Title/Title';

export function AboutProject() {
    return (
        <section className='about-project' id='about'>
            <Title title="О проекте"/>
            <div className='about-project__container'>
                <article className='about-project__info'>
                    <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className='about-project__info'>
                    <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about-project__duration">
                <div className="about-project__duration-line about-project__duration-line_backend">1 неделя</div>
                <div className="about-project__duration-line about-project__duration-line_fronend">4 недели</div>
                <div className="about-project__duration-line about-project__duration-line_backend-title">Back-end</div>
                <div className="about-project__duration-line about-project__duration-line_frontend-title">Front-end</div>
            </div>
        </section>
    )
}