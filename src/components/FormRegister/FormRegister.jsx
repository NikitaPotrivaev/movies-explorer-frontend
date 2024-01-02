import '../FormLogin/FormLogin.css'
import { Form } from '../Form/Form';
import { useFormValidation } from '../hooks/useFormValidation';

export function FormRegister() {

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
                title='Добро пожаловать!'
                text='Зарегистрироваться'
                linkCaption='Ещё не зарегистрированы?'
                linkText='Войти'
                path="/signin"
            >
            <div className='input'>
                <p className='input__info'>Имя</p>
                <input name='name' className='input__element' type='text' value={values.name || '' } onChange={ handleChange } minLength="2" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.name || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>E-mail</p>
                <input name='email' className='input__element' type='email' value={values.email || '' } onChange={ handleChange } minLength="2" maxLength="40" required />
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