import Homepage from "../homepage/Homepage";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import { Route, Routes } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="container">
      <Navbar />      
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>      
    </div>
  );
}

export default App;
