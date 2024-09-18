import React, { useState } from "react";

import Logo from '../assets/logo.png'
import FlashCard from "./FlashCard";
import Footer from "./Footer"
import styled from "styled-components";
import deckReact from "../constants/deckReact";

export default function DeckScreen() {

    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (

        <MainContainer>
            <ContentContainer>
                <ContainerLogo>
                    <img src={Logo} alt="Logo do ZapRecall"/>
                    <h1>ZapRecall</h1>
                </ContainerLogo>
                
                {deckReact.map((card) => 
                    <FlashCard key={card.id} card={card} increaseCounter={increaseCounter}/>
                )}

            </ContentContainer>
            <Footer totalQuestions={deckReact.length} questionsCounter={counter}/>
        </MainContainer>

    )

}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center ;
    background-color: #FB6B6B;
    height: 100vh;
`
const ContentContainer = styled.div`
    height: 100vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const ContainerLogo = styled.div`
margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        height: 10vw;
        width: 10vw;
    }
    h1 {
        color: white;
        font-weight: bold;
        font-size: 60px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 50px;
    }
`