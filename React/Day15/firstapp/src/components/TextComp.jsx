import React from 'react'
import './TextComp.css'
import logo from '../assets/logo.svg'

const TextComp = () => {
  return (
    <div className='textComp'>
      <img src={logo} alt="Base Apparel" />
      <div className='we'>WE '  RE</div>
      <div className="coming">C O M I N G</div>
      <div className="coming">S O O N</div>
      <div className="para">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. </div>
      <input type="text" placeholder='Email Address' />
      <button>{`>`}</button>
    </div>
  )
}

export default TextComp