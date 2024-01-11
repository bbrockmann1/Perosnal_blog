import './signIn.css';
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useSetRecoilState  } from 'recoil';
import { loggedInState } from '../../atoms';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const setLoggedIn = useSetRecoilState(loggedInState);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Get username and password from state or form fields
      const data = {
        username,
        password,
      };
    
      // Make a POST request to the sign-in API
      fetch('https://localhost:4000/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 200) {
            // Successful sign-in
            setLoggedIn(true);
            navigate('/create');
          } else {
            // Unsuccessful sign-in
            console.error('Sign-in failed');
            throw new Error('Sign-in failed');
          }
        })
        .finally(() => {
          // Reset form fields or perform any cleanup
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

      </>
    );
};

export default SignIn;