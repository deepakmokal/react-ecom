import React from 'react'
import flagIcon from '../assets/images/india.svg';
import userIcon from '../assets/images/user.svg';
import likeIcon from '../assets/images/heart.svg';
import cartIcon from '../assets/images/cart.svg';

import '../assets/css/scss/pages/_profilesection.scss'

const ProfileSection = () => {
  return (
    <>
     <div className='profile-section-wrapper'>
        <a href="#" className='sellbtn'>
            Sell with us
        </a>
        <a href="#" className='icons'>
            <img src={flagIcon} alt="flag" />
        </a>
        <a href="#" className='icons'>
            <img src={userIcon} alt="user" />
        </a>
        <a href="#" className='icons'>
            <img src={likeIcon} alt="like" />
        </a>
        <a href="#" className='icons'>
            <img src={cartIcon} alt="cart" />
        </a>
     </div>
    </>
  )
}

export default ProfileSection