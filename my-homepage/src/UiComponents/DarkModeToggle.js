import React, { useState, useEffect } from 'react';
import { FaMoon as MoonIcon } from 'react-icons/fa';
import { BsFillSunFill as SunIcon} from 'react-icons/bs';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  const colorValues = {
    text_color: ['#000000', '#ffffff'],
    background_color: ['#f9f9f9', '#0e131a'],
    background_color_secondary: ['#edeef3', '#191f28'],
    background_color_tertiary: ['#ffffff', '#0f0f0f'],
    accent_color1: ['#7347ee', '#7140C9'],
    accent_color2: ['#ff8e65', '#7EE687'],
    accent_color3: ['#00cce7', '#FFA28B'],
    accent_color4: ['#fac23d', '#929AFF'],
  };

  const updateColors = () => {
    Object.keys(colorValues).forEach(property => {
      const mode = darkMode ? 1 : 0;
      document.documentElement.style.setProperty(`--${property}`, colorValues[property][mode]);
    });
  };

  useEffect(() => {
    updateColors();
  }, [darkMode]);

  return (
    <div>
      <button
        className={`dark-mode-toggle ${darkMode ? 'dark-mode' : 'light-mode'}`}
        onClick={() => handleClick()}
      >
        <span className="light-mode-icon">
          <SunIcon />
        </span>
        <span className="dark-mode-icon">
          <MoonIcon />
        </span>
      </button>
    </div>
  );
}

export default DarkModeToggle;
