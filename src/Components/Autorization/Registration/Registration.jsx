import React from 'react'
import './Registration.scss'
import Header from '../Header/Header'
import StepperExample from './StepperExample';
const Registration = () => {
    return (
            <div className='autorization'>
                <div className='registration-main'>
                    <Header/>
                    <div className='registration-content'>
                        <div className='registration-title'>Регистрация</div>
                        <div className='registration-text-top'>
                            У вас уже есть аккаунт?<a href='/login'>Войти</a>
                        </div>
                        <StepperExample/>
                    </div>
                    <div className="registration-logo">
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
