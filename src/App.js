import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>The Current Count is <span style={{fontWeight: "bolder"}} id="countVal">{count}</span></h1>
      <button
        id="incrementBtn"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        id="decrementBtn"
        disabled={count === 0}
        style={{ marginLeft: 30 }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
