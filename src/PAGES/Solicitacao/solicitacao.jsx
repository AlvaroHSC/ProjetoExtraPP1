import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../img/Logo.png";
import * as s from "./styleSolic";

export default function Solicitacao() {
  const [exibirLista, setExibirLista] = useState(true);
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Pesqlista();
  }, []);

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

  function selSolicitacao(e) {
    setExibirLista(true);

    if ((e) != null) {
      for (const fields in e) {
        const Valor = e[fields];

        try {
          document.querySelector(`#${fields}`).value = Valor;
        } catch (e) { }
      }
    }
    setExibirLista(false);
  }

  async function Pesqlista() {
    try {
      let respLista = await axios.get("https://swapi.dev/api/people/");

      console.log("respLista.data", respLista.data.results);
      if (respLista.data) {
        setLista(respLista.data.results);
      } else {
        setLista([]);
        console.log("falha", respLista.data.mensagem);
      }
    } catch (e) {
      console.log("falha", e);
    }
  }

  return (
    <s.Geral>
      <s.PaginaLista onOff={exibirLista}>
        <s.Titulo>
          <h1>Lista de Solicitações</h1>
        </s.Titulo>
        <s.Box>
          <s.BoxForm>
            {lista.length > 0 ? (
              lista.map((e, i) => {
                return (
                  <s.card
                    onClick={() => {
                      selSolicitacao(e);
                    }}
                  >
                    {e?.name} - {e?.gender}
                  </s.card>
                );
              })
            ) : (
              <s.card>NENHUM RESULTADO RETORNADO</s.card>
            )}
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
        <s.Rodape>
          <img src={Logo} alt="alguma coisa" />
        </s.Rodape>
      </s.PaginaLista>

      <s.PaginaCad onOff={!exibirLista}>
        <img src={Logo} alt="alguma coisa" />

        <s.Box>
          <s.BoxForm>
            <s.InputBox>
              <h2>ID:</h2>
              <input className="gravar_ apagar_" id="id" />
            </s.InputBox>
            <s.InputBox>
              <h2>Matéria Solicitada:</h2>
              <input className="gravar_ apagar_" type="text" id="name" />
            </s.InputBox>
            <s.InputBox>
              <h2>Assunto:</h2>
              <input className="gravar_ apagar_" type="text" id="gender" />
            </s.InputBox>
            <s.InputBox>
              <h2>Data: </h2>
              <input className="gravar_ apagar_" type="date" id="mass" />
            </s.InputBox>
            <s.InputBox>
              <h2>Horário:</h2>
              <input className="gravar_ apagar_" type="text" id="height" />
            </s.InputBox>

            <s.BtnRow>
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
            </s.BtnRow>
          </s.BoxForm>
        </s.Box>
      </s.PaginaCad>
    </s.Geral>
  );
}
