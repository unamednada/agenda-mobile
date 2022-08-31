import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './pages';
import './App.css';
import { Agenda } from './templates';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Agenda />} />
      </Routes>
    </div>
  );
}

export default App;
