import React from "react"
import {connect, styled} from "frontity"
import Link from "../components/Link"

const naranja = "#EC7342"



// NOTICIAS - muestra las ultimas 3 noticias


const CatalogoNoticiasInicio = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayNoticias = Object.values(state.source.noticias)
    
    const filteredNoticias = arrayNoticias.filter((noticia) =>
        noticia.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Contenedor>
           <article className="flex-noticias">
                <p className="krona"><Link href="/noticias">{"> "}NOTICIAS </Link></p>
           
            </article>
            {!filteredNoticias.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            <NoticiasFlex className="desktop">
                {filteredNoticias.reverse().slice(0, 3).map((noticia, index) => {
                    // const artista = state.source.noticia[id];

                    let name = noticia.title.rendered

                    return (
                        <>
                            <DisplayNoticias key={name + index + noticia.id }>

                                <Noticias>  
                                    <a href={noticia.link}>
                                        <ImagenNoticia style={{backgroundImage:`url(${noticia.acf.foto_portada})`}}></ImagenNoticia>
                                    </a>    
                                    <CartelNoticia>
                                        <a href={noticia.link}>
                                            <h4 dangerouslySetInnerHTML={{__html:noticia.title.rendered}}></h4>
                                        </a>
                                        <p dangerouslySetInnerHTML={{__html: noticia.acf.resumen}}></p>
                                        <Flex>
                                            <span className="flechas">{">>"}</span>
                                            <a href={noticia.link}><span className="vermas">VER MÁS</span></a>
                                        </Flex>
                                    </CartelNoticia>

                                </Noticias>
                            </DisplayNoticias>   
                        </>

                    )
                })}
                </NoticiasFlex>

                {/* MOBILE VERSION, SOLO 1 NOTICIA */}
                <NoticiasFlex className="mobile">
                {filteredNoticias.reverse().slice(0, 1).map((noticia, index) => {

                    let name = noticia.title.rendered

                    return (
                        <>
                            <DisplayNoticias key={name + index + noticia.id}>
                                <Noticias>  
                                    <a href={noticia.link}>
                                        <ImagenNoticia style={{backgroundImage:`url(${noticia.acf.foto_portada})`}}></ImagenNoticia>
                                    </a>    
                                    <CartelNoticia>
                                        <a href={noticia.link}>
                                            <h4 dangerouslySetInnerHTML={{__html:noticia.title.rendered}}></h4>
                                        </a>
                                        <p dangerouslySetInnerHTML={{__html: noticia.acf.resumen}}></p>
                                        <Flex>
                                            <span className="flechas">{">>"}</span>
                                            <a href={noticia.link}><span className="vermas krona">VER MÁS</span></a>
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

let brakepoint2 = '750px'


const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 5%;
    margin-top: 4em;
    padding-bottom: 2em;

    .mobile {

        @media (min-width: ${brakepoint2}){
            display: none;
        }
    }

    .desktop {

        @media (max-width: ${brakepoint2}){
            display: none;
        }
    }

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

    // @media(max-width: 244px){
    //     padding-top: 2rem;
    // }
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

    @media (max-width: ${brakepoint2}){
        height: 65vw;
        width: 83.9vw;
    }
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
    line-height: 1.2;
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

  @media (max-width: ${brakepoint2}){
      width: 85vw;
  }

`

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Krona One'
  flex-wrap: wrap;

  .flechas {
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    transition: 500ms;    
    font-weight: bold;
    font-family:'Krona One';
  }
`

const CartelNoticia = styled.section`
  padding: 2em 2em;
  transition: 150ms ease;


  h4 {
    margin: 0;
  }

  .vermas {
    font-size: .85rem;
    margin-left: 0.5em;
    margin-top: auto;
    margin-bottom:auto;
    // font-weight:bold;
    font-family:'Krona One';  
    margin-top: -2px;
  }

  .vermas:hover {
      color: ${naranja};
      opacity: 1;
  }

  @media(max-width: ${brakepoint2}){
    padding: 1em 1em;

    h4 {
        font-size: .7rem;
    }

  }

`

export default connect(CatalogoNoticiasInicio)


const NoticiasFlex = styled.section`
    display:flex;
    // flex-wrap:wrap;
`


