import './Button.css';

export function Button({ text, isLoggedin }) {
    return <button className={isLoggedin ? 'button button__disapear' : 'button button_green'}>{text}</button>
}