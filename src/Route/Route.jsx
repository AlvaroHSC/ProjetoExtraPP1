import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Principal from "../PAGES/Principal/Principal";
import Disciplina from "../PAGES/Disciplina/disciplina";
import Aluno from "../PAGES/Aluno/aluno";
import Professor from "../PAGES/Professor/professor";

const Rotas = () => {

  return (
      <Routes>
        <Route 
        element={<Principal/>} 
        path="/" exact 
        />
    
        <Route 
          element={<Disciplina/>}   
          path="/disciplina" 
        />

        <Route 
          element={<Aluno/>} 
          path="/aluno" 
        />

        <Route 
          element={<Professor/>} 
          path="/professor" 
        />
      </Routes>
    );
};

export default Rotas;
