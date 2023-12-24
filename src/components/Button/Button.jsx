import './Button.css';

export function Button({ text, isLoggedin }) {
    return <button className={isLoggedin ? 'button button_disapear' : 'button button_green'}>{text}</button>
}