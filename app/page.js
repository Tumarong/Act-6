'use client';
import React, { useState } from 'react';
export default function Home() {

  const [number, setNum] = useState(0);

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };
  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

     
  return (
    <div className='center'>
      <center>
      <h1>🅲🅾🆄🅽🆃🅴🆁</h1>
      <span>Counter : {number}</span>
      </center>
      <div className='buttom-container'>
        <center>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </center>
      </div>
    </div>

  );
}