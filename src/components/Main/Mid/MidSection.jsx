import Card from './Card/CArd'
import './MidSection.css'
import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";
import { BsBarChartFill } from "react-icons/bs";
import Chart from './Chart/Chart';



const MidSection = () => {
  return (
    <div className='main__mid'>
      <div className='main__mid__card'>
        <div className="div">
          <p>Upgrade Your Plan to</p> <p className='main__mid__card-premium'>Premium</p>
          <p>and Get Unlimited Access</p>
        </div>
        <button>Upgrade Now</button>
      </div>
      <div className="card__holder">
        <Card bg2='pink' bg1='pink' icon={<HiBanknotes size={40} />} name='Total Assets' price='₹ 15,000' />
        <Card bg2='#c1bffe' bg1='#c1bffe' icon={<FaBriefcase size={40} />} name='Total Assets' price='₹ 15,000' />
        <Card bg2='#EAE7F1' bg1='#EAE7F1' icon={<BsBarChartFill size={40} />} name='Total Assets' price='₹ 15,000' />
      </div>
      <div className="chart__container">
        <Chart />
      </div>
    </div>
  )
}

export default MidSection
