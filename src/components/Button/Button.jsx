import './Button.css';

export function Button({ text, isLoggedin }) {
    return <div className={isLoggedin ? 'button button_disapear' : 'button button_green'}>{text}</div>
}