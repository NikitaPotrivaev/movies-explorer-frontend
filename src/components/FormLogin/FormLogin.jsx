import './FormLogin.css'
import { Form } from '../Form/Form';
import { useFormValidation } from '../hooks/useFormValidation';

export function FormLogin({ onLogin, isOpen, onClose, status }) {

    const { values, handleChange, errors, isValid } = useFormValidation()

    function handleSubmit(e) {
        e.preventDefault()
        onLogin(values["email"], values["password"])
    }

    return(
        <>
            <Form
                onSubmit={handleSubmit}
                isValid={isValid}
                isDisabled={!isValid || ''}
                title='Рады видеть!'
                text='Войти'
                linkCaption='Ещё не зарегистрированы?'
                linkText='Регистрация'
                errorText = 'Неправильные почта или пароль.'
                isOpen = { isOpen }
                onClose = { onClose }
                status = { status }
                path="/signup"
            >
            <div className='input'>
                <p className='input__info'>E-mail</p>
                <input name='email' className='input__element' type='email' onChange = { handleChange } value={values.email || '' } minLength="2" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.email || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>Пароль</p>
                <input name='password' className='input__element' type='password' value={values.password || '' } onChange={ handleChange } minLength="6" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.password || '' }</span>
            </div>
            </Form>
        </>
    )
}