import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"

const naranja = "#EC7342"


const CatalogoNoticias = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.noticias)
    
    const filteredArtistas = arrayArtistas.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Contenedor>
            <p>{">"} NOTICIAS</p>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            <NoticiasFlex>
                {filteredArtistas.reverse().map((artistas, index) => {
                    // const artista = state.source.artistas[id];


                    return (
                        <>
                            {/* <p>{artistas.title.rendered}</p>  */}
                            {/* <CartelNoticias key={artistas.id}>
                                <Link href={artistas.link}>

                                    <Titulo dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></Titulo>
                                </Link>
                                <DescripcionArtista dangerouslySetInnerHTML={{__html:artistas.content.rendered }}></DescripcionArtista>
                                
                            <Raya></Raya>
                            
                            </CartelNoticias> */}

        
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
    padding-right: 7%;
    margin-top: 3%;
`

const ImagenNoticia = styled.div`


    background: no-repeat;
    background-color: rgba(0, 0, 0, 0);
    background-color: #00b1a0;
    width: 100%;
    height: 25vw;
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
  display: flex;
  justify-content: space-around;
  width: 100%;


`

const Noticias = styled.div`
  border: 2px #3335 solid;
  border-radius: 5px;
  width: 27vw;
  height: fit-content;
  
  img {
    max-width: 100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color: blue;
    background-blend-mode: multiply;
    
  }

  h4 {
    font-size: 1.3rem;
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
    margin-bottom: 0;
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


`

const CartelNoticia = styled.section`
  padding: 1em 2em;
  transition: 250ms ease;


  h4 {
    margin: 0;
  }

  .vermas {
    font-size: 1rem;
    margin-left: 0.5em;
  }

  .vermas:hover {
      color: ${naranja};
      opacity: 0;
  }



`



export default connect(CatalogoNoticias)

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

// const Noticias = styled.main`
//     padding-left: 7%;
//     padding-right: 7%;
// `

const DescripcionArtista = styled.span`
    font-family: 'Red Hat Text', sans-serif;
    font-size: 1rem;
`



const NoticiasFlex = styled.section`
    display:flex;
`

// const CartelNoticias = styled.article`
//     // border: 2px black solid;
//     padding-bottom: 3em;

// `

