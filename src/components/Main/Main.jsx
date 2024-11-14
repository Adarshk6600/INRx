import Header from '../Header/Header'
import './Main.css'
import React from 'react'
import RightSection from './Right/RightSection'
import MidSection from './Mid/MidSection'

const Main = () => {
  return (
    <div className='main__main'>
      <Header />
      <div className="main__body">
        <MidSection />
        <RightSection />
      </div>
    </div>
  )
}

export default Main
