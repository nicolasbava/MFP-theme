import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"



const CatalogoNoticias = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.noticias)
    
    const filteredArtistas = arrayArtistas.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <>
            
            <h1>CATALOGO NOTICIAS</h1>
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
                        <CartelNoticias key={artistas.id}>
                            <Link href={artistas.link}>

                                <h3 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h3>
                            </Link>
                        </CartelNoticias>
                    </>

                )
            })}



            <Footer />
        </>
    )
}




export default connect(CatalogoNoticias)


const NoticiasFlex = styled.section`
    display:flex;
`

const CartelNoticias = styled.article`
    border: 2px black solid;

`

