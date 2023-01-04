import React from 'react'
import './Paragarph.css'
import handicon from '../../asset/Pixelhand1.png'
const Paragarph = () => {
  return (
    <div className='Paragarph'>
        <div className='para'>
            <h1>Help fund the next <br/> prank, get an<br/> exclusive NFT, print <br/> or merch.</h1>
            <p>We are working with some hot artists to create prank-specific NFTs, prints and other merch. When you buy UNFK art, you fund the prank.</p>
        </div>
        <div className='web'>
            <div className='back '>
                <button>ENTER EMAIL OR PHONE NUMBER</button>
            </div>
            <div className='wite'>
                <button>NOTIFY ME</button>
            </div>
            <div className='imgee'>
                <img src={handicon} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Paragarph