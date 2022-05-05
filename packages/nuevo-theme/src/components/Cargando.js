import React from "react"
import {styled,connect,Global,css} from "frontity"

const Cargando = () => {

    return (
        <Contenedor>
            <p>Cargando...</p>
        </Contenedor>
    )
}

export default Cargando

const Contenedor = styled.section`
    widht: 100vw;
    height: 40vh;
    display: flex;
    justify-content:center;
    align-items:center;
`;