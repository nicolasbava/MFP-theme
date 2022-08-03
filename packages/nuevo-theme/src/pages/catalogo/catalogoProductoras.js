import React from "react"
import {connect, styled} from "frontity"

import Link from "../../components/Link"
import Search from "../../components/Search"
import Cuadrado2 from "../../components/individuales/Cuadrado2"




const CatalogoProductoras = ({state, actions}) => {

    const arrayArtistas = Object.values(state.source.productoras)

    const arrayOrdenadoOrden = arrayArtistas.sort((a,b) => {
      if(a.acf.orden > b.acf.orden) return 1;
      if(a.acf.orden < b.acf.orden) return -1;
      return 0;
    }) 

    
    const filteredArtistas = arrayOrdenadoOrden.filter((productoras) =>
        productoras.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Productoras>
            <article>
              <p></p>
              <Search />
            </article>
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            <>
                <Array>
                {filteredArtistas.map((productora) => {
                    
                    let name = productora.title.rendered // nombre productora
                    let id = productora.id // id
                    let link = productora.link // url post productora
                    let image = productora.acf.foto_productora // imagen fondo 
                    
                    return (
                        <>
                          <Cuadrado2 key={name + id} title={name} link={link} image={image} />
                        </>
                    )
                })}
                </Array>
            </>
        </Productoras>
    )
}

export default connect(CatalogoProductoras)


// ==== STYLES ====

const Array = styled.div`
  display: flex;
  flex-wrap: wrap;
  // padding: 1em 0;
  margin-right: -2vw;

  &:first-of-type{
    margin-left: -1vw;
  }
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
        // padding-block:.5em;

        p {
            font-size: .7rem;
            padding-top: 3em;
            padding-bottom: 3em;
        }
    }
`

// <Article key={productora.id}>
// {/* <p>{peliculas.title.rendered}</p> */}

// {/* {console.log(arrayPeliculas)} */}
    
//     <a href={productora.link}>
//         {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


//         <Cuadrado style={{backgroundImage:`url(${productora.acf.foto_productora})`}} >
//             <Cartel>
            
//             <Rayita></Rayita>
//             <h3 dangerouslySetInnerHTML={{__html:productora.title.rendered.toUpperCase()}}></h3>

//             </Cartel>
//         </Cuadrado>
//     </a>
    
// </Article>