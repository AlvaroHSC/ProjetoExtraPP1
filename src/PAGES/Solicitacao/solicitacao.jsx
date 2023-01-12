import React, { useEffect, useState } from "react";
import * as s from "./styleSolic";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Solicitacao() {
  const [exibirLista, setExibirLista] = useState(true);
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();
  
  useEffect((e) => {
      Pesqlista()
  }, [])

  function gravar() {
    let campos = document.querySelectorAll(".gravar_");

    let obj = {};

    for (let i = 0; i < campos.length; i++) {
      const field = campos[i].id;
      const element = campos[i].value;

      obj = {
        ids: field,
        valores: element,
      };
      console.log("obj", obj);
    }
  }

  async function Pesqlista() {
    // try {
    //   let respLista = await axios.get("https://pokeapi.co/api/v2/pokemon");

    //   console.log('respLista.data.resultado', respLista.data.resultado)
    //   if (respLista.data.status) {
    //     setLista(respLista.data.resultado);
    //   } else {
    //     setLista([])
    //     console.log("falha", respLista.data.mensagem);
    //   }
    // } catch (e) {
    //   console.log("falha", e);
    // }
  }

  function click() {
    alert("click ");
  }

  return (
    <s.Geral>
      <s.PaginaLista onOff={exibirLista}>
        <img src={Logo} />
        <h1>Lista de Solicitações</h1>
        <s.Box>
          <s.BoxForm>
            <s.InputBox>

            </s.InputBox>
          </s.BoxForm>
        </s.Box>
        <s.BotaoDiv
          onClick={() => {
            setExibirLista(false);
          }}
        >
          <h2>NOVO</h2>
        </s.BotaoDiv>
        <s.BotaoDiv
          onClick={() => {
            navigate(-1);
          }}
        >
          <h2>VOLTAR</h2>
        </s.BotaoDiv>
      </s.PaginaLista>

      <s.PaginaCad onOff={!exibirLista}>
        <img src={Logo} />

        <s.Box>
          <s.BoxForm>
            <s.InputBox>
              <h2>ID:</h2>
              <input className="gravar_ apagar_" id="id" />
            </s.InputBox>
            <s.InputBox>
              <h2>Matéria Solicitada:</h2>
              <input className="gravar_ apagar_" type="text" id="disciplina" />
            </s.InputBox>
            <s.InputBox>
              <h2>Assunto:</h2>
              <input className="gravar_ apagar_" type="text" id="sobre" />
            </s.InputBox>
            <s.InputBox>
              <h2>Data: </h2>
              <input className="gravar_ apagar_" type="date" id="sobre" />
            </s.InputBox>
            <s.InputBox>
              <h2>Horário:</h2>
              <input className="gravar_ apagar_" type="text" id="sobre" />
            </s.InputBox>

            <s.BotaoDiv onClick={() => gravar()}>
              <h2>Gravar</h2>
            </s.BotaoDiv>
            <s.BotaoDiv
              onClick={() => {
                setExibirLista(true);
              }}
            >
              <h2>Lista</h2>
            </s.BotaoDiv>
          </s.BoxForm>
        </s.Box>
      </s.PaginaCad>
    </s.Geral>
  );
}
