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
    <div className='container'>
      <center>
      <h1>𝘾𝙊𝙐𝙉𝙏𝙀𝙍</h1>
      <span>Counter : {number}</span>
      </center>
      <div className='button-container'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}