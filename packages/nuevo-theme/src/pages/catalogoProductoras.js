import React from "react"
import {connect, styled} from "frontity"

import Link from "../components/Link"
import Search from "../components/Search"




const CatalogoProductoras = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.productoras)
    
    const filteredArtistas = arrayArtistas.filter((productoras) =>
        productoras.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )



    return (
        <Productoras>
            {console.log(arrayArtistas)}
            <article>
                <p>{"> "} CATÁLOGO {">"} PRODUCTORAS</p>
                <Search />

            </article>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}
        
            {/* <p>Productoras disponibles({data.items.length})</p> */}

                    <>

                       

                        <Array>
                        {filteredArtistas.map((productoras) => {
                            // const pelicula = state.source.peliculas[id]                
                            // <p>Peliculas disponibles({data.items.length})</p>             
                            
                            return (


                                <Article key={productoras.id}>
                                {/* <p>{peliculas.title.rendered}</p> */}

                                {/* {console.log(arrayPeliculas)} */}
                                    
                                    <Link href={productoras.link}>
                                        {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                        <Cuadrado style={{backgroundImage:`url(${productoras.acf.foto_productora})`}} >
                                            <Cartel>
                                            
                                            <Rayita></Rayita>
                                            <h3 dangerouslySetInnerHTML={{__html:productoras.title.rendered.toUpperCase()}}></h3>

                                            </Cartel>
                                        </Cuadrado>
                                    </Link>
                                    
                                </Article>

                            )
                        })}
                        </Array>
                    </>

                



        </Productoras>
    )
}

// style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}

export default connect(CatalogoProductoras)

const Article = styled.article`
  margin-bottom: 1vw;
`


const Array = styled.div`
  display: flex;
  flex-wrap: wrap;
  // padding: 1em 0;
  margin-right: -2vw;

  &:first-of-type{
    margin-left: -1vw;
  }
`

const Contenedor = styled.main`
  padding-left: 7%;
  padding-right: 7%;
`
const Cartel = styled.div`
  color: #fff;
  padding-left: 4em;
  padding-right: 4em;
  height: 100%;
  transition: 500ms ease;
  opacity:0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 5em;

  @media (max-width: 600px) { 
    font-size: 0.5rem;  }

  @media (min-width:601px) and (max-width:1000px) {
    font-size: 0.6rem;
  }​


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
  height: 24vw;
  width: 27.8vw;
  overflow:hidden;
  margin-left: 1vw;
  z-index: 99;
  background-position: center;
  background-size: cover;
  // background-image: url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-1.48.26-AM.jpeg);

  @media (max-width: 600px) { 
    height: 38vw;
    width: 42vw;  }

`




const Productoras = styled.section`
    padding-bottom: 10vh;
    padding-left: 7%;
    padding-right: 7%;

    article {
        // padding-top: 1em;
        display: flex; 
        justify-content: space-between;
        align-items: center;

        p {
            font-size: .8rem;
            padding-top: 2em;
            padding-bottom: 2em;
        }
    }

    
`