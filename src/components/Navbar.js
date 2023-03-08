import React from "react";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
                <div className="logo">
                    <h1>Lessive</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;
