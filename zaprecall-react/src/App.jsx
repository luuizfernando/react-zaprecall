import React from "react";
import { useState } from "react";
import cards from './constants/answers-questions';
import Topo from "./components/Topo";
import Cards from "./components/Cards";


export default function App() {

  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function iniciarCard() {
  }

  function responderCard() {
  }

  function CardPergunta() {

  }

  function CardResposta() {

  }

  return (

    <div className="container">

      <div className="content">
        <div className="logo">
          <Topo />
        </div>
        <div className="cards-container">
          <Cards
            iniciarCard={iniciarCard}
            cards={cards}
          />
        </div>
      </div>
    </div>

  );
}