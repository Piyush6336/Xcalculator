import { useState } from 'react';
import './style.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(''); 

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(''); 
    } else if (value === '=') {
      try {
       
        setResult(eval(input).toString()); 
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value); 
      setResult(''); 
    }
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '15px',
      }}>
        <h1>React Calculator</h1>
        <input 
          type="text" 
          value={input} 
          readOnly 
          style={{ 
            padding: '10px', 
            fontSize: '18px', 
            textAlign: 'left', 
            width: '200px', 
            boxSizing: 'border-box'
          }} 
        />
        <div style={{
          fontSize: '18px', 
          color: 'gray', 
          minHeight: '24px', 
          textAlign: 'center', 
          width: '200px'
        }}>
          {result}
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: '0 auto',
      }}>
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((buttonValue) => (
          <button
            key={buttonValue}
            onClick={() => handleButtonClick(buttonValue)}
            style={{ 
              flex: '1 1 20%', 
              padding: '15px', 
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            {buttonValue}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
