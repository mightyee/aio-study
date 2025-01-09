import React from 'react';
import './Footer.css';

import images from '../../../assets/index.jsx';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <img src={images.wcag} alt='footer wcag' className='footer-logo' />
        <img src={images.footerWfa} alt='footer wfa' className='footer-logo' />
      </div>
      <div className='footer-links'>
        <a href='#legal' className='footer-link'>
          Important Legal Notices
        </a>
        <span className='footer-divider'>|</span>
        <a href='#sitemap' className='footer-link'>
          Sitemap
        </a>
        <span className='footer-divider'>|</span>
        <a href='#accessibility' className='footer-link'>
          Accessibility
        </a>
      </div>
      <div className='footer-bottom'>
        <p>Copyright © AIO Study Platform</p>
      </div>
    </footer>
  );
};

export default Footer;
