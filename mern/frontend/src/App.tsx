import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Short from './pages/ShortUrlApp/short';
import Upload from './pages/fileUpload/upload';

function App() {
 
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShortUrl" element={<Short/>} />
          <Route path="/Upload" element={<Upload/>} />
        </Routes>
      </div>
    </main>
  )
}

export default App
