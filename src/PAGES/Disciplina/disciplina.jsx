import React from "react";
import * as s from "./styleDisc";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";

export default function Disciplina() {
  function click() {
    alert("click ");
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <s.Box>
          <h1>DISCIPLINA</h1>
        </s.Box>

        <img src={IFPE} />
      </s.Pagina>
    </s.Geral>
  );
}
