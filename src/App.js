import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blog/:id' element={ <Blog /> } />
        <Route path='/about' element={ <About /> }/>
      </Routes>
    </div>
  );
};

export default App;