import React from 'react';
import './SearchBar.css';

import images from '../../assets/index.jsx';
import icons from '../../assets/Icons/index.jsx';

const SearchBar = () => {
  return (
    <div className='search-wrapper'>
      <img
        src={images.vector}
        alt='search vector'
        className='background-image'
      />

      <div className='search-container animate-slide-fade'>
        <div className='input-container'>
          <img src={icons.search} alt='search icon' className='search-icon' />
          <input type='text' placeholder='Search School Address' />
          <button className='search-btn'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
