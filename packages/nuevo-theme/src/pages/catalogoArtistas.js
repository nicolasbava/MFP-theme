import React from "react"
import {connect} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"



const CatalogoArtistas = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.artistas)
    
    const filteredArtistas = arrayArtistas.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <>
            {/* {console.log(arrayArtistas)} */}
            <h1>CATALOGO ARTISTAS</h1>
            <Search />
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}
        
            <p>Artistas disponibles({data.items.length})</p>
            {filteredArtistas.reverse().map((artistas) => {
                // const artista = state.source.artistas[id];

                return (
                    <>
                        {/* <p>{artistas.title.rendered}</p>  */}
                        <article key={artistas.id}>
                            <Link href={artistas.link}>
                                <Featured imgID={artistas.featured_media} element='artista'/>                 

                                <h3 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h3>
                            </Link>
                        </article>
                    </>

                )
            })}

            <Footer />
        </>
    )
}

export default connect(CatalogoArtistas)