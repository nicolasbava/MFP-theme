import React from "react"
import {connect} from "frontity"
import Link from "../components/Link"

const Home = ({state}) => {
    const pageHero = state.source.page[353]

    const noticias = state.source.noticias;

    
    return (
        <>
            <h1>ESTAMOS EN LA HOME</h1>

            {/* TIRA UNDEFINED CUANDO AUN NO DESCARGO EL OBJETO, ENTONCES TIRA NULL, CUANDO LO DESCARGA LO MUESTRA */}

            {typeof pageHero === "undefined" ? null : 
            
            <div>
               <p>{pageHero.acf.quienes_somos_titulo}</p>
               <p>{pageHero.acf.quienes_somos_texto}</p>
            </div>}

            <h3>NOTICIAS{">>"}</h3>
            {typeof noticias === "undefined" ? <p>cargando noticias</p> : 

                Object.values(noticias).reverse().slice(0,3).map( noticia => {
                    return (
                        <article key={noticia.id}>
                            <Link href={noticia.link}>
                                <h4 dangerouslySetInnerHTML={{__html:noticia.title.rendered}}></h4>
                            </Link>

                        </article>
                    )
                })

            }
            
        


        </>

    )

}

export default connect(Home)