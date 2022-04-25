import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import { CatalogoNoticias } from "./catalogoNoticias"
import Footer from "../components/footer"
import CatalogoNoticiasPeliculas from "./catalogoNoticiasPeliculas"


const CatalogoVideos = ({state}) => {
    const data = state.source.get(state.router.link)

    // const arrayNoticias = Object.values(state.source.noticias)

    const arrayPeliculas = Object.values(state.source.peliculas)

    
    const filteredPeliculas = arrayPeliculas.filter((peliculas) =>
        peliculas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )  



    return (
        <>
            <h1>CATALOGO VIDEOS</h1>
        
            <p>Videos disponibles({data.items.length})</p>
            {filteredPeliculas.map((peliculas) => {
                // const pelicula = state.source.peliculas[id]

                
                <p>Peliculas disponibles({data.items.length})</p>
                
                return (


                    <article key={peliculas.id}>
                    {/* <p>{peliculas.title.rendered}</p> */}

                     {/* {console.log(arrayPeliculas)} */}
                        
                        <Link href={peliculas.link}>
                             {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                            <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                <Cartel>
                                
                                <Rayita></Rayita>
                                <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered}}></h3>

                                <h4>{peliculas.acf.year}</h4>
                                </Cartel>
                            </Cuadrado>
                         </Link>
                         
                     </article>

                )
            })}

            <h3>NOTICIAS {">>"}</h3>

      

            <Footer />
            
        </>
    )
}

export default connect(CatalogoVideos)


const Cartel = styled.div`
  color: #fff;
  padding-top: 2em;
  padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity:0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1em;

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
  height: 28vw;
  z-index: 99;
  width: 28vw;
  overflow:hidden;
`

const Title = styled.h1`
  font-size: clamp(1rem,1vw,2rem);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Year = styled.p`

`