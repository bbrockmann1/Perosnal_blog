import './signIn.css';
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useSetRecoilState  } from 'recoil';
import { loggedInState } from '../../atoms';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const setLoggedIn = useSetRecoilState(loggedInState);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);  
    };

    const closeErrorPopup = () => {
      setShowError(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const data = {
        username,
        password,
      };
    
      // Make a POST request to the sign-in API
      fetch('/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (res.status === 200) {
                setLoggedIn(true);
                navigate('/create');
            } else {
                return res.json();
            }
        })
        .then((errorData) => {
            if (errorData && errorData.error) {
                setErrorMessage(errorData.error || 'An error occurred. Please try again later.');
                setShowError(true);
            } else {
                setErrorMessage('An unexpected error occurred. Please try again later.');
                setShowError(true);
            }
        })
        .finally(() => {
            setUsername('');
            setPassword('');
        });
    };
    


    return(
    <>
    <Link className='about-goBack' to='/'>
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
    
        <div className='sign-in-container'>
        <h1 className='sign-in'>Sign In</h1>
        <form onSubmit={handleSubmit} className='sign-in-form'>
          <div className='username-field'>
            <label htmlFor="username" className='fields'>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='password_field'>
            <label htmlFor="password" className='fields'>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <button type="submit" className='sign-in-button'>Sign In</button>
        </form>
      </div>
      {showError && (
        <div className="error-popup">
          <p>{errorMessage}</p>
          <p>Please try again.</p>
          <button className="close-btn" onClick={closeErrorPopup}>&times;</button>
        </div>
      )}
      </>
    );
};

export default SignIn;