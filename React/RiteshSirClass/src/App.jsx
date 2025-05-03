import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import CharacterDetails from './pages/CharacterDetails';
import ThemeToggle from './Components/ThemeToggle';

const App = () => {
  return (
    <div>
    <ThemeToggle />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/character/:id" element={<CharacterDetails />} />
    </Routes>
      
    </div>
  )
}

export default App
