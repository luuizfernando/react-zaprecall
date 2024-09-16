import React from "react";

import Logo from '../assets/logo.png'
import FlashCard from "./FlashCard";
import Footer from "./Footer"
import styled from "styled-components";

export default function DeckScreen() {

    return (

        <MainContainer>
            <LogoSite src={Logo} alt="Logo do ZapRecall"/>
            <h1>ZapRecall</h1>
            <FlashCard />
            <Footer />
        </MainContainer>

    )

}

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
`

const LogoSite = styled.img`
    height: 10vw;
    width: 10vw;
`