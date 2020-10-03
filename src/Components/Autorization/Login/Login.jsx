import React from 'react'
import './Login.scss'
import Header from '../Header/Header'
const Login = () => {
    {
        return (
            <div className='autorization'>
                <div className='login-main'>
                    <Header/>
                    <div className='login-content'>
                        <div className='login-title'>Вход</div>
                        <div className='login-text-top'>
                            У вас нет аккаунта?<a href='/registration'>Зарегистрироваться</a>
                        </div>
                        <form className='login-form'>
                            <label >
                                <input className='login-label-email'  type="email" name="email" placeholder='Почта или Телефон' />
                              <br/>
                                <input className='login-label-password'  type="password" name="password" placeholder=' Пароль' />
                            </label>
                           
                        
                        </form>
                       
                       
                        <div className='login-text-bottom'>
                            Забыли пароль?<a href='/registration'>Восстановить</a>
                        </div>
                        <button className='login-button' type="submit">Войти</button>
                    </div>
                    <div className="login-logo">
                        <img src={require('./logo.png')} alt="logo"/>

                    </div>
                </div>
                <div className='autorization-content'>
                    <div className='autorization-title'>
                        Добро Пожаловать!
                    </div>
                    <div className="autorization-image">
                        <img src={require('./Frame.png')} alt="logo"/>

                    </div>
                    <div className='autorization-text'>
                    Вместе с нами медицина стала проще!
                    </div>

                </div>
            </div>


        );
    }
}
export default Login
