import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"

const naranja = "#EC7342"


const CatalogoNoticiasInicio = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.noticias)
    
    const filteredArtistas = arrayArtistas.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Contenedor>
           <article className="flex-noticias">
                <p className="krona"><Link href="/noticias">{"> "}NOTICIAS </Link></p>
           
            </article>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            <NoticiasFlex>
                {filteredArtistas.reverse().slice(0, 3).map((artistas, index) => {
                    // const artista = state.source.artistas[id];


                    return (
                        <>
                            <DisplayNoticias key={artistas.id}>
                                <Noticias>  
                                    <Link href={artistas.link}>
                                        <ImagenNoticia style={{backgroundImage:`url(${artistas.acf.foto_portada})`}}></ImagenNoticia>
                                    </Link>    
                                    <CartelNoticia>
                                        <Link href={artistas.link}>
                                            <h4 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h4>
                                        </Link>
                                        <p dangerouslySetInnerHTML={{__html: artistas.acf.resumen}}></p>
                                        <Flex>
                                            <span>{">>"}</span>
                                            <Link href={artistas.link}><span className="vermas">VER MÁS</span></Link>
                                        </Flex>
                                    </CartelNoticia>

                                </Noticias>
                            </DisplayNoticias>   
                        </>

                    )
                })}
            </NoticiasFlex>





        </Contenedor>
    )
}




const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 5%;
    margin-top: 4%;
    padding-bottom: 2em;

    p {
        font-size: .7rem;
        padding-bottom: 3em;
        padding-top: 3em;
        margin: 0;
    }

    .flex-noticias {
        // padding-top: 1em;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;

        p {
            font-size: .7rem;
            padding-top: 3em;
            padding-bottom: 3em;
        }
    }
`

const ImagenNoticia = styled.div`
    background: no-repeat;
    background-color: rgba(0, 0, 0, 0);
    background-color: #00b1a0;
    height: 23vw;
    width: 26.9vw;
    background-blend-mode: screen;
    cursor: pointer; 
    transition: background-color 500ms ease;
    filter: blur(0.1px);
    z-index: 0
    -webkit-filter: blur(0.1px);
    background-size: cover;
    border-radius: 3px 3px 0 0;
    
    &:hover {
    background-color: #00f3ff00;
    filter: blur(0);
    -webkit-filter: blur(0);
    };
`

const DisplayNoticias = styled.div`
  width: 100%;
`

const Noticias = styled.div`
  border: 2px #3335 solid;
  border-radius: 5px;
  width: 27.2vw;
  height: fit-content;
  
  img {
    max-width: 100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color: blue;
    background-blend-mode: multiply;
    
  }

  h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: #333;
    font-weight: normal;
  }

  p {
    color: #4a4a4a;
    font-size: .8rem;
    font-weight: initial;
    line-height: 1;
    text-align: justify;
    padding-bottom: 0.7em;
    font-family: 'Red Hat Text', sans-serif;
    margin-bottom: 1em;
    margin-top: 0;
    padding-top: 1em;
  }



  span {
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    transition: 500ms;
  }

`

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Krona One'
`

const CartelNoticia = styled.section`
  padding: 2em 2em;
  transition: 150ms ease;


  h4 {
    margin: 0;
  }

  .vermas {
    font-size: .8rem;
    margin-left: 0.5em;
    margin-top: auto;
    margin-bottom:auto;
  }

  .vermas:hover {
      color: ${naranja};
      opacity: 1;
  }

  @media(max-width: 796px){
    padding: 1em 1em;

    h4 {
        font-size: .7rem;
    }

  }

`

export default connect(CatalogoNoticiasInicio)

const Raya = styled.div`
    heigth:4px;
    width: 100vw;
    background: #333;
`

const Titulo = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 0em;
`


const DescripcionArtista = styled.span`
    font-family: 'Red Hat Text', sans-serif;
    font-size: 1rem;
`



const NoticiasFlex = styled.section`
    display:flex;
`

