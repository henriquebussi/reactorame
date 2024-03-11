import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Badge from "./pages/Badge";
import Game from "./pages/Game";
import Perfil from "./pages/Perfil"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Contato" element={<Contato/>}/>
          <Route path="/Badge" element={<Badge/>}/>
          <Route path="/Game" element={<Game/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;