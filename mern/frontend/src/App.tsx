import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Short from './pages/ShortUrlApp/short';

function App() {
 
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShortUrl" element={<Short/>} />
        </Routes>
      </div>
    </main>
  )
}

export default App
