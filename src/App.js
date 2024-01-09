import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blog/:id' element={ <Blog /> } />
        <Route path='/about' element={ <About /> }/>
        <Route path='/projects' element={ <Projects /> }/>
      </Routes>
    </div>
  );
};

export default App;