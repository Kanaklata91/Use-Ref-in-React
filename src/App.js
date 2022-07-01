import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const inputRef = useRef(0);
  const previousNameRef = useRef('');
  const [name, setName] = useState('kanak');

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  return (
    <>
      <h1>
        My current name is : {name} and previous value was :{' '}
        {previousNameRef.current}
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.focus()}>Click Me!</button>
    </>
  );
}
