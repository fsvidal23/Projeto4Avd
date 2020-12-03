import styled, {css}from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/bg_inicio.jpg'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    width: 50%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;

    width: 100%;

    form {
        margin: 64px 0;
        width: 340px;
        text-align: center;


    h1{
        margin-bottom: 24px;
        font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: bold;
        margin-top: -30px;
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        transition: color 0.2s;
        text-decoration: none;

        &:hover {
            color: ${shade(0.2, '#f4ede8')}
        }
    }
    }

    > a {
        color: #ff9000;
        display: block;
        transition: color 0.2s;
        text-decoration: none;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')}
        }
    }


`;

export const Combobox = styled.div`
        background: white;
        border-radius: 10px;
        border: 2px solid black;
        padding: 16px;
        width: 100%;
        color: black;

        display: flex;
        align-items: center;

    & + div {
        margin-top: 8px;
    }

    select {
      
        flex: 1;
        background: transparent;
        border: 0;
        color: black;

        &::placeholder {
            color: black;
        }

        & + input {
            margin-top: 8px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background-size: cover;
    background: url(${signInBackgroundImg}) no-repeat center, rgba(0,0,0,0.7);
    background-blend-mode: overlay;
`;

export const Logo = styled.div`
    img {
        border-radius: 50px;
        width: 200px;
        margin-top: 70px;
    }
`;

export const Container2 = styled.div`
  display: flex; /* Informa que o componente sera do tipo flex */
  flex-direction: column; /* Indica que a horientação será em coluna (vertical)*/
  align-items: center; /* alinha no centro horizontal*/
  justify-content: center; /* alinha no centro vertical */
  padding: 2em;
  background: orange;
  margin-top: --10px;

  div{
      margin-top: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button{
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
  }

  & [disabled] {
    opacity: 0.5;
    cursor: default;
  }
`
export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 800;
  margin: 1em 0;
`;

export const FormColumn = styled.form`
  display: flex;
  width: 100%;
  padding: 12px;
  flex-direction: column;

  /* Todo o espaço vertical em branco ficara entre os componentes filhos*/
  justify-content: space-between;

  /* Ocupa todo o espaço hotizontal possivel */
  align-items: stretch;

  /* Dispositivos com mais de 767px de largura*/
  @media screen and (min-width: 767px) {
    max-width: 80%; /* A largura maxima do componente será de 80% da tela*/
  }
`;

export const InputColumn = styled.input`
  border: none; /* Remove a borda do componente */
  /* Adiciona um padding superior/inferior de 6px */
  /* e um padding esquerda/direira de 12px*/
  padding: 6px 12px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;

  /* Dispositivos com mais de 767 de largura */
  /* teram uma margem de 1em */
  @media screen and (min-width: 767px) {
    margin: 1em;
  }

  input + span {
    padding-right: 30px;
  }

  input:invalid+span:after {
    position: absolute;
    content: '✖';
    padding-left: 5px;
  }

  input:valid+span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
  }
`;