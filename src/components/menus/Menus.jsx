import './Menus.css'
import React from 'react'

const Menus = (props) => {
  return (
    <div className='menus__main'>

      <span>{props.icon}</span>
      <span>{props.name}</span>

    </div>
  )
}

export default Menus
