import React from "react"
import {connect, styled} from "frontity"
import Link from "../components/Link"
import Peliculas from "./Peliculas"
import Cargando from "../components/Cargando"
import CatalogoNoticiasInicio from "./catalogoNoticiasInicio"


const Home = ({state}) => {
    const pageHero = state.source.page[353]

    const noticias = state.source.noticias;

    const peliculas = state.source.peliculas

    
    return (
        <>

            {typeof peliculas === "undefined" ? <Cargando /> : 
            
                // <Catalogo />
                <>  
                {/* PELICULAS */}
                    <Peliculas />
                    <CatalogoNoticiasInicio />
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
    padding-right: 6%;
    // margin-top: 3%;
    padding-bottom: 4%;

    p {
        font-size: .7rem;
        padding-bottom: 3em;
        //padding-top: 3em;
        margin: 0;
    }
`

