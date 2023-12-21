import './Student.css';
import { Title } from '../Title/Title';
import { Portfolio } from '../Portfolio/Portfolio';
import Photo from '../../images/MyPhoto.jpg';

export function Student() {
    return (
        <section className='student' id='student'>
            <Title title='Студент' />
            <div className='student__info'>
                <article className='student__info-text'>
                    <h2 className='student__info-name'>Никита</h2>
                    <h3 className='student__info-about'>Веб-разработчик, 26 лет</h3>
                    <p className='student__info-description'>Я родился и живу в Москве, закончил факультет авиационных систем и комплексов МГТУ ГА. Работаю в S7 Technics инженером. Недавно начал кодить. Решил открыть для себя новые горизонты, поэтому начал изучать программирование</p>
                    <a className='student__info-github student__info-github_link' href='https://github.com/NikitaPotrivaev' rel='noreferrer' target='_blank'>Github</a>
                </article>
            <img src={Photo} className='student__info-photo' alt='Моё фото'/>
            </div>
            <Portfolio />
        </section>
    )
}