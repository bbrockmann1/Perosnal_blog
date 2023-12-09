import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='border'>
      <header className='home-header'>
        <h2>Robert Brockmann</h2>
        <h1>
          <span>Tech and Web Dev</span>
        </h1>
        <p>
          A place for my interests in tech. <br /> Web development, security, Raspberry Pi, IT and programming.
        </p>
      </header>
    </div>
    
  );
};

export default Header;