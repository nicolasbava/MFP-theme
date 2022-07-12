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
           <article className="flex-noticias">
                {/* <p className="krona"><Link href="/">{"> "}CATÁLOGO </Link>{" > "}NOTICIAS</p> */}
                <p></p>
                <Search />
            </article>
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
                                            <a href={artistas.link}>
                                                <ImagenNoticia style={{backgroundImage:`url(${artistas.acf.foto_portada})`}}></ImagenNoticia>
                                            </a>    
                                            <CartelNoticia>
                                                <a href={artistas.link}>
                                                    <h4 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h4>
                                                </a>
                                                <p dangerouslySetInnerHTML={{__html: artistas.acf.resumen}}></p>
                                                <Flex>
                                                    <span>{">>"}</span>
                                                    <a href={artistas.link}><span className="vermas">VER MÁS</span></a>
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


export default connect(CatalogoNoticias)


const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 7%;
    // margin-top: 3%;
    padding-bottom: 7%;


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
        // padding-right: 2%;
        padding-block:1em;

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
    width: 100%;
    //width: 26.9vw;
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

    @media (max-width: 880px){
        width: 84.2vw;
        height: 35vw;
    }
  

`



const DisplayNoticias = styled.div`

`

const Noticias = styled.div`
  border: 2px #3335 solid;
  border-radius: 5px;
  width: 27.5vw;
  height: fit-content;
  margin-bottom: 2em;


  
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

  @media (max-width: 880px){
        // height: 35vw;
        width: 85vw;
       
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



const NoticiasFlex = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 1vw;

    @media (max-width: 880px){
        grid-template-columns: none;

    }
`



