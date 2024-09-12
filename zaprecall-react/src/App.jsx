import React from "react";
import { useState } from "react";
import './styles/style.css'
import Logo from './assets/logo.png'
import cards from './constants/answers-questions'


export default function App() {
  
  const CardInicial = () => {
    return (
      <div className="card-inicial">
        <p>Pergunta 01</p>
        <button onClick={iniciarPergunta}>Play</button>
      </div>
    )
  };

  const CardPergunta = (props) => {
    return (
      <div className="card-pergunta">
        <p>O que é JSX?</p>
      </div>
    )
  }

  const [deck, setDeck] = useState(""); // Mudar quais cards serão mostrados na revisão
  const [card, setCard] = useState(() => <CardInicial />); // Mudar o card, se irá mostrar o inicial, pergunta ou resposta


  function iniciarPergunta() {
    setCard(<CardPergunta />)
  }

  function descobrirResposta() {

  }

  function responderCard() {

  }

  // console.log(cards)

  return (

    <div className="container">

      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logo do site" />
          <p>ZapRecall</p>
        </div>
        {card}
      </div>
    </div>

  );
}

// function Cards(props) {
//   return (
//     <div>
//       <div className="card-resposta">
//         <p>{props.cards.question}</p>
//         <button>play</button>
//       </div>
//     </div>
//   )
// }