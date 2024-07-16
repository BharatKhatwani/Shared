import React from 'react';
import Ips from '../../assets/IPS_photo.jpeg'; // Import the image
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <h1 className='name'>IPS ACADEMY INDORE</h1>
      </div>
      <div className='image-container'>
        <img src={Ips} alt="IPS" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
