import React from "react";
import background from '../pexels-pixabay-271711.jpg';
// import video from '../videos/header.mp4' 

const Header = () => {
    const styles = {
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        color: 'white'
    }

    return (

            <div className="header" style={styles}>
                <div className="misson" 
                style={{ 
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: 8,
                    padding: 20,
                    }}>
                    <h2 style={{ fontSize: 50}}>We're Like Uber</h2>
                    <p>but for laundry</p>
                </div>
            </div>
        // </div>
      );
}
 
export default Header;