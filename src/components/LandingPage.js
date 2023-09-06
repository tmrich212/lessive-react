import React from 'react';
import video from '../videos/laundryVid.mp4';
import { BiChevronDown } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Navbar } from 'react-bootstrap';

//styles 
import './LandingPage.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {

    return ( 
        <div className="landingpage" aria-label='homepage'>
            <video className='bgvideo' src={video} alt='video without sound of a clothesline of sheets blowing in the wind with the ocean in the background'
             muted autoPlay loop />
            
            <Container style={{"background": "none", "width": "100%"}} className='justify-content-end m-0 p-0'>
                <Navbar expand='sm' align='center' style={{"fontFamily": "Ysabeau SC", "width": "100%", "textAlign": "center"}}>
                    <Navbar.Brand href='/' style={{"fontSize": "3rem", "color": "white"}}>Lessive</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                    <ul className='nav-links'>
                    <li><a href="#about-section">Our Story</a></li>
                    <li><a href="#about-lessive">Pricing & Services</a></li>
                    <li><Link to="/store">Start a Load</Link></li>
                </ul>
                    </Navbar.Collapse>
                </Navbar>
            </Container>


        <div className="home">
            <h1>We're like Uber</h1>
            <p>but for laundry</p>
        </div>
   
        <div className="arrow">
            <button><a href='#about-section'  className='scroll-btn'><BiChevronDown size={50}/></a></button>
        </div>
       
        </div>
     );
}
 
export default LandingPage;

