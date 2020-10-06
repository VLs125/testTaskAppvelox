import React from 'react'
import'./Sidebar.scss'

const Sidebar = ()=>{
    return(<div className='sidebar_main'>
        <div className='sidebar_logo'>
            <span className='sidebar_logo-text'>Логотип</span>
        </div>
        <div>
        
         <img className='sidebar_img_profile' src={require('../../Img/profile.png')} alt="logo"/>
         <span className='sidebar_text_profile'>Профиль</span>
        </div>
        <div>
            
            <img className='sidebar_img_hospital' src={require('../../Img/hospital.png')} alt="logo"/>
            <span className='sidebar_text_hospital' >Врачи и клиники</span>
        </div>
        <div>
           
            <img className='sidebar_img_message' src={require('../../Img/message.png')} alt="logo"/>
            <span className='sidebar_text_message'>Сообщения</span>
        </div>
        <div>
            
            <img className='sidebar_img_test' src={require('../../Img/test.png')} alt="logo"/>
            <span className='sidebar_text_test'>Тестирование</span>
        </div>
        <div>
           
            <img className='sidebar_img_faq' src={require('../../Img/faq.png')} alt="logo"/>
            <span className='sidebar_text_faq'>Полезно знать</span>
        </div>


        </div>
    )
}
export default Sidebar