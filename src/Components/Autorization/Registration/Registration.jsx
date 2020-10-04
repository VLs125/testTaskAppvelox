import React from 'react'
import './Registration.scss'
import Header from '../Header/Header'
import StepperExample from './StepperExample';
const Registration = () => {
    return (
            <div className='autorization'>
                <div className='login-main'>
                    <Header/>
                    <div className='login-content'>
                        <div className='login-title'>Регистрация</div>
                        <div className='login-text-top'>
                            У вас уже есть аккаунт?<a href='/login'>Войти</a>
                        </div>
                        <StepperExample/>
                        <form className='login-form'>
                            <label >
                                <input className='login-label-email'  type="email" name="email" placeholder='Почта' />
                              <br/>
                              <input className='login-label-phone'  type="text" name="phone" placeholder='Телефон' />
                              <br/>
                              <input className='login-label-password'  type="password" name="password" placeholder='Пароль' />
                              <br/>
                                <input className='login-label-repeatPassword'  type="password" name="repeatPassword" placeholder=' Повторите пароль' />

                            </label>
                           
                        
                        </form>
                       
                       
                        <div className='login-text-bottom'>
                            Забыли пароль?<a href='/registration'>Восстановить</a>
                        </div>
                        <button className='login-button' type="submit">Войти</button>
                    </div>
                    <div className="login-logo">
                        <img src={require('../../Img/logo.png')} alt="logo"/>

                    </div>
                </div>
                <div className='autorization-content'>
                    <div className='autorization-title'>
                    Начните следить за своим<br/> здоровьем вместе с нами!
                    </div>
                    <div className="autorization-image">
                        <img src={require('../../Img/registration.png')} alt="logo"/>

                    </div>
                    <div className='autorization-text'>
                    Вместе с нами медицина стала проще!
                    </div>

                </div>
            </div>


        );
    }

export default Registration
