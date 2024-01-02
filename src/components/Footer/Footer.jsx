import './Footer.css';

export function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__copyright'>&copy; Никита Потриваев 2023</p>
                <ul className='footer__links'>
                    <li>
                        <a href="https://practicum.yandex.ru" className='footer__link' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a href="https://github.com/NikitaPotrivaev" className='footer__link' target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}