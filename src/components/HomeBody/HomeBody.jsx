import React from 'react'
import './HomeBody.css'
import ex from '../../assets/landscape.jpg'
import logo from '../../assets/logo.png'
import Buttons from './Button'

function HomeBody() {
    return (
        <div className='m'>
            <div className="main__up">
                <div className='div__homebody'>
            <div className='div__homebody__left'>
                
                <h1>LEARN. LEAP & LEAD</h1>
                <Buttons/>
            </div>
            <div className='div__homebody__right'>
                <img style={{width:"100%",height:"55%"}} src={ex} alt="office"/>
            </div>
            </div>
            </div>
            <div className="main__down">
                {/* <h1>Your most valuable asset is theYour most valuable asset is theYour most valuable asset is theYour most valuable asset is theYour most valuable asset is the</h1> */}
            </div>
            </div>
    )
}

export default HomeBody
