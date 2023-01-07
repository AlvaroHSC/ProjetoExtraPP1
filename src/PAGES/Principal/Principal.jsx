import React from "react";
import * as s from "./stylePrinc";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const navigate = useNavigate();

  function click() {
    window.open("/disciplina", "_blank");
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <s.Box>
          <s.BoxForm>
            <h1>LOGIN</h1>

            <s.BoxInput>
              <h2>ALUNO</h2>
              <input type="checkbox" id="aluno" onClick={() => navigate("/aluno")}/>
              <h2>PROFESSOR</h2>
              <input type="checkbox" id="professor" onClick={() => navigate("/professor")}/>
            </s.BoxInput>

            <s.InputBox>
              <input type="text" placeholder="Login..." />
            </s.InputBox>
            <s.InputBox>
              <input type="password" p laceholder="Senha..." />
            </s.InputBox>

            <button onClick={() => click()}>
              <div>Logar</div>
            </button>
            <button onClick={() => navigate("/aluno")}>Cadastrar-se</button>
          </s.BoxForm>
        </s.Box>

        <img src={IFPE} />
      </s.Pagina>
    </s.Geral>
  );
}
