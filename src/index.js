import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';
// import './index.css';

const CounterComp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{`counter: ${counter}`}</p>
      <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
      <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};


ReactDOM.render(<CounterComp />, document.getElementById('index'));
