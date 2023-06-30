// styles
import './Footer.css'

const Footer = () => {
    return ( 
       <div className='footer'>
        <div className="footer-section">
            <img src={require('../Lessive Logo.png')} alt="lessive-logo" height='70px' width='70px'/>
            <h2>Lessive LLC</h2>
        </div>
        <div className="footer-section">
            <h2>Our Links</h2>
            <a href="#about-section">Meet the Founder</a>
            <a href="#about-section">About Us</a>
            <a href="#form-section">Get in Contact</a>
        </div>
        <div className="footer-section">
            <h2>More from Lessive</h2>
            <a href="/">Terms & Conditions</a>
            <a href="/">FAQ's</a>
            <a href="/"></a>
        </div>
       </div>
     );
}
 
export default Footer;