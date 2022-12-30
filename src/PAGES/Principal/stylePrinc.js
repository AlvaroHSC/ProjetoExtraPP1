import styled from "styled-components";
import ProfAluno from "../img/ProfAluno.png";

export const Geral = styled.div`
  width: 100%;
  heigth: auto;
  padding: 4px;
`;

export const Pagina = styled.div`
  width: 100%;
  heigth: auto;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 4px;
  background-image: url(${ProfAluno});
  background-repeat: no-repeat; 
  padding: 10px 14px;
`;

export const InputBox = styled.div`
  width: 250px
  margin: 2px;
  padding: 2px;

`;

export const BoxForm = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: ;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 90px;
  padding: 4px;
`;

export const BotaoDiv = styled.div`
  width: 250px;
  height: auto;
  background-color: #000;
  border: 1px solid #fff;
  cursor: point;
  border-radius: 10px;
  margin: 4px;
  padding: 6px 4px;

  :hover{
    background-color: #f00;
  }
`;
