import React from "react";
import { useState } from "react";
import './styles/style.css'
import Logo from './assets/logo.png'
import cards from './constants/answers-questions'
import Topo from "./components/Topo";


export default function App() {


  const [deck, setDeck] = useState(""); // Mudar quais cards serão mostrados na revisão
  const [card, setCard] = useState(""); // Mudar o card, se irá mostrar o inicial, pergunta ou resposta


  function iniciarPergunta() {

  }

  function descobrirResposta() {

  }

  function responderCard() {

  }

  return (

    <div className="container">

      <div className="content">
        <div className="logo">
            <Topo />
        </div>
      </div>
    </div>

  );
}