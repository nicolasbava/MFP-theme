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
        <Noticias>
            <p>{">"} NOTICIAS</p>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}

            {filteredArtistas.reverse().map((artistas, index) => {
                // const artista = state.source.artistas[id];
                {console.log(artistas.acf.galeria)}

                return (
                    <>
                        {/* <p>{artistas.title.rendered}</p>  */}
                        <CartelNoticias key={artistas.id}>
                            <Link href={artistas.link}>

                                <Titulo dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></Titulo>
                            </Link>
                            <DescripcionArtista dangerouslySetInnerHTML={{__html:artistas.content.rendered }}></DescripcionArtista>
                            
                            
                        </CartelNoticias>
                    </>

                )
            })}



        </Noticias>
    )
}




export default connect(CatalogoNoticias)

const Titulo = styled.h3`
    text-align: center;
    text-transform: uppercase;
`

const Noticias = styled.main`
    padding-left: 7%;
    padding-right: 7%;
`

const DescripcionArtista = styled.span`
    font-family: 'Red Hat Text', sans-serif;
    font-size: 1rem;
`



const NoticiasFlex = styled.section`
    display:flex;
`

const CartelNoticias = styled.article`
    // border: 2px black solid;

`

