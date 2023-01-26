import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../img/Logo.png";
import * as s from "./styleSolic";
import { useForm } from 'react-hook-form';

export default function Solicitacao() {
  const { register, getValues, setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValue: {
      disciplinaId: 0,
      assunto: "",
      horarioAgendado: "",
      status: "PENDENTE",
      data: "",
    }
  });
  const [exibirLista, setExibirLista] = useState(true);
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  }

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


const handleChangeDisciplina = (e) => {
  setValue('disciplinaId', e.target.value);
};


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
       
          <s.Titulo>
            <h1>Solicitação de Aula</h1>
        </s.Titulo>
        <s.Box>
          <s.BoxForm onSubmit={handleSubmit(onSubmit)}>
            <s.InputBox>
            <h2>Matéria Solicitada:</h2>
              <s.SelectComponent
                value={getValues('disciplinaId')}
                onChange={handleChangeDisciplina}
              >
                <option value="0"><em>Selecione a disciplina</em></option>
                <option value="1">Materia 01</option>
                <option value="2">Materia 02</option>
                <option value="3">Materia 03</option>
              </s.SelectComponent>
            </s.InputBox>
            <s.InputBox>
              <h2>Assunto:</h2>
              <input {...register('assunto')} className="gravar_ apagar_" type="text" id="assunto" />
            </s.InputBox>
            <s.InputBox>
              <h2>Data: </h2>
              <input {...register('date')} className="gravar_ apagar_" type="date" id="date" />
            </s.InputBox>
            <s.InputBox>
              <h2>Horário:</h2>
              <input {...register('horarioAgendado')} className="gravar_ apagar_" type="text" id="horario" />
            </s.InputBox>

            <s.BtnRow>
              <s.BotaoDiv type="submit">
                <h2>Gravar</h2>
              </s.BotaoDiv>
              <s.BotaoDiv type="reset">
                <h2>Cancelar</h2>
              </s.BotaoDiv>
            </s.BtnRow>
          </s.BoxForm>
        </s.Box>
        <s.Rodape>
          <img src={Logo} />
        </s.Rodape>
      </s.PaginaCad>
    </s.Geral>
  );
}
