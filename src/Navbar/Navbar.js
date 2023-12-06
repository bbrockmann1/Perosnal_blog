import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css';
import logo from '../media/navbarlogo.png';

function Navbar() {
    return (       
      <nav className='nav'>
        <Link to="/">
          <img src={logo} alt={'Robert Brockmann'} className='site-title'></img>
        </Link>  
        <ul>
          <CustomLink to='/about'>About</CustomLink>
          <li>
            <h1>Links</h1>
          </li>
        </ul>
      </nav>
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