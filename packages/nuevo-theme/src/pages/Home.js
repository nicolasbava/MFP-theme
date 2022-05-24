import React from "react"
import {connect, styled} from "frontity"
import Link from "../components/Link"
import Peliculas from "./Peliculas"
import Cargando from "../components/Cargando"
import CatalogoNoticias from "./catalogoNoticias"

import HeaderFijo from "../components/HeaderFijo"
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
                <>  
                    <Peliculas />
                    <CatalogoNoticias />
                    <VerMasNoticias>
                        <Link href="/noticias">
                            <p className="krona">{"> "}VER TODAS LAS NOTICIAS</p>    
                        </Link>
                    </VerMasNoticias> 
                    
                </>
            }

            
        


        </>

    )

}

export default connect(Home)

const VerMasNoticias = styled.article`
    text-align: right;
    //padding-right: 2%;

    padding-left: 7%;
    padding-right: 7%;
    // margin-top: 3%;
    //padding-bottom: 2em;

    p {
        font-size: .7rem;
        padding-bottom: 3em;
        //padding-top: 3em;
        margin: 0;
    }
`

