import React from "react";
import { useState } from "react";

import Logo from '../assets/logo.png'
import FlashCard from "./FlashCard";
import Footer from "./Footer"
import styled from "styled-components";
import deckReact from "../constants/deckReact";

export default function DeckScreen() {

    return (

        <MainContainer>
            <ContentContainer>
                <ContainerLogo>
                    <img src={Logo} alt="Logo do ZapRecall"/>
                    <h1>ZapRecall</h1>
                </ContainerLogo>
                
                {deckReact.map((card) => 
                    <FlashCard card={card}/>
                )}

                <Footer />
            </ContentContainer>
        </MainContainer>

    )

}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FB6B6B;
    height: 120vh;
`
const ContentContainer = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ContainerLogo = styled.div`
    margin-top: 30px;
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