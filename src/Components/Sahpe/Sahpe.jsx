import React from 'react'
import './Sahpe.css'
import Grow from '../../asset/Group.png'
import joe from '../../asset/joemanchi4.png'
import glasses from '../../asset/image22.png'
import hair from '../../asset/384.png'
const Sahpe = () => {
  return (
    <div className='Shape'>
        <div className='side'>
            <h1>Help us UNFK earth, one prank at a time.</h1>
            <p>We are on a mission to stop bad actors from killing the planet by pranking them into submission.
               <br/><br/>Corporate villain or cowardly politician...we are coming for you!</p>
        </div>
        <div className='Two'>
            <img src={Grow} alt='group'/>
        </div>
        <div className='all'>
            <img src={hair} alt='hair'/>
            <img src={joe} alt='hair'/>
            <img src={glasses} alt='hair'/>
        </div>
    </div>
  )
}

export default Sahpe