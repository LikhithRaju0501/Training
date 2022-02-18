import React from 'react'
import './CardComp.css'

const CardComp = ({title, number, per,pos, logo}) => {
  return (
    <div className="container">
        <div className="one">
            <h6>{title}</h6>
        <h4>{number} <span style={{color:pos==1?'#D0E562':'red'}}>{per}</span></h4>
        </div>
        <div className="two">
        <i className={logo}  style={{fontSize:'20px'}}></i>
        </div>
    </div>
  )
}

export default CardComp