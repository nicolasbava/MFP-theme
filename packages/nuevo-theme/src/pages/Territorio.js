import React from "react"
import {connect, styled} from "frontity"
import Cargando from "../components/Cargando"

const Territorio = ({state}) => {

    const data = state.source.territorio[1301]

    return (

        <>
            <Indice>
                <p>{"> "}PRESENTACIÓN {">"} TERRITORIO</p>
            </Indice>

            <Contenedor>
                <h2>TERRITORIO</h2>
                <article dangerouslySetInnerHTML={{__html: data.content.rendered}}></article>

                {/* 
                <p>
                    El término ‘pencopolitano’ alude al primer emplazamiento de la ciudad de Concepción en la bahía de Penco. El término ‘pencopolitanismo’, fue acuñado por el periodista Víctor Solar Manzano y revisitado por Pacián Martínez, uno de los nombres importantes del cineclubismo penquista, aludiendo a la historia, cultura y tradiciones de esta zona y al espíritu y amor por esta tierra que, o nos vio nacer o nos adoptó. Asimismo, el término ‘pencopolitano’ puede extenderse también a un área de influencia cultural, económica e industrial con centro en la ciudad de Concepción.
                </p>
                <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/1-6.jpg"></img>

                <p>
                    Adhiriendo a este sentimiento de pertenencia, este proyecto cubre geográficamente el territorio cruzado por el río Bío Bío, entre la bahía de Coliumo y la parte norte del golfo de Arauco, comprendiendo las actuales comunas de Concepción, Talcahuano, Lota, Coronel, Tomé, Penco, Hualqui, Chiguayante, San Pedro de la Paz y Hualpén.
                </p>
                <img className="margen" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/2.jpg" ></img>

                <p>
                    Considerando este enfoque, la información aquí presentada se centra en la producción cinematográfica producida y/o filmada en este territorio, principalmente por realizadores y productores nacidos o avecindados en él. Esto no debe entenderse como algo excluyente, ni significa que sean las únicas producciones del artista. Asimismo, aunque los lugares de rodaje refieren principalmente a las comunas antes mencionadas, también puede haber locaciones externas a este territorio.
                </p>
                <Imagenes>
                    <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png"></img>
                    <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/4-11.png"></img>

                </Imagenes> */}

                <a href="http://memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png" data-toggle="lightbox">
                    <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png"></img>
                </a>

                <div class="row">
                    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid"></img>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid"></img>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid"></img>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid"></img>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid"></img>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid"></img>
                    </a>
                </div>

            
            </Contenedor> 


        
        
        </>
    )
}

export default connect(Territorio)

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
    padding-top: 7%;
    padding-left: 16%;
    padding-bottom: 4em;
    padding-right: 16%;

    ul, li {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    img {
        // width: 67vw;
        width: 100%;
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

    h3, p, div {
        font-family: 'Red Hat Text', sans-serif;
        margin: 0;    
    }

    p {
        padding-bottom: 2em;    

    }

`