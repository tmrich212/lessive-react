import React from 'react';
import video from '../videos/laundryVid.mp4';
import { BiChevronDown } from "react-icons/bi";

//styles 
import './LandingPage.css'


const LandingPage = () => {


    return ( 
        <div className="landingpage" aria-label='homepage'>
            <video className='bgvideo' src={video} alt='video without sound of a clothesline of sheets blowing in the wind with the ocean in the background'
             muted autoPlay loop />


            <nav className="navbar">
                <div className="logo" aria-label='lessive logo text'>
                <h1>Lessive</h1>
                </div>
                <ul className='nav-links'>
                    <li><a href="#about-section">Our Story</a></li>
                    <li><a href="#about-lessive">What We Do</a></li>
                    <li><a href="#form-section">Contact Us</a></li>
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

