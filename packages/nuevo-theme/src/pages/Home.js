import React from "react"
import {connect} from "frontity"
import Link from "../components/Link"
import CatalogoVideos from "./catalogoVideos"

const Home = ({state}) => {
    const pageHero = state.source.page[353]

    const noticias = state.source.noticias;

    const peliculas = state.source.peliculas

    
    return (
        <>


            {/* TIRA UNDEFINED CUANDO AUN NO DESCARGO EL OBJETO, ENTONCES TIRA NULL, CUANDO LO DESCARGA LO MUESTRA */}
            
            {/* <CatalogoVideos /> */}

            {typeof peliculas === "undefined" ? <p>cargando peliculas</p> : 
            
                <CatalogoVideos />
            
            }

            
        


        </>

    )

}

export default connect(Home)