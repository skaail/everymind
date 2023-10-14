import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas