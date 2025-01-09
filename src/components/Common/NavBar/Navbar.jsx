import React from 'react';
import './Navbar.css'; // Import the CSS file


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Schools</a>
        <a href="#">Media Highlights</a>
        <a href="#">Help</a>
      </div>
    </nav>
  );
};

export default Navbar;
