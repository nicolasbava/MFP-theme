import React, {useEffect, useRef} from "react"
import ReactDOM from "react-dom";
import {connect, styled} from "frontity"

import Link from "../components/Link"

import Footer from "../components/footer"

import Search from "../components/Search"

import { useHorizontalScroll } from "../components/useSideScroll";
import ModalFlechas from "../components/ModalFlechas";




const Peliculas = ({state, actions}) => {
   const scrollRef = useHorizontalScroll();

   

    // const arrayNoticias = Object.values(state.source.noticias)
    const peliculas = state.source.peliculas
    
    const arrayPeliculas = Object.values(state.source.peliculas)
    arrayPeliculas.sort((a,b) => (a.acf.year > b.acf.year) ? 1 : ((b.acf.year > a.acf.year) ? -1 : 0))

    
    const filteredPeliculas = arrayPeliculas.filter((peliculas) =>
        peliculas.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )  

    // console.log(filteredPeliculas)

    let array1= []
    let array2 = []
    let array3 = []

    const items1 = [0,3,6,9,12,15,18,21,24,27,30,33,36,39]

    const items2 = [1,4,7,10,13,16,19,22,25,28,31,34,37,40]

    const items3 = [2,5,8,11,14,17,20,23,26,29,32,35,38,41]

    filteredPeliculas.forEach((item,index) => {
    if(items1.includes(index)) array1.push(item);
    if(items2.includes(index)) array2.push(item);
    if(items3.includes(index)) array3.push(item);      
    })


    const noticias = state.source.noticias;

    
    return (
        <>
        <Contenedor>
            <CartelHeader>
                <p className="krona">{"> "}ENCICLOPEDIA VIRTUAL</p>
                <Search />
            </CartelHeader>    
       

            {/* OUTSIDE, scroll  */}
            <Outside className="main" ref={scrollRef} style={{ overflow: "auto",}}>
                

                {/* ARRAY 1  */}
                <Array>
                {array1.map((peliculas) => {
                    return (
                        <Article key={peliculas.id}>
                            <Link href={peliculas.link}>
                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                    <Rayita></Rayita>
                                    <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>
                                    <h3 className="año">{peliculas.acf.year}</h3>
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
                    return (
                        <Article key={peliculas.id}>
                            <Link href={peliculas.link}>
                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                    <Rayita></Rayita>
                                    <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>
                                    <h3 className="año">{peliculas.acf.year}</h3>
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
                    return (
                        <Article key={peliculas.id}>
                            <Link href={peliculas.link}>
                                <Cuadrado style={{backgroundImage:`url(${peliculas.acf.foto_pelicula})`}}>
                                    <Cartel>
                                      <Rayita></Rayita>
                                      <h3 dangerouslySetInnerHTML={{__html:peliculas.title.rendered.toUpperCase()}}></h3>
                                      <h3 className="año">{peliculas.acf.year}</h3>
                                    </Cartel>
                                </Cuadrado>
                            </Link>
                        </Article>
                    )
                })}
                </Array>

                <Raya style={{marginTop:`26px`, background: '#b5b5b5'}}></Raya>



                {/* Desplegar año  */}
                <Array>
                {array3.map((peliculas) => {
                    return (
                        <Article key={peliculas.id}>              
                                <CuadradoAño >
                                    <h3>{'> '} {peliculas.acf.year}</h3>
                                </CuadradoAño>
                        </Article>
                    )
                })}
                </Array>

                

                {/* link VER TODAS LAS PELICULAS */}
              <VerTodasPeliculas> 
                <Link href="/peliculas">
                  <p className="krona">{"> "}Ver todas las películas</p>                
                </Link>
              </VerTodasPeliculas>


              </Outside>
              <Raya style={{marginTop:`-5px`}}></Raya>
            </Contenedor>


        </>
    )
}

export default connect(Peliculas)

const transparente = '#3330'

const Raya = styled.div`
    background: #d5d3d3;
    height: 1px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
`

const VerTodasPeliculas = styled.article`
    text-transform: uppercase;
    font-size: .7rem;
    padding: 4.5em 13px 0em 0;
    float:right;
    position:absolute; 
    right: 5.8%;

`;


const CartelHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    align-items: center;
    padding-bottom: 2em;

    p {
        font-size: .7rem;
        padding: 0;
        margin: 0;
    }
`
const Article = styled.article`
  margin-bottom: 10px;
`



const Outside = styled.div`
  // display:flex;
  overflow-x: scroll;
  width: 87vw;
  padding-bottom: 1em;
  //margin-bottom: 2em;

  &:first-of-type {
    margin-left: -1vw;
  }

  scrollbar-color: #fe743d ${transparente};
  scrollbar-width: thin;
  scrollbar-radius: 25px;

  &::-webkit-scrollbar {
    height: 10px;
    width: 69px;
    background-color: #fe743d ${transparente};
    cursor:pointer;

  }

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
    cursor:pointer;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${transparente};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #fe743d;
    border-radius: 25px;
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
  // padding: 1em 0;


`

const Contenedor = styled.main`
  padding-left: 7%;
  padding-right: 7%;
`
const Cartel = styled.div`
  color: #fff;
  padding-left: 4em;
  padding-right: 2em;
  padding-bottom: 3em;
  // padding-top: 11em;
  justify-content: flex-end;
  height: 100%;
  transition: 500ms ease;
  opacity:0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;

  
  
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

  @media (max-width: 600px) { 
    font-size: 0.5rem;  
  }

  @media (min-width:601px) and (max-width:1000px) {
    font-size: 0.6rem;
  }​ 
`

const Rayita = styled.div`
  width: 29px;
  height: 5px;
  margin-left: 1px;
  background: #ff871c;
  border-radius: 4px;
  margin-bottom: 11px;
`

const CuadradoAño = styled.div`
  background: none;
  border-radius: 2px;
  //height: 24vw;
  width: 27.7vw;
  overflow: hidden;
  margin-left: 1vw;
  z-index: 99;
  background-position: center;
  background-size: cover;

  h3 {
    margin-top: 3em;
    margin-bottom: 4px;
    text-transform: uppercase;
    line-height: 1.6;
    font-weight: normal;
    font-size: 1rem;
    color:#fe743d;
  }

  @media (max-width: 769px) { 
    height: 38vw;
    width: 43vw;  
  }
`

const Cuadrado = styled.div`
  background: grey;
  border-radius: 2px;
  height: 24vw;
  width: 27.7vw;
  overflow: hidden;
  margin-left: 1vw;
  z-index: 99;
  background-position: center;
  background-size: cover;

  h3 {
    margin-top: 0;
    margin-bottom: 4px;
    text-transform: uppercase;
    line-height: 1.6;
    font-weight: normal;
    font-size: 1rem;
  }

  @media (max-width: 769px) { 
    height: 38vw;
    width: 43vw;  
  }
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