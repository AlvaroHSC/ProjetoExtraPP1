import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Principal from "../PAGES/Principal/Principal";
import Disciplina from "../PAGES/Disciplina/disciplina";

const Rotas = () => {

  return (
      <Routes>
        <Route element={<Principal/>} path="/" exact />
    
        <Route element={<Disciplina/>} path="/disciplina" />
      </Routes>
    );
};

export default Rotas;
