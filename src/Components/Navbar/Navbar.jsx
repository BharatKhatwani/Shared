import React from 'react';
import './Navbar.css'; // This path should be correct based on your structure

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
          <li>
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/Coming Event">Coming Event </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
