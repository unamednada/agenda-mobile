import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './pages';
import './App.css';
import { Agendas, Courses, Events } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agendas" element={<Agendas />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
