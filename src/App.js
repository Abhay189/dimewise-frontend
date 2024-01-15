import React from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './scripts/login'
import Signup from './scripts/SignUp';
import Homepage from './scripts/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
