import React from 'react';
import './FloatingButton.css';

import icons from '../../assets/Icons/index.jsx'

const FloatingButton = () => {
  return (
    <div className='floating-button'>
      <img src={icons.floatingIcon} alt='Bookmark' className='icon' />
      <span className='button-text'>My List</span>
    </div>
  );
};

export default FloatingButton;
