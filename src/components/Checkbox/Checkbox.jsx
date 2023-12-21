import './Checkbox.css'

export function Checkbox() {
    return (
        <div className="checkbox">
            <p className="checkbox__caption">Короткометражки</p>
            <input className="checkbox__checkbox" type="checkbox" />
        </div>
    )
}