import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import Perfil from './pages/Perfil/Perfil';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas