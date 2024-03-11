import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrosel from "./pages/Carrosel";
import Revolver from './revolver';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Carrosel />}/>
      <Route path="/Revolver" element={<Revolver />}/>
    </Routes>
    </BrowserRouter>
  ); 
}

export default App;