// styles
import './Footer.css'
import React from 'react';
const Footer = () => {
    return ( 
       <div className='footer'>
        <div className="footer-section">
            <img src={require('../Lessive Logo.png')} alt="lessive-logo" height='80px' width='80px'/>
            <h2>&copy;Lessive LLC</h2>
        </div>
        <div className="footer-section">
            <h2>Our Links</h2>
            <a href="#about-section">Meet the Founder</a>
            <a href="#about-section">About Us</a>
            <a href="#pricing-section">Pricing & Services</a>
        </div>
        <div className="footer-section">
            <h2>More from Lessive</h2>
            <a href="/" alt="link to IG">Terms & Conditions</a>
            <a href="/" alt="link to Twitter">FAQ's</a>
            
        </div>
       </div>
     );
}
 
export default Footer;