import './App.scss';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = () => {
    console.log(input)
  }

  const handleChange = (e) => {
    let value = e.target.value;
    if (value) {
      setInput(value);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      </header>
      <div className="container">
          <input 
            type="text"
            value={input}
            onChange={(e) => handleChange(e)}
          />
          <button
            onClick={() => handleClick()}
          >
          Click Me!
          </button>
      </div>
    </div>
  );
}

export default App;
