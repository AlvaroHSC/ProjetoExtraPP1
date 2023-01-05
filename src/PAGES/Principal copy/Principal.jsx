import React from "react";
import * as s from "./stylePrinc";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";

export default function Principal() {

  function click() {
    alert('click ');
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <s.Box>
          
          <s.BoxForm>
            <h1>LOGIN</h1>

            <s.InputBox>
              <input type="text" placeholder="Login..." />
            </s.InputBox>
            <s.InputBox>
              <input type="password" p laceholder="Senha..." />
            </s.InputBox>

            <s.InputBox onClick={() => click()}>
              <div>Logar</div>  
            </s.InputBox>
          </s.BoxForm>
        </s.Box>

        <img src={IFPE} />
      </s.Pagina>
    </s.Geral>
  );
}
