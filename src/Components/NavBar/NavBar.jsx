import React from 'react'
import vector from '../../asset/Vector.png'
import Pixel from '../../asset/Pixel cursor 1.png'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='main'>
        <div className='right'>
            <img src={vector} alt='logo'/>
        </div>
        <div className='left'>
            <div className='test'>
                <button style={{background:'black',color:'white',marginTop:'14%'}} type="button">CONNECT YOUR WALLET</button>
            </div>
            <div className='cursor'>
                <img className='cur' src={Pixel} alt='pixel'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar