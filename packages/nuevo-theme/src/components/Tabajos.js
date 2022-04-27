import React,{useEffect} from "react"
import {connect, styled, css, Global} from 'frontity'


const Trabajos = ({state, actions, nombre}) => {
    
    
    const peliculas = state.source.peliculas;
    


    // 
    
  /*NICO PELICULAS FUNCIONES CARACTERISTICAS */

    useEffect(() => {
        actions.source.fetch("/peliculas")
    }, []) 




    return (
        <>
            {console.log(nombre)}


              <h1>TRABAJOS ARTISTAS SI SEÑOR EXITO</h1>
        
        </>
    )

}

export default connect(Trabajos)