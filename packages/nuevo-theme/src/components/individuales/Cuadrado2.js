import React from 'react'
import {connect, styled} from "frontity"

 

function Cuadrado2 (props) {

    let image = props.image // url imagen de fondo del cuadrado
    let title = props.title.toUpperCase() // titulo de pelicula
    let year = props.year // año de pelicula
    let link = props.link // link a la pelicula


    return (
        <Article>
            <a href={link}>
                <Cuadrado>
                        <img className='img' src={image} loading='lazy' />
                        <Cartel>
                            <Rayita></Rayita>
                            {/* titulo pelicula */}
                            <h3 dangerouslySetInnerHTML={{__html:title}}></h3>
                            {/* año pelicula */}
                            <h3 className="año">{year}</h3> 
                        </Cartel>
                </Cuadrado>
            </a>
        </Article>
    )
}

export default Cuadrado2

const Cartel = styled.div`
  color: #fff;
  padding-left: 4em;
  padding-right: 2em;
  padding-bottom: 3em;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  opacity:0;
  box-sizing: border-box;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  flex-direction: column;
  transition: all 250ms ease-in-out;
  transition: opacity 350ms ease-in-out;

  position:absolute;
  top:0;
  
  // animaciones de titulo y año cuando hover
  // title and year animations when hover

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

  @media (max-width: 785px) { 
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 1em;
    
    // h3 {
    //   font-size: 1rem; 
    // } 
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


const Article = styled.article`
  margin-bottom: 10px;
  position:relative;
`

const Cuadrado = styled.div`
  position: relative;
  z-index: 10;

  background: #80808052;;
  border-radius: 2px;
  height: 24vw;
  width: 27.7vw;
  overflow: hidden;
  margin-left: 1vw;
  z-index: 10;
  background-position: center;
  background-size: cover;

  img.img {
    height: 24vw;
    width: 27.7vw;
    object-fit: cover;
  }

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

    h3 {
      
    font-size: clamp(0.4rem, 2.6vw, 1.2rem);
    }
  }
`