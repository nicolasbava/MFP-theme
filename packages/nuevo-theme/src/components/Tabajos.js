import React,{useEffect} from "react"
import {connect, styled, css, Global} from 'frontity'


const Trabajos = ({state, actions, nombre}) => {
    
    
    const peliculas = state.source.peliculas;
    


    // 
    
  /*NICO PELICULAS FUNCIONES CARACTERISTICAS */

    useEffect(() => {
        actions.source.fetch("/peliculas")
    }, []) 

    const arrayNuevo = [];

    // peliculas.forEach((item) => {
    // if (item.acf.ficha_tecnica.length){
    //     const test = item.acf.ficha_tecnica.filter(
    //         (ele) => ele.post_title === nombre
    //     );
    // }
    // if (test.length) arrayNuevo.push(item);
    // });



    return (
        <>
            {/* {console.log(test)} */}
            

              <h1>TRABAJOS ARTISTAS SI SEÑOR EXITO</h1>
        
        </>
    )

}

export default connect(Trabajos)