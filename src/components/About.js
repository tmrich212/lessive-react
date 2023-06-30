import React from 'react';

//styles 
import './About.css';

const About = () => {

    return ( 
        <section className="about" id='about-section' aria-label='about section'>
            <h1>Who we are and What we're about</h1>
            <div className="ceo-section about-info">
                <img src={require("../christian-collage.png")} alt="Christian smiling" height='350px' width='auto'/>
                
                <p><h1>Meet, <br/> Christian Pagnia</h1>Christian is founder and CEO of Lessive. He is on a mission to make laundry easier for everyone. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ducimus incidunt blanditiis necessitatibus. Eius sint blanditiis, quod sequi autem reiciendis sit. Labore, magni? Libero aut deserunt maiores porro, ipsam dolor! <br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque facilis, ab, omnis molestias ullam non fugiat possimus praesentium dolorem accusamus nesciunt nobis magni corporis. Voluptates fuga ipsum sed atque?</p>
            </div>
            <div className="about-info" id='about-lessive'>
                <h1>What is Lessive?</h1>
               
                <p>Lessive is essentially the solution to those with a busy schedule that find their laundry piling up along with all the other things life throws at them. Or it can just be for those who <span>hate</span> the process of doing laundry. We also understand that laundry can be something that can be made more accessible to those who could be going through a hard time right now. Let us help you with that. <em>Lessive</em> is a laundry delivery service. You call for a delivery and we will take it to to the nearest partnering laundromat or dry cleaners for you. It's as simple as that.</p>
      
            </div>
        </section>
     );
}
 
export default About;