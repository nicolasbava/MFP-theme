import React from "react"
import {connect, styled, css, Global} from "frontity"

const Proyecto = () => {

    return (
        <>
        <Indice>
                <p>{"> "}PRESENTACIÓN {">"} PROYECTO</p>
        </Indice>

        <Contenedor>
            

            <h2>PROYECTO</h2>
            <p>Memoria Fílmica Pencopolitana es un colectivo de investigación, divulgación y rescate del patrimonio audiovisual pencopolitano que busca fortalecer y promover la identidad local desde el séptimo <b>arte</b>.</p>
            <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-scaled.jpg"></img>
            <p>
            Desde 2018 el colectivo ha realizado y participado de una gran cantidad de exhibiciones, talleres, charlas y encuentros a lo largo del territorio junto a diversas entidades culturales locales, ejecutando proyectos como Cine patrimonial en los barrios, Rescate del patrimonio fílmico pencopolitano (1910-1973) y Enciclopedia Virtual Memoria Fílmica Pencopolitana. Desde 2019 es programador de la sección Memoria Fílmica del Festival Internacional BioBioCine y ha logrado rescatar títulos inéditos para la filmografía nacional.
            </p>

            <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/2-1.jpg"></img>
            <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/4.jpg"></img>
            <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-1-1-scaled.jpg"></img>





        </Contenedor>
        </>
    )
}

export default Proyecto

const Indice = styled.div`
    padding-left: 7%;
    padding-right: 7%;
    font-size: .7rem;
    font-weight: normal;
    padding-top: 3em;

    p {
        margin:0;
        padding: 0;
    font-size: .7rem;
    font-family: 'Krona One', sans-serif;

    }
`

const Imagenes = styled.div`
    display: flex;
    gap: 2vw;


    img {
        width: 48%;
        height: auto;
    }
`

const Contenedor = styled.main`
    padding-top: 5em;
    padding-left: 16%;
    padding-right: 16%;
    img {
        width: 67vw;
        height: auto;
        margin-left:auto;
        margin-right: auto;
        padding:1em 0;
    }

    .margen {
        padding-left: 4%;
        paddin-right: 10%;
        width: 35vw;
    }
    

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.2rem;
        padding-bottom: 1em;

    }

    h3 { 
        font-weight: normal; 
        padding-bottom: 1em;    
    }

    h3, p {
        font-family: 'Red Hat Text', sans-serif;
        margin: 0;    
    }

    p {
        padding-bottom: 2em;    

    }

`