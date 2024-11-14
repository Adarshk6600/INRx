import React, { useRef, useState } from 'react'
import './Sidebar.css'
import { MdDashboard } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { RiProgress2Line } from "react-icons/ri";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { TfiMenu } from "react-icons/tfi";
import { CgCloseR } from "react-icons/cg";









import Menus from '../menus/Menus'

const Sidebar = ({ handleTheme }) => {


  const theme = [
    {
      name: 'light',
      value: 'light'
    },
    {
      name: 'dark',
      value: 'dark'
    },
    {
      name: 'earth',
      value: 'earth'
    },
    {
      name: 'ocean',
      value: 'ocean'
    },

    {
      name: 'fancy',
      value: 'fancy'
    },
    {
      name: 'strawberry',
      value: 'strawberry'
    },
    {
      name: 'lusion',
      value: 'lusion'
    },
    {
      name: 'nature',
      value: 'nature'
    },
    {
      name: 'future',
      value: 'future'
    },
    {
      name: 'neon',
      value: 'neon'
    },
  ]


  const sliderref = useRef(null)
  const [menuToggle, setMenuToggle] = useState(true)
  const handleMenuToggle = () => {
    setMenuToggle(prev => !prev)
    if (menuToggle) {
      sliderref.current.style.transform = 'translateX(0%)'

    } else {
      sliderref.current.style.transform = 'translateX(-100%)'
    }
  }



  return (

    <div ref={sliderref} className='sidebar__main'>
      <div className="sidebar__main__logo">
        <img className='sidebar__main__logo-img' src="../../../public/Logo.png" alt="" />
        <div onClick={handleMenuToggle} className="closeButtonMenu">
          {menuToggle ? <TfiMenu size={25} /> : <CgCloseR size={25} />}
        </div>
      </div>
      <div className="sidebar__main__menulist">
        <Menus icon={<MdDashboard size={25} />} name='Overview' />
        <Menus icon={<IoIosWallet size={25} />} name='Assets' />
        <Menus icon={<RiProgress2Line size={25} />} name='Activity' />
        <Menus icon={<PiHandDepositFill size={25} />} name='Deposit' />
        <Menus icon={<PiHandWithdrawFill size={25} />} name='Withdraw' />
        <Menus icon={<RiMoneyRupeeCircleFill size={25} />} name='Earn' />
        <Menus icon={<BiSupport size={25} />} name='Support' />
        <Menus icon={<VscSettings size={25} />} name='Settings' />
        <Menus icon={<TbLogout size={25} />} name="logout" />
      </div>
      <div className="sidebar__main__footer">


        <select className='w-full p-3 border-none outline-none sidebar__footer__select' onChange={handleTheme}>
          {theme.map((color) => (
            <option className='sidebar__footer__select-option' key={color.value} value={color.value}>{color.name}</option>
          ))}
        </select>

      </div>
    </div>
  )
}

export default Sidebar
