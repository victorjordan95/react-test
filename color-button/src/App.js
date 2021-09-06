import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checkboxCheck, setCheckboxCheck] = useState(false);
  
  
  const changeButtonColor = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  }
  
  return (
    <div className="App">
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => changeButtonColor()}
        disabled={checkboxCheck}
      >
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>

      <input type="checkbox" value={checkboxCheck} onClick={(e) => setCheckboxCheck(e.target.checked)}/>
    </div>
  );
}

export default App;
