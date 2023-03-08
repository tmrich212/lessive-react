import React from "react";
import video from '../videos/header.mp4'

const Header = () => {
    return (
        <main className="header">
            <div className="video">
                <video src={video} autoPlay muted loop width='70%' typeof="video/mp4"></video>
            </div>
            <div className="misson">
                <h2>We're Like Uber</h2>
                <h3>but for laundry</h3>
            </div>
        </main>
      );
}
 
export default Header;