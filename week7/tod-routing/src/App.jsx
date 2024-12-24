import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { React, lazy, Suspense, useState } from 'react';
import './App.css';


  function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <Count count={count} setCount = {setCount} />
        {/* <Buttons count = {count} setCount = {setCount} /> */}
      </div>
    );
  }
  
  function Count({ count , setCount }) {
    return (
      <div>
        {count}
        <Buttons count = {count} setCount = {setCount} />
      </div>
    );
  }

  function Buttons({ count, setCount }) {
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
  }
 


export default App 