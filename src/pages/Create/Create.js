import './create.css'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loggedInState } from '../../atoms';

function Create() {    
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
        <div>
        {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
            ) : (
                <p>Please log in to access this content.</p>
            )}
        </div>
        </>
    );
};

export default Create;