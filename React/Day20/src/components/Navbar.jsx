import React from 'react'
import './Navbar.css'

const Navbar = ({arr}) => {
  return (
    <div>
      <ul>
        {arr.map((item,index)=>{
          return(
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar