import React from "react"
import {connect, styled} from "frontity"
import Cargando from "../components/Cargando"
import IconosRedes from "../components/IconosRedes"
import Link from "../components/Link"

import { useHorizontalScroll } from "../components/useSideScroll";

const naranja = '#ec7342'

const Territorio = ({state}) => {
    const scrollRef = useHorizontalScroll();
    const data = state.source.territorio[1301]
    const galeriaPelicula = data.acf.galeria

    return (

        <Afuera>

            <Indice>
                {/* <p>
                <Link href="/">{"> "}CATÁLOGO</Link>
                {" > "}PRESENTACIÓN {" > "}TERRITORIO</p> */}
                <p></p>
            </Indice>

            <Contenedor>
                <h2>TERRITORIO</h2>
                <article className="justify" dangerouslySetInnerHTML={{__html: data.content.rendered}}></article>
                {console.log(data)}
                {/* 
                <p>
                    El término ‘pencopolitano’ alude al primer emplazamiento de la ciudad de Concepción en la bahía de Penco. El término ‘pencopolitanismo’, fue acuñado por el periodista Víctor Solar Manzano y revisitado por Pacián Martínez, uno de los nombres importantes del cineclubismo penquista, aludiendo a la historia, cultura y tradiciones de esta zona y al espíritu y amor por esta tierra que, o nos vio nacer o nos adoptó. Asimismo, el término ‘pencopolitano’ puede extenderse también a un área de influencia cultural, económica e industrial con centro en la ciudad de Concepción.
                </p>
                <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-6.jpg"></img>

                <p>
                    Adhiriendo a este sentimiento de pertenencia, este proyecto cubre geográficamente el territorio cruzado por el río Bío Bío, entre la bahía de Coliumo y la parte norte del golfo de Arauco, comprendiendo las actuales comunas de Concepción, Talcahuano, Lota, Coronel, Tomé, Penco, Hualqui, Chiguayante, San Pedro de la Paz y Hualpén.
                </p>
                <img className="margen" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/2.jpg" ></img>

                <p>
                    Considerando este enfoque, la información aquí presentada se centra en la producción cinematográfica producida y/o filmada en este territorio, principalmente por realizadores y productores nacidos o avecindados en él. Esto no debe entenderse como algo excluyente, ni significa que sean las únicas producciones del artista. Asimismo, aunque los lugares de rodaje refieren principalmente a las comunas antes mencionadas, también puede haber locaciones externas a este territorio.
                </p>
                <Imagenes>
                    <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png"></img>
                    <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/4-11.png"></img>

                </Imagenes> */}

                {/* <a href="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png" data-toggle="lightbox">
                    <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-14.png"></img>
                </a> */}

            {/* <IconosRedes /> */}

            
                            
            </Contenedor> 

            {typeof galeriaPelicula != "undefined" && 
            <>
            
            
            
                 <GaleriaPelicula ref={scrollRef} style={{ overflow: "auto", paddingBottom:'2em' }}>             
                        {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                        return (
                            <a href={val.url} data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4" data-caption={val.description}>
                            <Galeria style={{backgroundImage:`url(${val.url})`}} className="img-fluid"></Galeria>
                            </a>
                        )
                        })) : null
                        }   
                </GaleriaPelicula> 
                <Raya style={{marginTop:`-5px`}}></Raya> 
            
            </>
            
            }

        
        
        </Afuera>
    )
}


export default connect(Territorio)

const Afuera = styled.div`
    padding-bottom: 4em;
`

// galeria
const GaleriaPelicula = styled.div`
    text-align: center;
    display: flex;
    overflow-x: scroll;
    padding-bottom: 2em;
    padding-top: 1em;
    height: auto;
    gap: 1vw;
    
    .col-sm-4 {
      flex: 0 0 auto;
      width: 28.333333%;
    }

    &:first-of-type {
      margin-left: -2vw;
    }

    img {
      cursor:pointer;
      // margin-bottom: 2vw;
      max-height: 300px;
      margin: auto;
    }

    scrollbar-color: ${naranja} #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: ${naranja} #0d6efd00;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #0d6efd00;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #f95614;
        border-radius: 50px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #F9672D;;
        cursor: pointer;
      }

      @media (max-width: 785px){
        .col-sm-4 {
          flex: 0 0 auto;
          width: 40%;
        }


      }
`;

const Galeria = styled.div`
 height: 20vw;
 width: 29vw;
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;

 & .col-sm-4 {
   width: 33.333333%;
 }

 @media (max-width: 785px){
   height: 35vw;
   width: 50vw;

   & .col-sm-4 {
     width: 40%;
   }
 }
`


const Raya = styled.div`
    background: #d5d3d3;
    height: 1px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
`

// fin galeria
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

    @media (max-width: 396px){
        p {
            font-size: .5rem
        }
    }

    @media (max-width: 290px){
        p {
            font-size: .4rem;
            margin-bottom: 2em;
        }
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
    
    .justify {
        text-align: justify;
    }

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