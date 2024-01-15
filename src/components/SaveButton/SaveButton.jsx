import { useState } from 'react';
import './SaveButton.css';

export function SaveButton() {

    const [isMarked, setIsMarked] = useState(false)

    function handleMark() {
        setIsMarked(!isMarked)
    }

    return (
        <button className={!isMarked ? 'movies-card__save' : 'movies-card__marked'} onClick={handleMark}></button>
    )
}