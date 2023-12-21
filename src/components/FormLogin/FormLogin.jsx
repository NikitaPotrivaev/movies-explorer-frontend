import './FormLogin.css'
import { Form } from '../Form/Form';
import { useFormValidation } from '../hooks/useFormValidation';

export function FormLogin() {

    const { values, handleChange, errors, isValid } = useFormValidation()

    function handleSubmit(e) {
        e.preventDefault()
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
                path="/signup"
            >
            <div className='input'>
                <figcaption className='input__info'>E-mail</figcaption>
                <input name='email' className='input__element' type='email' value={values.email || '' } onChange={ handleChange } minLength="2" maxLength="40" required />
                    <span name='email-error' className='input__error input__error_active'>{errors.email || '' }</span>
            </div>
            <div className='input'>
                <figcaption className='input__info'>Пароль</figcaption>
                <input name='password' className='input__element' type='password' value={values.password || '' } onChange={ handleChange } minLength="6" maxLength="40" required />
                    <span name='email-error' className='input__error input__error_active'>{errors.password || '' }</span>
            </div>
            </Form>
        </>
    )
}