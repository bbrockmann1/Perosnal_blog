import './auth.css'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loggedInState } from '../../atoms';
import Create from '../../components/Home/Create/Create';

function Auth() {    
    const isLoggedIn = useRecoilValue(loggedInState);

    return(
        <>
        <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
        </Link>
        <header className='home-header'>
          <h2>Robert Brockmann</h2>
          <h1>
            <span>Tech and Web Dev</span>
          </h1>
          <p>
            A place for my interests in tech. <br /> Web development, security, IT, and programming.
          </p>
        </header>
        
        {isLoggedIn ? (
              <Create />
            ) : (
              <div className='auth-container'>
                <p className='logged-out'>Please log in to create a blog.</p>
              </div>
            )}
        
        </>
    );
};

export default Auth;