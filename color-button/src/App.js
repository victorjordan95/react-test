import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  
  const changeButtonColor = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  }
  
  return (
    <div className="App">
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => changeButtonColor()}
      >
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>

      <input type="checkbox" />
    </div>
  );
}

export default App;
