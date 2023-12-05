import logo from '../media/logo.gif';
import './App.js';
import './App.css';
import ChromeDinoGame from 'react-chrome-dino';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt={logo}/>
        <p>
          Hello, world!
        </p>
        <div className="game-container">
          {/* Game renders twice in development due to to React Strict Mode. Will not render twice is production */}
          <ChromeDinoGame />
        </div>         
        <p>
          This website is currently under construction.
        </p>
      </header>
    </div>
  );
}

export default App;
