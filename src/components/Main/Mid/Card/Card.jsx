import './Card.css'

import React from 'react'

const Card = (props) => {
  return (
    <div className='Card__main' style={{ background: props.bg2 }}>
      <div className="card__main-head" style={{ background: props.bg1 }}>
        {props.icon}
      </div>
      <h1>{props.price}</h1>
      <p>{props.name}</p>
    </div>
  )
}

export default Card
