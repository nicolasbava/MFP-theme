import React from "react"
import {connect, styled} from "frontity"
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

    const fotoArtista = 'https://memoriafilmica.cl/wp-content/uploads/2022/04/Usuario.png' 

    return (
        <Contenedor>
            {/* {console.log(arrayArtistas)} */}
            <Flex>
                <h2>CATALOGO ARTISTAS</h2>
                <Search />
            </Flex>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}
        
            <p>Artistas disponibles({data.items.length})</p>

            <ArtistasFlex>
                {filteredArtistas.reverse().map((artistas) => {
                    // const artista = state.source.artistas[id];

                    return (
                        <>
                            {/* <p>{artistas.title.rendered}</p>  */}
                            {/* <article key={artistas.id}>
                                <Link href={artistas.link}>
                                    <Featured imgID={artistas.featured_media} element='artista'/>                 

                                    <h3 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h3>
                                </Link>
                            </article> */}


                            <Article key={artistas.id}>
                                {/* <p>{peliculas.title.rendered}</p> */}

                                {/* {console.log(arrayPeliculas)} */}
                                
                                <Link href={artistas.link}>
                                    {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                    <Cuadrado style={{backgroundImage:`url(${artistas.featured_media === 0 ? fotoArtista : artistas.featured_media})`}}>
                                        <Cartel>
                                        
                                        <Rayita></Rayita>
                                        <h3 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h3>


                                        </Cartel>
                                    </Cuadrado>
                                </Link>
                                
                            </Article>


                        </>

                    )
                })}
            </ArtistasFlex>

        </Contenedor>
    )
}

export default connect(CatalogoArtistas)

const Flex = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const ArtistasFlex = styled.section`
    display: flex;
    flex-wrap:wrap;
    gap: 2vw;
    justify-content: space-around;

`

const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 7%;
`

const Article = styled.article`    

`


const Cartel = styled.div`
    color: #fff;
    padding-top: 5em;
    padding-left: 2em;
    padding-right: 4em;
    padding-bottom: 1em;
    height: 100%;
    transition: 500ms ease;
    opacity:0;
    box-sizing: border-box;
    transition: opacity 0.55s;
     border-radius: 2px;
    z-index: 95;
    display: flex;
    flex-direction: column;
    justify-content: center;


  h3 {
      margin-bottom: 0;
      text-transform: uppercase;
  }

  h4{
      margin-top:.5em;
      font-size: 1rem
  }

  & > * {

    transition: transform 0.7s;
    transform: translateX(-8rem);
  }

  
  &:hover > * {
    transform: translateX(0);

  }

  &:hover {
    background: rgba(0,0,0, .7);
    opacity: 1;
    box-sizing: border-box;


  }
`

const Rayita = styled.div`
  width: 18%;
  height: 5px;
  background: #ff871c;
  border-radius: 4px;
`

const Cuadrado = styled.div`
  background: grey;
  border-radius: 2px;
  height: 25vw;
  width: 25vw;
  overflow:hidden;
  z-index: 99;
  background-size: cover;
  background-repeat: no-repeat;
`