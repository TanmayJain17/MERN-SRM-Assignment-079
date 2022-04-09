import React from 'react'
import './Features.css'
import aarush from '../../assets/vectors/aarush.jpg'
import milan from '../../assets/vectors/milan.jpg'
import rudra from '../../assets/vectors/rudra.png'
import siiec from '../../assets/vectors/SIIEC.png'
import security from '../../assets/vectors/security.svg'
import trust from '../../assets/vectors/trust.svg'
import anonymous from '../../assets/vectors/anonymous.svg'
import website from '../../assets/vectors/website.svg'
import group from '../../assets/vectors/group.svg'
import business from '../../assets/vectors/business.svg'
import key from '../../assets/vectors/key.svg'


function Features() {
    return (
        <>
        <div className='div__features'>
            <div className='feature'>
                <img src={security} alt='feature' />
                <h2>LEARN</h2>
                <p>Learn from India's best faculties</p>
            </div>
            <div className='feature'>
                <img className='trust' src={trust} alt='feature' />
                <h2>LEAP</h2>
                <p>That's one small step for a man, one giant leap for mankind</p>
            </div>
            <div className='feature'>
                <img src={anonymous} alt='feature' />
                <h2 className='anony'>LEAD</h2>
                <p>Fight for the things that you care about, but do it in a way that will lead others to join you.
</p>
            </div>
        </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={aarush} alt='feature' />
                <h2>Personal or Professional</h2>
                <p>You choose which aspects of your reputation you reveal and to who.</p>
            </div>
            <div className='feature'>
                <img src={milan} alt='feature' />
                <h2>Only you hold the keys</h2>
                <p>Your "social credit score" is locked away in a secure vault, encrypted on a public distributed blockchain ledger.</p>
            </div>
    </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={rudra} alt='feature' />
                <h2>Works with any website</h2>
                <p>Import your reputation profile from any online service you already use.</p>
            </div>
            <div className='feature'>
                <img src={siiec} alt='feature' />
                <h2 className='anony'>Trust is the world's currency</h2>
                <p>Use who you know to facilitate trust in a professional or personal context and increase your social status.</p>
            </div>
        </div>
</>
    )
}

export default Features
