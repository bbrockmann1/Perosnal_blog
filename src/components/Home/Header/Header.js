import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleDropdown() {
    setOpen(!open);
  };

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <>
        <header className='home-header'>
          <h2>Robert Brockmann</h2>
          <h1>
            <span>Tech and Web Dev</span>
          </h1>
          <p>
            A place for my interests in tech. <br /> Web development, security, IT, and programming.
          </p>
        </header>
        <div className='links-container'>
          <Link to="/about" className="about-button">
            About
          </Link>
          <div className="toggle-button" onClick={handleDropdown} ref={dropdownRef}> Links
            {open && (
            <div className="dropdown-content">
              <a href="https://www.linkedin.com/in/robert-brockmann" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/bbrockmann1" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href='mailto: bbrockmann1@gmail.com'>
                bbrockmann1@gmail.com
              </a>
            </div>
          )}
        </div>
        </div>
      </>
  );
};

export default Header;