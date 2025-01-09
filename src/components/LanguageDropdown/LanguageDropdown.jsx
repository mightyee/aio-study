import React, { useState } from 'react';
import './LanguageDropdown.css';
import icons from '../../assets/Icons/index.jsx';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className='dropdown-container'>
      <button className='dropdown-button' onClick={toggleDropdown}>
        <img src={icons.language} alt='language icon' className='globe-icon' />
        <span>{selectedLanguage}</span>
        <img
          src={icons.arrow_drop_down}
          alt='drop down icon'
          className='dropdown-arrow'
        />
      </button>

      {isOpen && (
        <div className='dropdown-menu'>
          <div className='dropdown-item' onClick={() => selectLanguage('繁')}>
            繁
          </div>
          <div className='dropdown-item' onClick={() => selectLanguage('简')}>
            简
          </div>
        </div>
      )}
    </div>
  );
};

{
  /* <div className="language-selector">
<span className="globe-icon">🌐</span>
<span>EN</span>
<span className="dropdown-arrow">▼</span>
</div> */
}

export default LanguageDropdown;
