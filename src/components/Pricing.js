import React from "react";

//styles
import './Pricing.css'

const Pricing = () => {
    return ( 
        <div className='pricing' id="pricing-section">
            <div className="pricing-overlay">
                <h1>Pricing & Services</h1>

                <div className="services-container">
                <div className="container">
                    <h2>Laundry</h2>
                    <p>We charge a $1.15/lb per load<br />Free pick-up and delivery!</p>                   
                </div>
                <div className="container">
                    <h2>Dry Cleaning</h2>
                    <p>We charge a $1.15/lb per load<br />Free pick-up and delivery!</p>                   
                </div>
            </div>
            <button className="start-btn">start a load</button>
            </div>
        </div>
     );
}
 
export default Pricing;