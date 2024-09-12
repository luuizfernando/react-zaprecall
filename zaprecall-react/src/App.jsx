import React from "react";
import { useState } from "react";
import './styles/style.css'
import Logo from './assets/logo.png'

export default function App() {

  const [deck, setDeck] = useState(""); // Mudar quais cards serão mostrados na revisão
  const [pergunta, setPergunta] = useState("oi"); // Seleciona qual será a pergunta mostrada no card
  const [resposta, setResposta] = useState("nao"); // Seleciona qual será a resposta mostrada no """""card baseado na pergunta"""""
  const [card, setCard] = useState("card-pergunta"); // Mudar o card, se irá mostrar a resposta ou a pergunta

  function responderPergunta() {
    setCard("card-resposta");
  }

  return (

    <div className="container">

      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logo do site" />
          <p>ZapRecall</p>
        </div>
        <div className={card}>
          <button onClick={responderPergunta}>play</button>
        </div>

      </div>
    </div>

  );
}