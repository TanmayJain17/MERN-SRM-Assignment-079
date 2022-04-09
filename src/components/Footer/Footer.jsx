import React from 'react'
/* import logo from '../../assets/logo.png' */
import logo from '../../assets/loginlogo2.png'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import activator from '../../assets/footer/activator.png'
import startup from '../../assets/footer/startup.png'
import ibm from '../../assets/footer/ibm.png'
import blockchain from '../../assets/footer/blockchain.png'

function Footer() {
    return (
        <div className='div__footer'>
            <div className='footer__details'>
            <div className='footer__comp'>
                <img src={logo} alt='logo'/>
                <h4>Enabling trust that's easy to prove.</h4>
            </div>
            <div className='footer__lis'>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> College of Engineering</h3>
                <h3><i class="fas fa-hand-point-right"></i> College of Medicine</h3>
                <h3><i class="fas fa-hand-point-right"></i> School of Management</h3>
                <h3><i class="fas fa-hand-point-right"></i> College of Sciences & Humanities</h3>
            </div>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> Newsletter</h3>
                <h3><i class="fas fa-hand-point-right"></i> Services</h3>
                <h3><i class="fas fa-hand-point-right"></i> 100% Placement record</h3>
                <h3><i class="fas fa-hand-point-right"></i> Team</h3>
            </div>
            <div className='footer__li'>
                
                <h3><i class="fas fa-hand-point-right"></i> Admissions</h3>
                <h3><i class="fas fa-hand-point-right"></i> SignIn</h3>
                <h3><i class="fas fa-hand-point-right"></i> SRMJEE 2022</h3>
            </div>
            </div>


            </div>
            <div className='soc'>
            <div className='footer__socials'>
                {/* <SocialIcon url="https://angel.co/" bgColor='#ffa000'/> */}
                <SocialIcon url="https://instagram.com/" bgColor='#ffa000'/>
                <SocialIcon url="https://facebook.com/" bgColor='#ffa000'/>
                <SocialIcon url="https://linkedin.com/" bgColor='#ffa000'/>
                <SocialIcon url="https://twitter.com/" bgColor='#ffa000'/>
            </div>
            </div>
            {/* <div className='footer__bottom'>
                <p>Reputationaire is lovingly crafted in Melbourne, Australia with the help of our supporters:</p>
                <div className='footer__bottom__imgs'>
                    <img src={activator} alt='act'/>
                    <img src={startup} alt='startup'/>
                    <img src={ibm} alt='ibm'/>
                    <img src={blockchain} alt='block'/>
                </div>
                <p>© Reputationaire ™</p>
            </div> */}
        </div>
    )
}

export default Footer

