import React from "react"
import {connect, Head, styled} from "frontity"
import Link from "@frontity/components/link"
import { FooterBasico } from "../components/footer"



const Mapa = () => {

 




    return (
       <>
        <Contendor>

            <p className="titulo">{">"} MAPA INTERACTIVO</p>
            <p className="descripcion">Presionar sobre este icono para desplegar mas opciones.</p>

            <ContenedorMapa>
                <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1nAIsXBvqPzoEvq1PdFiEZxU5VZLX3PfR&ehbc=2E312F" 
                    height="800"
                    width="1320"
                ></iframe>     
            </ContenedorMapa>

        </Contendor>

        <FooterBasico />

        </> 
    )
}

export default Mapa

const Contendor = styled.div`
    margin-left: 1%;
    margin-right: 1%;
    position: relative;


    .titulo {
        margin-left: 7%;
        margin-top: 3em;
        color: #333;
    }

    .descripcion {
        font-family: 'Calibri';
        margin-left: 7%;
        margin-bottom: 2em;
        position:relative;   
        
    }



`

const ContenedorMapa = styled.section`
    position:relative;
    bottom: -0.5vh;
`
