import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Principal from "../PAGES/Principal/Principal";
import Aluno from "../PAGES/Aluno/aluno";
import Professor from "../PAGES/Professor/professor";
import Solicitacao from "../PAGES/Solicitacao/solicitacao";

const Rotas = () => {

  return (
      <Routes>
        <Route 
        element={<Principal/>} 
        path="/" exact 
        />
    
        <Route 
          element={<Solicitacao/>}   
          path="/solicitacao" 
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
