import React from "react";
import * as s from "./styleDisc";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";

export default function Disciplina() {
  //gravar disciplina
  function gravar() {
    let campos = document.querySelectorAll(".gravar_");

    let obj = {}

    for (let i = 0; i < campos.length; i++) {
      const field = campos[i].id;
      const element = campos[i].value;

      obj = {
        ids: field,
        valores: element
      }
      console.log("obj", obj);
    }
  }

  function click() {
    alert("click ");
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <h1>DISCIPLINA</h1>
        <s.Box>
          <s.BoxForm>
            <s.InputBox>
              <input className="gravar_ apagar_" title="id:" id="id"/>
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="Disciplina:" id="disciplina"/>
            </s.InputBox>
            <s.InputBox>
              <input className="gravar_ apagar_" title="Sobre:" id="sobre"/>
            </s.InputBox>

            <s.BotaoDiv onClick={() => gravar()}>
              <h2>Gravar</h2>
            </s.BotaoDiv>
          </s.BoxForm>
        </s.Box>
      </s.Pagina>
    </s.Geral>
  );
}
