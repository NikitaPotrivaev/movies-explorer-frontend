import './Checkbox.css'

export function Checkbox({ checkBox, changeCheckbox }) {
    return (
        <div className="checkbox">
            <p className="checkbox__caption">Короткометражки</p>
            <input className="checkbox__input" type="checkbox" onChange={changeCheckbox} checked={checkBox}/>
        </div>
    )
}