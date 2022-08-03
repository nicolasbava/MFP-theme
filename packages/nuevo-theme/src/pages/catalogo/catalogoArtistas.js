import React from "react"
import {connect, styled} from "frontity"
import Search from "../../components/Search"
// import Pagination from "../../components/pagination"
import Cuadrado2 from "../../components/individuales/Cuadrado2"

const fotoArtista = 'http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg' 



const CatalogoArtistas = ({state, actions}) => {

    const arrayArtistas = Object.values(state.source.artistas) // GET info from state 

    const arrayOrdenadoOrden = arrayArtistas.sort((a,b) => {
        if(a.acf.orden > b.acf.orden) return 1;
        if(a.acf.orden < b.acf.orden) return -1;
        return 0;
      }
    ) 

    const filteredArtistas = arrayOrdenadoOrden.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Contenedor>
            <Flex>
                <p></p>
                <Search />
            </Flex>
            
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}


            <ArtistasFlex>
                {filteredArtistas.map((artista) => {

                    let id = artista.id // id artista
                    let link = artista.link // url del post individual de artista
                    let image = artista.acf.foto_artista // background imagen artista, imagen de fondo artista
                    let name = artista.title.rendered // nombre del artista, artist name

                    return (
                        <>
                            <Cuadrado2 key={name + id + '8' } title={name} link={link} image={image? image : fotoArtista} />
                        </>
                    )
                })}
            </ArtistasFlex>

         

        </Contenedor>
    )
}


export default connect(CatalogoArtistas)



// ====  STYLES =====

const Flex = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5em;
`

const ArtistasFlex = styled.section`
    display: flex;
    flex-wrap:wrap;
    justify-content: left;
    margin-right: -2vw;
    padding-bottom:7%;

    &:first-of-type {
        margin-left: -1vw;
      }

`

const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 7%;

    P {
        padding-top: 3em;
        padding-bottom: 3em;
        font-size: .7rem;
    }
`

{/* <Article key={artista.id}>
                                <a href={artista.link}>
                                    <Cuadrado style={{backgroundImage:`url(${artista.acf.foto_artista || fotoArtista})`}}>
                                        <Cartel>
                                            <Rayita></Rayita>
                                            <h3 dangerouslySetInnerHTML={{__html:artista.title.rendered}}></h3>
                                        </Cartel>
                                    </Cuadrado>
                                </a>
                            </Article> */}


// const Article = styled.article`    
//     // margin-bottom: 1vw;
// `


// const Cartel = styled.div`
//     color: #fff;
//     // padding-top: 5em;
//     padding-left: 4em;
//     padding-right: 4em;

//     height: 100%;

//     opacity:0;
//     box-sizing: border-box;
//     transition: all 250ms ease-in-out;
//      border-radius: 2px;
//     z-index: 95;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     padding-bottom: 4em;


//   h3 {
//       margin-bottom: 0;
//     //   font-size: clamp(0.6rem, 4.3vw, 1.8rem);
//     font-size: clamp(0.35rem, 1.4vw, 1rem);
//       text-transform: uppercase;
//   }

//   h4{
//       margin-top:.5em;
//       font-size: 1rem
//   }

//   & > * {

//     transition: transform 0.7s;
//     transform: translateX(-8rem);
//   }

  
//   &:hover > * {
//     transform: translateX(0);

//   }

//   &:hover {
//     background: rgba(0,0,0, .7);
//     opacity: 1;
//     box-sizing: border-box;
//   }

//   @media (max-width: 880px){
//     padding-left: 2em;
//     padding-bottom: 2em;
//   }
// `

// const Rayita = styled.div`
//     width: 38px;
//     height: 5px;
//     margin-left: 1px;
//     background: #ff871c;
//     border-radius: 4px;
//     margin-bottom: 11px;
// `


// const Cuadrado = styled.div`
//   background: grey;
//   border-radius: 2px;
//   height: 38vw;
//   width: 42.5vw;
//   margin-bottom: 1vw;
//   margin-left: 1vw;
//   overflow:hidden;
//   z-index: 99;
//   background-size: cover;
//   background-image: url(${fotoArtista});
//   background-position: center;
//   background-repeat: no-repeat;

//   h3 {
//     margin-top: 0;
//     margin-bottom: 5px;
//     text-transform: uppercase;
//     line-height: 1.6;
//     font-weight: normal;
//   }

//   @media (min-width: 769px){
//     width: 27.7vw;
//     height: 24vw;
//  }
// `