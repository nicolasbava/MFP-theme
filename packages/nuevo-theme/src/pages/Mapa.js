import React from "react"
import {connect, Head, styled} from "frontity"

const fontTitulo = ".7rem"

const Mapa = () => {

    return (
       <>

            <Contendor>
                {/* OPACITY ZERO- ON PORPOUSE, */}
                <p style={{opacity:'0'}} className="titulo krona">{">"} MAPA INTERACTIVO</p>
                {/* <p className="descripcion">Presionar sobre este icono para desplegar mas opciones.</p> */}

                <ContenedorMapa>
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1nAIsXBvqPzoEvq1PdFiEZxU5VZLX3PfR&ehbc=2E312F" 
                        height="800"
                        width="1800"
                    ></iframe>     
                </ContenedorMapa>

            </Contendor>

        </> 
    )
}

export default Mapa

const Contendor = styled.div`
    padding-left: 7%;
    padding-right: 6.8%;
    padding-bottom:7%;

    .titulo {
        // margin-left: 7%;
        margin-top: 3em;
        margin-bottom: 3em;
        color: #333;
        font-size: ${fontTitulo}
    }

    .descripcion {
        font-family: 'Red Hat Text', sans-serif;
        // margin-left: 7%;
        margin-bottom: 2em;
        position:relative;   
        
    }



`

const ContenedorMapa = styled.section`
    display: flex;
    justify-content: center;
    // margin-bottom:2em

`
