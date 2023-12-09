import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';

function Header() {
  const [open, setOpen] = useState(false);

  function handleDropdown() {
    setOpen(!open);
  };

  return (
      <>
        <header className='home-header'>
          <h2>Robert Brockmann</h2>
          <h1>
            <span>Tech and Web Dev</span>
          </h1>
          <p>
            A place for my interests in tech. <br /> Web development, security, Raspberry Pi, IT and programming.
          </p>
        </header>
        <div className='links-container'>
          <Link to="/about" className="about-button">
            About
          </Link>          
            <button className="toggle-button" onClick={handleDropdown}>Links</button>

        </div>
      </>
  );
};

export default Header;