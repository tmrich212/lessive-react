import React from 'react';
import video from '../videos/laundryVid.mp4';
import { BiChevronDown } from "react-icons/bi";
import { useRef } from 'react';


const LandingPage = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth'});
    }

    return ( 
        <div className="landingpage" aria-label='homepage'>
            <video className='bgvideo' src={video} alt='video without sound of a clothesline of sheets blowing in the wind with the ocean in the background'
             muted autoPlay loop />

        <div className="bg-overlay"></div>

        <nav className="navbar">
            <div className="logo" aria-label='lessive logo text'>
            <h1>Lessive</h1>
            </div>
            
            {/* <div className="menu nav"> 
            <a href="/">About</a>
            <a href="/">Contact Us</a>
            </div> */}
        </nav>

        <div className="home">
            <h1>We're like Uber</h1>
            <p>but for laundry</p>
        </div>

        <div className="arrow">
            <button onClick={ handleClick }><BiChevronDown size={50} /></button>
        </div>
       
        </div>
     );
}
 
export default LandingPage;

