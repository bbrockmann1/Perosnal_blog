import { Route, Routes, useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import SignIn from './pages/SignIn/SignIn';
import Auth from './pages/Auth/Auth';

function App() {
  const navigate = useNavigate();

  //keypress to navigate to sign-in
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === 'q') {
        navigate('/sign-in')
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };

  }, [navigate]);

  return (
    <div className='container'>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/blog/:id' element={ <Blog /> } />
          <Route path='/about' element={ <About /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/sign-in' element={ < SignIn/> } />
          <Route path='/create' element={ <Auth /> } />
        </Routes>
      </RecoilRoot>
    </div>
  );
};

export default App;