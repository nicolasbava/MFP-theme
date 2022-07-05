import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"
import Pagination from "../components/pagination"



const CatalogoArtistas = ({state, actions}) => {


    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.artistas)

    // arrayArtistas.sort((a,b) => (a.content.rendered > b.content.rendered) ? 1 : ((b.content.rendered > a.content.rendered) ? -1 : 0))
    
    const filteredArtistas = arrayArtistas.filter((artistas) =>
        artistas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    const arrayArtistasBio = [];



    // filteredArtistas.forEach(item => {
    //     item.content.rendered.length >= 2
    // })





    return (
        <Contenedor>
           {/* {console.log(arrayArtistas)} */}
            <Flex>
            {/* <p  style={{opacity:'0'}} className="krona"><Link href="/">{"> "}CATÁLOGO </Link>{" > "}ARTISTAS</p> */}
                <p></p>
                <Search />
            </Flex>
       

            
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}
        
            {/* <p>Artistas disponibles({data.items.length})</p> */}

            <ArtistasFlex>
                {filteredArtistas.reverse().map((artistas) => {
                    // const artista = state.source.artistas[id];

                    return (
                        <>
                            <Article key={artistas.id}>
                                <a href={artistas.link}>
                                    <Cuadrado style={{backgroundImage:`url(${artistas.acf.foto_artista || fotoArtista})`}}>
                                        <Cartel>
                                            <Rayita></Rayita>
                                            <h3 dangerouslySetInnerHTML={{__html:artistas.title.rendered}}></h3>
                                        </Cartel>
                                    </Cuadrado>
                                </a>
                            </Article>
                        </>
                    )
                })}
            </ArtistasFlex>

            <Pagination />

        </Contenedor>
    )
}

const fotoArtista = 'http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg' 

export default connect(CatalogoArtistas)

const arrayArtistas = ({state}) => {
    const arrayArtistas = Object.values(state.source.artistas)
    return (
        <></>
    )
}
export {arrayArtistas}


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

const Article = styled.article`    
    // margin-bottom: 1vw;
`


const Cartel = styled.div`
    color: #fff;
    // padding-top: 5em;
    padding-left: 4em;
    padding-right: 4em;

    height: 100%;

    opacity:0;
    box-sizing: border-box;
    transition: all 250ms ease-in-out;
     border-radius: 2px;
    z-index: 95;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 3em;


  h3 {
      margin-bottom: 0;
      font-size: clamp(0.6rem, 4.3vw, 1.8rem);
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

  @media (max-width: 880px){
    padding-left: 2em;
    padding-bottom: 2em;
  }
`

const Rayita = styled.div`
    width: 38px;
    height: 5px;
    margin-left: 1px;
    background: #ff871c;
    border-radius: 4px;
    margin-bottom: 11px;
`


const Cuadrado = styled.div`
  background: grey;
  border-radius: 2px;
  height: 38vw;
  width: 42.5vw;
  margin-bottom: 1vw;
  margin-left: 1vw;
  overflow:hidden;
  z-index: 99;
  background-size: cover;
  background-image: url(${fotoArtista});
  background-position: center;
  background-repeat: no-repeat;

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    text-transform: uppercase;
    line-height: 1.6;
    font-weight: normal;
  }

  @media (min-width: 769px){
    width: 27.7vw;
    height: 24vw;
 }
`