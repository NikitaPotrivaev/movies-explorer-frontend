import './MoviesCard.css';
import poster from '../../images/interstellar_2014.jpg';

export function MoviesCard() {
    return (
        <>
        <li className='movies-card'>
                    <img src={poster} className='movies-card__img' alt='Постер к фильму'/>
                    <button className='movies-card__save'>Сохранить</button>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>Интерстеллар</h2>
                    <p className='movies-card__duration'>1 ч 17 м</p>
                </div>
        </li>
        <li className='movies-card'>
                <img src={poster} className='movies-card__img' alt='Постер к фильму'/>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>Интерстеллар</h2>
                    <p className='movies-card__duration'>1 ч 17 м</p>
                </div>
        </li>
        <li className='movies-card'>
                <img src={poster} className='movies-card__img' alt='Постер к фильму'/>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>Интерстеллар</h2>
                    <p className='movies-card__duration'>1 ч 17 м</p>
                </div>
        </li>
            </>
    )
}