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
    text_color_secondary: ['#c5c5c5', '#8a8a8a'],
    text_color_tertiary: ['#dfdfdf', '#505050'],

    background_color: ['#f9f9f9', '#0e131a'],
    background_color_secondary: ['#f3f3f4', '#191f28'],
    background_color_tertiary: ['#ffffff', '#0f0f0f'],

    accent_color1: ['#7347ee', '#7140C9'],
    accent_color1_fade: ['#7347ee50', '#7140C950'],

    accent_color2: ['#ff8e65', '#7EE687'],
    accent_color2_fade: ['#ff8e6550', '#7EE68750'],

    accent_color3: ['#00cce7', '#FFA28B'],
    accent_color3_fade: ['#00cce750', '#FFA28B50'],

    accent_color4: ['#fac23d', '#929AFF'],
    accent_color4_fade: ['#fac23d50', '#929AFF50']
  };

  const updateColors = () => {
    Object.keys(colorValues).forEach(property => {
      const mode = darkMode ? 1 : 0;
      document.documentElement.style.setProperty(`--${property}`, colorValues[property][mode]);
    });
  };

  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

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
