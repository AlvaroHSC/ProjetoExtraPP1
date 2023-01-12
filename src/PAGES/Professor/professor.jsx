import React from "react";
import * as s from "./styleprof";

import Logo from "./../../img/Logo.png";
import IFPE from "./../../img/IFPE.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Professor() {
  const navigate = useNavigate();

  //gravar disciplina
  function gravar() {
    let campos = document.querySelectorAll(".gravar_");

    let fields = [];
    let values = [];

    for (let i = 0; i < campos.length; i++) {
      const field = campos[i].id;
      const element = campos[i].value;

      fields.push(field);
      values.push(element);
    }
    let obj = {
      ids: fields,
      valores: values,
    };
    console.log("obj", obj);
  }

  async function correios() {
    let cep = document.querySelector(".cep_").value;

    try {
      let respCorreio = await axios.get(
        `https://cdn.apicep.com/file/apicep/${cep}.json`
      );

      if (respCorreio.data.status) {
        let p = respCorreio.data;

        document.getElementById("logradouro").value = p.address;
        document.getElementById("cidade").value = p.city;
        document.getElementById("bairro").value = p.district;
        document.getElementById("uf").value = p.state;
      } else {
        console.log("FALHA");
      }
    } catch (e) {
      console.log("e", e);
    }
  }

  function novo() {
    document.querySelectorAll(".apagar_").forEach((e) => {
      e.value = "";
    });
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <h1>PROFESSOR</h1>
        <s.Box>
          <s.BoxForm>
            <s.InputBox>
              <h2>ID:</h2>
              <input className="gravar_ apagar_" id="id" />
            </s.InputBox>
            <s.InputBox>
              <h2>Nome:</h2>
              <input className="gravar_ apagar_" id="nome" />
            </s.InputBox>
            <s.InputBox>
              <h2>Data de Nascimento:</h2>
              <input
                className="gravar_ apagar_"
                title="Data Nascimento:"
                type="date"
                id="dataNasc"
              />
            </s.InputBox>
            <s.InputBox>
              <h2>CPF:</h2>
              <input className="gravar_ apagar_" title="CPF:" id="cpf" />
            </s.InputBox>
            <s.InputBox>
              <h2>RG:</h2>
              <input className="gravar_ apagar_" title="RG:" id="rg" />
            </s.InputBox>
          </s.BoxForm>

          <s.BoxForm>
            <h3>CONTATOS</h3>
            <s.InputBox>
              <h2>E-mail:</h2>
              <input className="gravar_ apagar_" id="email" />
            </s.InputBox>
            <s.InputBox>
              <h2>Telefone:</h2>
              <input className="gravar_ apagar_" id="telefone" />
            </s.InputBox>
            <s.InputBox>
              <h2>WhatsApp:</h2>
              <input className="gravar_ apagar_" type="text" id="whatsapp" />
            </s.InputBox>
          </s.BoxForm>

          <s.BoxForm>
            <h3>QUALIFICAÇÃO</h3>
            <s.InputBox>
              <h2>Formação:</h2>
              <input className="gravar_ apagar_" id="formação" />
            </s.InputBox>
            <s.InputBox>
              <h2>Especialização:</h2>
              <input className="gravar_ apagar_" id="especializacao" />
            </s.InputBox>
            <s.InputBox>
              <h2>Materias que lesiona:</h2>
              <input className="gravar_ apagar_" type="text" id="materias" />
            </s.InputBox>
            <s.InputBox>
              <h2>Valor da aula/hora:</h2>
              <input className="gravar_ apagar_" type="text" id="aulahora" />
            </s.InputBox>
          </s.BoxForm>

          <s.BoxForm>
            <h3>ENDEREÇO</h3>
            <s.InputBox>
              <h2>CEP:</h2>
              <input
                className="gravar_ apagar_ cep_"
                title="cep"
                id="cep"
                onBlur={() => correios()}
              />
            </s.InputBox>
            <s.InputBox>
              <h2>Logradouro:</h2>
              <input
                className="gravar_ apagar_"
                title="logradouro:"
                id="logradouro"
              />
            </s.InputBox>
            <s.InputBox>
              <h2>Número:</h2>
              <input className="gravar_ apagar_" title="numero:" id="numero" />
            </s.InputBox>
            <s.InputBox>
              <h2>Bairro:</h2>
              <input className="gravar_ apagar_" title="bairro:" id="bairro" />
            </s.InputBox>
            <s.InputBox>
              <h2>Cidade:</h2>
              <input className="gravar_ apagar_" title="cidade:" id="cidade" />
            </s.InputBox>
            <s.InputBox>
              <h2>UF:</h2>
              <input className="gravar_ apagar_" title="uf:" id="uf" />
            </s.InputBox>
          </s.BoxForm>
          <s.BotaoDiv onClick={() => gravar()}>
            <h2>Gravar</h2>
          </s.BotaoDiv>
          <s.BotaoDiv onClick={() => novo()}>
            <h2>Novo</h2>
          </s.BotaoDiv>
          <s.BotaoDiv onClick={() => navigate(-1)}>
            <h2>Voltar</h2>
          </s.BotaoDiv>
        </s.Box>
      </s.Pagina>
    </s.Geral>
  );
}
