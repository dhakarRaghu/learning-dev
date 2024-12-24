import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import './App.css';

const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{ background: "grey" }}>
          <h1>hi this is top bar</h1>
        </div>

        <NavigationButtons />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard page</button>
    </div>
  );
}

export default App;
