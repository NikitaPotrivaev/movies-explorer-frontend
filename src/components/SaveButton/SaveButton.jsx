import './SaveButton.css';

export function SaveButton({ click, isSaved }) {

    return (
        <button className={!isSaved ? 'movies-card__save' : 'movies-card__marked'} onClick={click}></button>
    )
}