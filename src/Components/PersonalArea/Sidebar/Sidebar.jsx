import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Sidebar.scss'
import { SVGFaq } from './SVG/SVGFaq'
import { SVGHospital } from './SVG/SVGHospital'
import { SVGMessage } from './SVG/SVGMessage'
import { SVGProfile } from './SVG/SVGProfile'
import { SVGTest } from './SVG/SVGTest'

const Sidebar = () => {
    return (<div className='sidebar_main'>

        <div className='sidebar_logo'>
            <span className='sidebar_text_logo'>Логотип</span>
        </div>

        <NavLink activeClassName='active' to='/profile'>
        <div className='sidebar_container_profile'>
            <div className='sidebar_icon'>
            <SVGProfile color='red'/>
            </div>
            <span className='sidebar_text_profile'>Профиль</span>
        </div>
        </NavLink>

        <NavLink activeClassName='active' to='/hospitals'>
        <div className='sidebar_container_hospital'>
        <div className='sidebar_icon'>
            <SVGHospital />
        </div>
            <span className='sidebar_text_hospital' >Врачи и клиники</span>
        </div>
        </NavLink>

        <NavLink activeClassName='active' to='/message'>
        <div className='sidebar_container_message'>
        <div className='sidebar_icon'>
            <SVGMessage />
            </div>
            <span className='sidebar_text_message'>Сообщения</span>
        </div>
        </NavLink>

        <NavLink activeClassName='active' to='/test'>
        <div className='sidebar_container_test'>
        <div className='sidebar_icon'>
            <SVGTest />
        </div>
            <span className='sidebar_text_test'>Тест</span>
        </div>
        </NavLink>

        <NavLink activeClassName='active' to='/faq'>
        <div className='sidebar_container_faq'>
        <div className='sidebar_icon'>
            <SVGFaq />
            </div>
            <span className='sidebar_text_faq'>Полезно знать</span>
        </div>
        </NavLink>

    </div>

    )
}
export default Sidebar