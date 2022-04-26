import React,{useEffect} from "react"
import {connect, styled, css, Global} from 'frontity'


const Trabajos = ({state, actions}) => {
    
    
    const peliculas = state.source.peliculas;
    
    let filter = peliculas.filter

    // 
    
  /*NICO PELICULAS FUNCIONES CARACTERISTICAS */

    useEffect(() => {
        actions.source.fetch("/peliculas")
    }, []) 

    peliculas.forEach(item => {
        
        console.log(item.[id])
    })

    return (
        <>
            
            

              <h1>TRABAJOS ARTISTAS SI SEÑOR EXITO</h1>
        
        </>
    )

}

export default connect(Trabajos)