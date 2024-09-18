import { useState } from "react";
import styled from "styled-components";
import SetaPlay from "../assets/seta_play.png";
import SetaVirar from "../assets/seta_virar.png";
import IconeCerto from "../assets/icone_certo.png";
import IconeQuase from "../assets/icone_quase.png";
import IconeErro from "../assets/icone_erro.png";
import { VERDE, AMARELO, VERMELHO, CINZA } from "../constants/colors";

export default function FlashCard({ card, increaseCounter }) {

    const [started, setStarted] = useState(false);
    const [turned, setTurned] = useState(false);
    const [finished, setFinished] = useState(false);
    const [answered, setAnswered] = useState("not-answered");

    function showQuestion() {
        if (!finished) {
            setStarted(true);
        }
    }

    function showAnswer() {
        setTurned(true);
    }

    function selectIcon() {
        switch (answered) {
            case "wrong":
                return IconeErro
            case "almost":
                return IconeQuase
            case "right":
                return IconeCerto
            default:
                return SetaPlay
        }
    }

    function answerCard(questionStatus) {
        setStarted(false);
        setFinished(true);
        setAnswered(questionStatus);
        increaseCounter();
    }

    return (
        <>
            {!started ? (
                <CardInicial answered={answered}>
                    <p>Pergunta {card.id}</p>
                    <img src={selectIcon()} alt="" onClick={showQuestion} />
                </CardInicial>
            ) : (
                <>
                    {!turned ? (
                        <CardPergunta>
                            <p>{card.question}</p>
                            <img src={SetaVirar} alt="" onClick={showAnswer} />
                        </CardPergunta>
                    ) : (
                        <CardResposta>
                            <p>{card.answer}</p>
                            <ContainerButtons>
                                <button onClick={() => answerCard("wrong")}>Não lembrei</button>
                                <button onClick={() => answerCard("almost")}>Quase não lembrei</button>
                                <button onClick={() => answerCard("right")}>Zap!</button>
                            </ContainerButtons>
                        </CardResposta>
                    )}
                </>
            )
            }
        </>
    )
}

const CardInicial = styled.div`
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 7px;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    p {
        text-decoration: ${props => props.answered === "not-answered" ? "none" : "line-through"};
        color: ${props => {
            switch (props.answered) {
                case "right":
                    return VERDE
                case "wrong":
                    return VERMELHO
                case "almost":
                    return AMARELO
                default:
                    return CINZA
            }
        }};
    }
    img {
        cursor: pointer;
    }
`
const CardPergunta = styled.div`
    padding: 45px 15px;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFD4;
    border-radius: 7px;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const CardResposta = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFD4;
    border-radius: 7px;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    p {
        text-align: center;
    }
`
const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    button {
        border: 0;
        border-radius: 10px;
        width: 30%;
        height: 40px;
        color: white;
        font-size: 16px;
    }
    button:first-child {
        background-color: #FF3030;
    }
    button:nth-child(2) {
        background-color: #FF922E;
    }
    button:nth-child(3) {
        background-color: #2FBE34;
    }
`