import React from 'react';
import profilepic from '../assets/profilepic.PNG';
import './ProfilePic.css';
import Name from './Name'


const ProfilePic = () => {
  return (
    <div className='pp z-0'>
        <img src={profilepic} className='pic hover:animate-pulse drop-shadow-lg' alt='profilepicture ' />
        <Name className='name '/>

    </div>
  )
}

export default ProfilePic