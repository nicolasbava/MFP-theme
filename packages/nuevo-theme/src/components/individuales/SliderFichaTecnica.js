 import React, {useEffect} from "react"
 import {connect,Global,css,styled} from "frontity"
 import Link from "../Link"
 import FichaLink from "../FichaLink"

 import { useHorizontalScroll } from "../useSideScroll";
 

 const SliderFichaTecnicaModulo = ({state, peliculaId, actions}) => {

    


    let arrayArtistas = state.source.artistas

    let wrap = "flexWrap:'wrap'"

    if(state.theme.contador % 2 !== 0) {
      wrap = "flexWrap:'wrap'"
    } 
    
    if (state.theme.contador % 2 === 0){
      wrap = "flexWrap:'no-wrap'"
    }

    let fichaTecnica = []

    if(state.source.peliculas[peliculaId]){
        fichaTecnica = state.source.peliculas[peliculaId].acf.ficha_tecnica
        

    }

    const scrollRef = useHorizontalScroll();

    
  
    


    return (
        <>

       
            {/* FICHA TECNICA PERSONAS slider - pelicula */}
            {fichaTecnica.length > 0 ? (
                <>
                <p className="eq">{">"} EQUIPO</p>
                </>
            ): null}
            
            {/* {console.log('estado: ', state)} */}
            
            {/* {console.log('artistas: ', arrayArtistas)} */}
            {/* {console.log('ID RECIBIDO: ', peliculaId)} */}
            
                
            <SliderFichaTecnica className="panel" ref={scrollRef} style={{ overflow: "auto", wrap, paddingBottom:'2em' }}>
            {/* {console.log('ficha',fichaTecnica)} */}
            
            {/* {console.log(state.source.artistas)} */}
            

                {fichaTecnica.length > 0 ? fichaTecnica.map((val, key) => {
                let foto = 'http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg'
                // let personaId = val.cargo_nombre[0].ID
                //let personaId
                

                // arrayArtistas ? console.log('ficha', arrayArtistas[personaId].acf.foto_artista  ) : null
               

                // if( arrayArtistas  && val.cargo_nombre.length > 0 && arrayArtistas.personaId.acf.foto_artista  ){
                //    personaId = val.cargo_nombre[0].ID
                //    foto = arrayArtistas.personaId.acf.foto_artista  
                         
                // } else {foto = 'http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg'}
                

                return (                    
                    <ContenedorFicha  value={val.id}>
                    {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png"></img> */}
                    
                    {/* <h1>{personaId} </h1> */}
                    {/* <h1>{val.cargo} </h1> */}
                  


                    
                    <div style={{backgroundImage:`url(${foto})`}}></div>
                    <article className="fondo-verde">                        
                        {val.cargo_nombre.length === 0 ? null : val.cargo_nombre.map((val,key) =>{
                        return (
                            <FichaLink link={val.post_type + "/" + val.post_name}>
                                <p>{val.post_title}</p>
                            </FichaLink>
                        )
                        })}

                        {val.nombre_texto.length === 0 ? null : 
                            <p>{val.nombre_texto}</p>
                        }
                        
                        <p className="cargo">{val.cargo}</p>  
                        </article>
                    </ContenedorFicha>
                )
                } 
                ): null
            }
            </SliderFichaTecnica >
            <Raya style={{marginTop:`-4px`}}></Raya>

            {/* {state.theme.contador % 2 !== 0 && } */}                
            


            {fichaTecnica !== "undefined" && fichaTecnica.length > 5 && (
            <VerMas onClick={actions.theme.setPlusContador}>Ver más ({fichaTecnica.length}) 
                            
            </VerMas>
            )}                  
        </>
    )
 }
 

 export default connect(SliderFichaTecnicaModulo)

 const SliderFichaTecnica = styled.div`
      transition: all 500ms ease;
      padding-bottom: 0.5em;
      display: flex;
      gap: 1vw;
      overflow-x: scroll;
      //justify-content: space-between;

      scrollbar-color: #ff510a #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      // &:first-of-type {
      //   margin-left: -2vw;
      // }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff510a #0d6efd00;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #0d6efd00;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #ff510a;
        border-radius: 6px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #fe7434;
        cursor: pointer;

      }
`

const SliderFichaTecnicaWrap = styled.div`
      transition: flex-wrap 500ms ease;
      padding-bottom: 2.3em;
      display: flex;
      flex-wrap: wrap;
      overflow-x: scroll;
    //   justify-content: space-between;

      scrollbar-color: #ff5e1d #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &:first-of-type {
        margin-left: -2vw;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff5e1d #3330;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #3330;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #ff510a;
        border-radius: 25px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        //background: #fe7434;
        background: none;
        cursor: pointer;

      }
`

const VerMas = styled.p`
      text-align: right;
      cursor: pointer;
      font-size: 0.8rem;
      margin: 0;
      padding-top: 2em;
`

const ContenedorFicha = styled.div`
    // border: 2px #00ad9d solid;
    height: 250px;
    // width: 150px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    // padding-left: 2vw;
    color: white;
    // width: 12vw;
    //margin-bottom: 2vw;
    //margin-top: 1em;

   
    div {
      height: 100%;
      // width: 12vw;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2px 2px 0 0;

      }
    // &:first-of-type {
    //   margin-left: -2vw;
    // }  


    .fondo-verde {
      background:#00ad9d;
      padding: 0.6em;
      border-radius: 0 0 2px 2px ;
      height: 100px;
      width: 150px;
      color: #FBF0E5;

    }

    p {
      margin: 0;
      line-height: 1;
      color: white;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-family: 'Krona One';
    }

    .cargo {
      font-size: 1rem;
      font-family: 'Calibri', sans-serif;
      text-transform: capitalize;
    }

`

const Raya = styled.div`
    background: #d5d3d3;
    height: 1px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
`

const TextoFichaTecnica = styled.div`
  padding-bottom: 0.5em;

  p {
    // font-size: .9rem;
    // font-family: ${redHat};
  }
`

const Interesar = styled.div`
    padding: 3em 0;

`

const Arriba = styled.p`
    position: absolute;
    right: 5vw;
    font-size: .5em;
    cursor: pointer;
`
