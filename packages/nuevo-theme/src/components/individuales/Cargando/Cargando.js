import React from "react"
import {styled,connect,Global,css} from "frontity"

const Cargando = () => {

    return (
        <Contenedor>
            <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/05/3.-Logo-loop-rapido-gif.gif"></img>
            {/* <p>Cargando...</p> */}
           
        </Contenedor>
    )
}

export default Cargando

const anaranjado = "#f9672d"


const Contenedor = styled.section`
    widht: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    img {
        width: 300px;
        height:auto;
        margin: 0;
        // padding-top: 20vh; 
        margin-top: -5vh;

        // padding: 0;
    }

    p {
        padding: 0;
        margin-top: 0em; 
    }
    
`;