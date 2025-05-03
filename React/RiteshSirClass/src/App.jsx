import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import CharacterDetails from './pages/CharacterDetails';

const App = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/character/:id" element={<CharacterDetails />} />
    </Routes>
      
    </div>
  )
}

export default App
