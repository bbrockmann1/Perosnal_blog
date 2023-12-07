import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css';
import logo from '../media/navbarlogo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  };

    return (  
      <>
        <nav className='nav'>
          <Link to="/">
            <img src={logo} alt={'Robert Brockmann'} className='site-title'></img>
          </Link>  
          <ul>
            <CustomLink to='/about' className='ul1'>About</CustomLink>
            <span className='ul2' onClick={handleOpen}>Links</span>
          </ul>
        </nav>
        {open ? (
            <ul className='menu'>
              <li className='menu-item'>
                <a href="https://github.com/bbrockmann1" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className='menu-item'>
                <a href="https://www.linkedin.com/in/robert-brockmann" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li className='menu-item'>
                <a href="mailto:bbrockmann1@gmail.com" >bbrockmann1@gmail.com</a>
              </li>
            </ul>
          ) : null}
      </>
    );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;