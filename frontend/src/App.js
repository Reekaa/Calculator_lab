import React from 'react';
import './App.css';
import CalculatorBox from './container/CalculatorBox'

function App() {
  return (
    <div className='ui container'>
      <h1>Compound Interest Calculator</h1>
      <CalculatorBox />
    </div>
  );
}

export default App;
