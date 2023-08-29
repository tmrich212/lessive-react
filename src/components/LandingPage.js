import React from 'react';
import video from '../videos/laundryVid.mp4';
import { BiChevronDown } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

//styles 
import './LandingPage.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {

    return ( 
        <div className="landingpage" aria-label='homepage'>
            <video className='bgvideo' src={video} alt='video without sound of a clothesline of sheets blowing in the wind with the ocean in the background'
             muted autoPlay loop />

              {/* <Navbar bg="none" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                <h1>Lessive</h1>
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                <Nav id='nav'>
                    <Nav.Link href="#blog">Our Story</Nav.Link>
                    <Nav.Link href="#about-us">Pricing & Services</Nav.Link>
                    <Nav.Link href="#contact-us">Start a Load</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar> */}

            <nav className="navbar">
                <div className="logo" aria-label='lessive logo text'>
                <h1>Lessive</h1>
                </div>
                <ul className='nav-links'>
                    <li><a href="#about-section">Our Story</a></li>
                    <li><a href="#about-lessive">Pricing & Services</a></li>
                    <li><Link to="/store">Start a Load</Link></li>
                </ul>
            </nav>

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

