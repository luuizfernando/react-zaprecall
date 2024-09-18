import styled from "styled-components"

export default function Footer({totalQuestions, questionsCounter}) {
    return (
        <Bottom>
            <p>{questionsCounter} / {totalQuestions} Concluídos</p>
        </Bottom>
    )
}

const Bottom = styled.div`
    width: 100vw;
    height: 15vh;
    margin-top: 20px;
    background-color: white;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`