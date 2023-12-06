import Homepage from "../homepage/Homepage";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
