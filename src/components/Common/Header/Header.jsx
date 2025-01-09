import React, { useState } from 'react';
import images from '../../../assets/index.jsx';
import icons from '../../../assets/Icons/index.jsx';

import LanguageDropdown from '../../LanguageDropdown/LanguageDropdown';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='header-wrapper'>
      <div className='top-header'>
        <div className='header-content'>
          {/* Logo Section */}
          <div className='logo-section'>
            <img
              src={images.Logo}
              alt='AIO Study Platform'
              className='logo-img'
            />
          </div>

          {/* Right Section */}
          <div className='right-section'>

          <LanguageDropdown/>
            {/* <div className='language-selector'>
              <img
                src={icons.language}
                alt='language icon'
                className='globe-icon'
              />

              <span>EN</span>
              <img
                src={icons.arrow_drop_down}
                alt='drop down icon'
                className='dropdown-arrow'
              />
            </div> */}

            <button className='contact-button'>
              <img src={icons.call} alt='call icon' className='phone-icon' />
              Contact Us
            </button>

            <button className='login-button'>
              Login
              <img src={icons.icons} alt='login icon' className='login-arrow' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='mobile-menu-button'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation Bar */}
      <div className={`nav-container ${isMenuOpen ? 'show' : ''}`}>
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/about' className='nav-link'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a href='/schools' className='nav-link'>
                Schools
              </a>
            </li>
            <li className='nav-item'>
              <a href='/media' className='nav-link'>
                Media Highlights
              </a>
            </li>
            <li className='nav-item'>
              <a href='/help' className='nav-link'>
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
