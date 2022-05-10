import React from "react"
import {connect, styled} from "frontity"
import Link from "../components/Link"
import Peliculas from "./Peliculas"
import Cargando from "../components/Cargando"
// import Catalogo from "./catalogoVideos"

const Home = ({state}) => {
    const pageHero = state.source.page[353]

    const noticias = state.source.noticias;

    const peliculas = state.source.peliculas

    
    return (
        <>


            {/* TIRA UNDEFINED CUANDO AUN NO DESCARGO EL OBJETO, ENTONCES TIRA NULL, CUANDO LO DESCARGA LO MUESTRA */}
            
            {/* <CatalogoVideos /> */}

            {/* {console.log(peliculas)} */}

            {typeof peliculas === "undefined" ? <Cargando /> : 
            
                // <Catalogo />

                <Peliculas />
            }

            
        


        </>

    )

}

export default connect(Home)

