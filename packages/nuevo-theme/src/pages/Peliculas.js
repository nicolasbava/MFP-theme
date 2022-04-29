import React, {useEffect} from "react"
import {connect, styled} from "frontity"

import Link from "../components/Link"

import Footer from "../components/footer"

import Search from "../components/Search"


const Peliculas = ({state, actions}) => {


   

    // const arrayNoticias = Object.values(state.source.noticias)
      const peliculas = state.source.peliculas
      
      const arrayPeliculas = Object.values(state.source.peliculas)
      arrayPeliculas.sort((a,b) => (a.acf.year > b.acf.year) ? 1 : ((b.acf.year > a.acf.year) ? -1 : 0))
  
      
      const filteredPeliculas = arrayPeliculas.filter((peliculas) =>
          peliculas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
      )  
  
      console.log(filteredPeliculas)
  
      let array1= []
      let array2 = []
      let array3 = []
  
      const items1 = [0,3,6,9,12,15,18,21,24,27,30,33,36,39]
  
      const items2 = [1,4,7,10,13,16,19,22,25,28,31]
  
      const items3 = [2,5,8,11,14,17,20,23,26,29]
  
      filteredPeliculas.forEach((item,index) => {
      if(items1.includes(index)) array1.push(item);
      if(items2.includes(index)) array2.push(item);
      if(items3.includes(index)) array3.push(item);
      
      })




    

    const noticias = state.source.noticias;

    

    // const scrollContainer = document.querySelector("main");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });




    return (
        <>
        {}


        <Contenedor>
            <CartelHeader>
                <p>{"> "}ENCICLOPEDIA VIRTUAL</p>
                <Search />
            </CartelHeader>    
 


            {/* OUTSIDE, scroll  */}
            <Outside className="main">

                {/* ARRAY 1  */}
                <Array>
                {array1.map((peliculas) => {
                    // const pelicula = state.source.peliculas[id]                
                    // <p>Peliculas disponibles({data.items.length})</p>             
                    
                    return (


                        <Article key={peliculas.id}>
                        {/* <p>{peliculas.title.rendered}</p> */}

                        {/* {console.log(arrayPeliculas)} */}
                            
                            <Link href={peliculas.link}>
                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                    
                                    <Rayita></Rayita>
                                    <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>

                                    <h4>{peliculas.acf.year}</h4>
                                    </Cartel>
                                </Cuadrado>
                            </Link>
                            
                        </Article>

                    )
                })}
                </Array>


                {/* ARRAY 2  */}
                <Array>
                {array2.map((peliculas) => {
                    // const pelicula = state.source.peliculas[id]                
                    // <p>Peliculas disponibles({data.items.length})</p>             
                   // peliculas.title.rendered.toUpperCase()
                   
                    return (


                        <Article key={peliculas.id}>
                        {/* <p>{peliculas.title.rendered}</p> */}

                        {/* {console.log(arrayPeliculas)} */}
                            
                            <Link href={peliculas.link}>
                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                    
                                    <Rayita></Rayita>
                                    
                                    <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>

                                    <h4>{peliculas.acf.year}</h4>
                                    </Cartel>
                                </Cuadrado>
                            </Link>
                            
                        </Article>

                    )
                })}
                </Array>                

                {/* ARRAY 3  */}
                <Array>
                {array3.map((peliculas) => {
                    // const pelicula = state.source.peliculas[id]                
                    // <p>Peliculas disponibles({data.items.length})</p>             
                    
                    return (


                        <Article key={peliculas.id}>
                        {/* <p>{peliculas.title.rendered}</p> */}

                        {/* {console.log(arrayPeliculas)} */}
                            
                            <Link href={peliculas.link}>
                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                    
                                    <Rayita></Rayita>
                                    <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>

                                    <h4>{peliculas.acf.year}</h4>
                                    </Cartel>
                                </Cuadrado>
                            </Link>
                            
                        </Article>

                    )
                })}
                </Array>
            
            </Outside>

            {/* NOTICIAS ultimas 3 */}
            
            <Titulo>NOTICIAS {">>"}</Titulo>
                <NoticiasFlex>
                    {typeof noticias === "undefined" ? <p>Cargando Noticias...</p> : 
                    
                        Object.values(noticias).reverse().slice(0,3).map( noticia => {

                            return (
                                <DisplayNoticias key={noticia.id}>
                                    <Noticias>  
                                        <Link href={noticia.link}>
                                            <ImagenNoticia style={{backgroundImage:`url(${noticia.acf.foto_portada})`}}></ImagenNoticia>
                                        </Link>    
                                        <CartelNoticia>
                                            <Link href={noticia.link}>
                                                <h4 dangerouslySetInnerHTML={{__html:noticia.title.rendered}}></h4>
                                            </Link>
                                            <p dangerouslySetInnerHTML={{__html: noticia.acf.resumen}}></p>
                                            <span>{">>"}</span>
                                        </CartelNoticia>

                                    </Noticias>
                                </DisplayNoticias> 
                            )
                        })         
                    }
                </NoticiasFlex>
                {typeof noticias === "undefined" ? '' : <p>{noticias.id}</p>}
                    

            </Contenedor>
            <Footer />

        </>
    )
}


const CartelHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    align-items: center;

    p {
        font-size: .8rem
    }
`

const Titulo = styled.h4`
    margin-top: 6em;
    margin-bottom: 2em;
    font-weight: normal;

`

const Article = styled.article`
  margin-bottom: 10px;
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
  
    @media (max-width: 1000px) { 
      height: 50vw;
    }
`



const DisplayNoticias = styled.div`
  display: flex;
  justify-content: space-around;
  /*width: 100%;*/
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
  flex: 1 0 30%;

  @media (max-width: 1000px) { 
    flex: 1 0 100%;   
    width: 100%;
    margin-bottom: 10px;
  }

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

  .leer-mas {
    margin-left: 5px;
    opacity: 0;
  }

  span {
    color: #333;
    cursor: pointer;
    font-size: 2rem;
  }

  @media (max-width: 1000px) {  
    width: 100%;
  }
`

const CartelNoticia = styled.section`
  padding: 1em 2em;

  h4 {
    margin: 0;
  }

`

export default connect(Peliculas)



const NoticiasFlex = styled.section`
    display:flex;
    flex-wrap: wrap;
`



const Outside = styled.div`
  // display:flex;
  overflow-x: scroll;
  width: 91vw;
  padding-bottom: 3vw;

  &:nth-child(1) {
    margin-left: 0
  }

  scrollbar-color: #fe743d #f5ebda;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #fe743d #f5ebda;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #f5ebda;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #fe743d;
        border-radius: 2px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #fe7434;
        cursor: pointer;

      }

`

const Array = styled.div`
  display: flex;
  // flex-wrap: wrap;
  padding: 1em 0;
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
  justify-content: flex-end;

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
  height: 28vw;
  width: 28vw;
  overflow:hidden;
  margin-left: 1vw;
  z-index: 99;

  @media (max-width: 600px) { 
    height: 40vw;
    width: 40vw;  }

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