import React from 'react'
import Logo from '../assets/logo.png'
import "../styles/style.css"

export default function Topo() {
    return (
        <>
            <img src={Logo} alt="Logo do site" />
            <p className='nome-logo'>ZapRecall</p>
        </>
    )
}