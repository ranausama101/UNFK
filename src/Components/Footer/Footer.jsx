import React from 'react'
import footer from '../../asset/Group 2459.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='log'>
            <img src={footer} alt='footer'/>
            <p>Brought to you by the lovely people who didn’t start Amazon or a bunch of other crappy things.</p>
        </div>
    </div>
  )
}

export default Footer