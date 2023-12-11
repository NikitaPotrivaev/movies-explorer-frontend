import './Portfolio.css';

export function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__nav'>
                <li className='portfolio__nav-list'>
                    <a href='https://github.com/NikitaPotrivaev/how-to-learn' target="_blank" rel="noreferrer" className='portfolio__nav-link'>Статичный сайт<span className='portfolio__nav-arrow'></span></a>
                </li>
                <li className='portfolio__nav-list'>
                    <a href='https://github.com/NikitaPotrivaev/yet-another-project' target="_blank" rel="noreferrer" className='portfolio__nav-link'>Адаптивный сайт<span className='portfolio__nav-arrow'></span></a>
                </li>
                <li className='portfolio__nav-list'>
                    <a href='https://github.com/NikitaPotrivaev/react-mesto-api-full-gha' target="_blank" rel="noreferrer" className='portfolio__nav-link'>Одностраничное приложение<span className='portfolio__nav-arrow'></span></a>
                </li>
            </ul>
        </div>
    )
}