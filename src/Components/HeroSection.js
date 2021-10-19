import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroSection() {
    return (
        <div className='hero-container'>
        <Carousel autoPlay = "true" infiniteLoop = "true" >
        <div>
        <img src="images/arena.png" />
        </div>
        <div>
        <img src="images/centroadm.jpg" />
        </div>
        <div>
        <img src="images/florindo.jpg" />
        </div>
        <div>
        <img src="images/gemas.png" />
        </div>
        <div>
        <img src="images/mercado.png" />
        </div>
        <div>
        <img src="images/rodovia.png" />
        </div>
        <div>
        <img src="images/teatro.jpg" />
        </div>
        <div>
        <img src="images/UEPa.jpg" />
        </div>
    </Carousel>
    </div>
    );
}

export default HeroSection;

