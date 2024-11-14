import './Header.css'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { TfiMenu } from "react-icons/tfi";
import { CgCloseR } from "react-icons/cg";







const Header = () => {

  return (
    <div className='flex-wrap header__main'>
      <div className=" flex-wrap header__main__left">
        <p>Welcome Back,</p> <h1>Sally!</h1>
      </div>
      <div className="flex-wrap header__main__right">
        <div className="header__main__input">
          <span className="head__main_input-settings">
            <CiSearch size={20} /> <input type="text" placeholder='Search' />
          </span>
          <GiSettingsKnobs size={20} />
        </div>
        <span>
          <IoIosNotifications className='media' size={30} />
        </span>
        <span className='media header__input_profile' ><img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" /></span>
        <span className='media'>
          <PiDotsThreeOutlineVerticalFill size={30} />
        </span>
      </div>
    </div>
  )
}

export default Header
