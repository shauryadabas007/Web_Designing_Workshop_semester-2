import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        <div className="counter-display">{count}</div>
        
        <div className="button-row">
          <button onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>
        
        <div className="button-row">
          <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;