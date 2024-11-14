import './RightSection.css'
import { CgArrowTopRight } from "react-icons/cg";
import { FaSortDown } from "react-icons/fa";




import React from 'react'

const RightSection = () => {
  return (
    <div className='main__right'>
      <div className="main__right__card1">
        <div className="main__right_profile">
          <div className='div__border'></div>
          <div className='div__border__one'></div>
          <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" />
        </div>
        <p>Total Balance</p>
        <h1>₹ 15,453,058</h1>
        <span> <button>+12.34%</button><CgArrowTopRight size={30} className='card__button_arrow' /></span>
      </div>

      <div className="main__right__card2">
        <div className="main__right__links">
          <button>Buy</button>
          <button>Sell</button>
          <button>Exchange</button>
        </div>
        <div className="main__right__input">
          <label htmlFor="coin">Coin</label>
          <div><span><img src="../../../../public/white@72x 2.png" alt="" />INRx</span> < FaSortDown size={25} /> </div>
        </div>
        <div className="main__right__input2">
          <label htmlFor="">Amount</label>
          <span className='input__box__input2'><input type="text" value='₹1,324,00' /> <p>₹</p></span>
          <div className='right__input__total'><p>total:</p> <p>₹1,324,00</p> </div>
          <button><img src="../../../../public/Vector 2.png" alt="" /> Buy INRx</button>
        </div>
      </div>
    </div>
  )
}

export default RightSection
