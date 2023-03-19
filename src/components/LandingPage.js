import React from 'react';
// import video from '../production ID_4245059.mp4';
import { BiChevronDown } from "react-icons/bi";

const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <video class='bgvideo' src='https://vod-progressive.akamaized.net/exp=1679209441~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2398%2F16%2F411992995%2F1769916854.mp4~hmac=a4b96a86507526db16a03d1389aa507ab1d8bc250238397f29c5182884edc27b/vimeo-prod-skyfire-std-us/01/2398/16/411992995/1769916854.mp4' muted autoPlay loop />

        <div className="bg-overlay"></div>

        <div className="navbar">
            <div className="logo">
            <h1>Lessive</h1>
            </div>
            
            <div className="menu"> 
            <a href="/">About</a>
            <a href="/">Contact Us</a>
            </div>
        </div>

        <div className="home">
            <h1>We're like Uber</h1>
            <p>but for laundry</p>
        </div>

        <div className="arrow">
            <i><BiChevronDown /></i>
        </div>
       
        </div>
     );
}
 
export default LandingPage;