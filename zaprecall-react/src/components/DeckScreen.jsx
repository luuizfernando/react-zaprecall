import React from "react";

import Logo from '../assets/logo.png'
import FlashCard from "./FlashCard";
import Footer from "./Footer"

export default function DeckScreen() {

    return (

        <div>
            <img src={Logo} alt="Logo do ZapRecall"/>
            <h1>ZapRecall</h1>
            <FlashCard />

            <Footer />
        </div>

    )

}