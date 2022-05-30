import React from 'react'
import {connect, styled, Global, css} from "frontity"
import Link from '../Link'

const InteresarPeliculas2 = ({state}) => {

    const interesarPeliculas = state.source.peliculas

    return (

        
        <InteresarPeliculas>
                            <p className="eq">{">"} TE PUEDE INTERESAR</p>
                            <Array>
                            {typeof interesarPeliculas === "undefined" ? null : 

                                
                                Object.values(interesarPeliculas).slice(1, 5).map( pelicula => {
                                
                                    return (
                                        <Article key={pelicula.id}>
                                            <Link href={pelicula.link}>
                                                <Cuadrado style={{backgroundImage:`url(${pelicula.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                    <Rayita></Rayita>
                                                    <h3 dangerouslySetInnerHTML={{__html:pelicula.title.rendered}}></h3>

                                                    <h4>{pelicula.acf.year}</h4>
                                                    </Cartel>
                                                </Cuadrado>
                                            </Link>

                                            </Article>                                                                
                                    )
                                })         
                            }

                        </Array>
                                
        </InteresarPeliculas>

    )
}

export default connect(InteresarPeliculas2);

const InteresarPeliculas = styled.section`
    padding-top: 2em;
    
    p {
      font-family: 'Krona One';
      font-weight: normal;
      padding-bottom: 2em;
      font-size: 0.8rem;
    }

`

const Article = styled.article`
    //margin-bottom: 1vw;
    &:first-of-type{
        // margin-left: -1vw;
    }
`

const Array = styled.div`
    display: flex;
    //padding: 1em 0;
    flex-wrap: wrap;
    gap: 1vw;
    margin-right: -2vw;
`

const Cartel2 = styled.div`
  color: #fff;
  //padding-top: 2em;
  // padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: all 500ms ease;
  opacity: 1;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  padding-right: 3em;
  background: rgba(0,0,0, .7);


  gap: 1vw;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 3em;
  padding-bottom: 3em;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 1rem;
  }

  h4 {
    font-weight: normal;
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
    margin-bottom: 2em;
  }

  // & > * {

  //   transition: transform 0.7s;
  //   transform: translateX(-8rem);
  // }

  
  &:hover > * {
    //transform: translateX(0);
    // transform: scale(1.1);
    text-decoration: underline;
  }

  // &:hover {
  //   background: rgba(0,0,0, .7);
  //   opacity: 1;
  //   box-sizing: border-box;
  // }
`



const Cartel = styled.div`
  color: #fff;
  //padding-top: 2em;
  // padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity: 0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  //padding-right: 1em;

  gap: 1vw;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 3em;
  padding-bottom: 3em;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 1rem;
  }

  h4 {
    font-weight: normal;
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
    margin-bottom: 2em;
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
  height: 36vw;
  width: 41vw;
  overflow:hidden;
  //margin-left: 1vw;
  z-index: 99;
  background-position: center;
  background-size: cover;

  @media (min-width: 944px){   
      width: 20.5vw;
      height: 18vw;   
  }
`

