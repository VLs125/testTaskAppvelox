import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import'./Profile.scss'
import Sidebar from './Sidebar/Sidebar'

const Profile = ()=>{
    return(<div className='profile-main'>
        <div>
            <Sidebar/>
        </div>
        <div>
        <ProfileHeader/>
        </div>
        </div>
    )
}

export default Profile