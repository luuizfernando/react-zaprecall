import React from 'react'
import '../styles/style.css'

export default function Cards({ iniciarCard, cards }) {
    return (
        <>
            {cards.map((c) => (
                <div className='card' key={c.id}>
                    <p>Pergunta {c.id}</p>
                    <button onClick={iniciarCard}>Play</button>
                </div>
            ))}
        </>
    )
}