import React from 'react'
import {connect, styled, css, Global} from 'frontity'
import Featured from './Featured'
import Link from './Link'







const Post = ({actions, state, element, libraries }) => {
    const data = state.source.get(state.router.link)
    
    const post = state.source[data.type][data.id]   
    // 
    
  /*NICO PELICULAS FUNCIONES CARACTERISTICAS */



  const yearPelicula = post.acf.year;

  const generoPelicula = post.acf.genero;

  const rodajePelicula = post.acf.rodaje;

  const colorPelicula = post.acf.color;

  const estiloPelicula = post.acf.estilo;

  const fotoPelicula = post.acf.foto_pelicula;

  const fichaTecnica = post.acf.ficha_tecnica;

  const linkPelicula = "https://www.youtube.com/embed/" + post.acf.link;

  const duracionPelicula = post.acf.duracion;

  const productoraPelicula = post.acf.productora;

  const galeriaPelicula = post.acf.galeria;

 

  let wrap = { flexWrap:'wrap'}

  if(state.theme.contador % 2 !== 0) {
    wrap = { flexWrap:'wrap'}
  } 
  
  if (state.theme.contador % 2 === 0){
    wrap = {flexWrap:'no-wrap'}
  }



  const tab = '\u00A0';
    
    // 

    if ( element === 'pelicula')  {
        return (
            <Pelicula>
                <Catalogo>{">>"}CÁLOGO FÍLMICO PENCOPOLITANO</Catalogo>
                <TituloPeli dangerouslySetInnerHTML={{ __html: post.title.rendered}}></TituloPeli>
                {/* <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli> */}
                <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli>
                

                <CaractPeliculas >                
                    {/* <Link href={yearPelicula} > */}
                    <p>{yearPelicula}{tab}</p> 

                    {/* </Link> */}
                    
                    
                    <p>/{tab}{generoPelicula} </p> 
                    
                    
                    <p>{tab}/{tab}{colorPelicula} </p> 
                
                
                    <p>/{tab}{estiloPelicula}</p> 
              
                </CaractPeliculas>

                <VideoPelicula>
                    <iframe width="100%" height="400" src={linkPelicula} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoPelicula>

                <GaleriaPelicula>              
                    {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                    return (
                        <img src={val}></img>
                    )
                    })) : null
                    }    

                </GaleriaPelicula>
                <Raya></Raya>   



                <FichaTecnicaPelicula>

                    <h3>{">"} FICHA TÉCNICA</h3>
                    <p className="eq">{">"} EQUIPO Y REPARTO</p>
                
                    <SliderFichaTecnica className="panel" style={wrap} >
                        {fichaTecnica.map((val, key) => {
                        return (                    
                            <ContenedorFicha  value={val.id}>
                            {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png"></img> */}
                            <div style={{backgroundImage:`url(https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png)`}}></div>
                            <article className="fondo-verde">                        
                                {val.cargo_nombre.map((val,key) =>{
                                return (
                                    <Link href={val.post_type + "/" + val.post_name}>
                                    <p>{val.post_title}</p>
                                    </Link>
                                )
                                })}
                                <p className="cargo">{val.cargo}</p>  
                                </article>
                            </ContenedorFicha>
                        )
                        })}                  
                    </SliderFichaTecnica >
                    {fichaTecnica.length > 5 && (
                    <VerMas onClick={actions.theme.setPlusContador}>Ver más ({fichaTecnica.length}) 
                                    
                    </VerMas>
                    )}
                    

                    <Raya></Raya>

                    <TextoFichaTecnica>
                        <p clas sName="eq">{">"} FICHA TECNICA</p>
                        <div className="cartel-ficha">
                            <div>
                            <span>{yearPelicula}{tab}</span>                 
                            <span>{tab}/{tab}{generoPelicula} </span> 
                            <span>{tab}/{tab}{colorPelicula} </span> 
                            <span>{tab}/{tab}{estiloPelicula}</span> 
                            <span>{tab}-{tab}Duración: {duracionPelicula}</span> 

                            </div>
                            <p>Formato Original: {post.acf.formato_original}</p>
                            <p>Rodaje: {rodajePelicula}</p>
                            <p>Estreno: {post.acf.estreno}</p>

                            {productoraPelicula.length > 0 ? (productoraPelicula.map((val,key) => {
                            return (
                                <p>Procutora:   <Link href={val.post_type + '/' + val.post_name}> {val.post_title} </Link></p>
                            )
                            })) : <Link href={"productoras/desconocida"}> <p>Productora: Desconocida</p> </Link>
                        }         
                        </div>
                    </TextoFichaTecnica>
              </FichaTecnicaPelicula>

            {/* TE PUEDE INTERESAR inicio  */}

                <InteresarPeliculas>
                    <p className="eq">{">"} TE PUEDE INTERESAR</p>
                        
                </InteresarPeliculas>
              

            </Pelicula>

        )
    } else if (element === 'artista') {
       return ( 
        <>
           <p>SOY UN Artista</p>
           <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h2>
                {/* <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p> */}
        </>   
           )
    }
}


const InteresarPeliculas = styled.section`
    padding-top: 2em;
`

export default connect(Post)


const Pelicula = styled.section`
    padding-left: 7%;
    padding-right: 7%;
    margin-bottom: 15vh;

`
const Catalogo = styled.p`
    padding-top: 2em;
    padding-bottom: 2em;
    font-size: .9rem
`
const TituloPeli = styled.h2`
    font-size: 3rem;
    color: black;
    margin-bottom: 0;
    margin-top: 0;

`
const InfoPeli = styled.span`
    font-family: "Calibri",sans-serif;
    font-size: 1.3rem;
    color:#5b5b5b;

`
const CaractPeliculas = styled.div`
    display: flex;
    text-transform: uppercase;
    letter-spacing: 1px;
    color:#424141;

    p {
      padding: 0;
      margin: 0;
    }
`
const VideoPelicula = styled.div`
    padding: 1em 0;

`

const GaleriaPelicula = styled.div`
    text-align: center;
    display: flex;
    overflow-x: scroll;

    
    // & > * {
    //   margin-left: 1em;
    // }

    img {
      cursor:pointer;
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

const FichaTecnicaPelicula = styled.div`
      

    h3 {
      padding-top: 2em;
      color: #333;
      font-weight: normal;
      font-size: 1.5rem;
    }

    .eq {
      font-size: .9rem;
      padding-left: 1.4em;
      color: #333;
      padding-bottom: 1em;
    }

    .cartel-ficha {
      font-family: 'Calibri';
      line-height: 0.2;
      font-size: 1.3rem;
      color: #333;
      padding-top: 0.5em;
    }
`

const SliderFichaTecnica = styled.div`
      transition: flex-wrap 500ms ease;
      padding-bottom: 2.3em;
      display: flex;
      overflow-x: scroll;
    //   justify-content: space-between;

      scrollbar-color: #fe743d #f5ebda;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &:first-of-type {
        margin-left: -2vw;
      }

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
        border-radius: 6px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #fe7434;
        cursor: pointer;

      }
`

const VerMas = styled.p`
      text-align: right;
      cursor: pointer;
      font-size: 0.8rem;
`

const ContenedorFicha = styled.div`
    // border: 2px #00ad9d solid;
    height: 250px;
    // width: 150px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-left: 2vw;
    color: white;
    width: 12vw;
    margin-bottom: 2vw;


    
    div {
      height: 100%;
      width: 12vw;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2px 2px 0 0;

      }
    .fondo-verde {
      background:#00ad9d;
      padding: .3em 0 1.1em 0.5em;
      border-radius: 0 0 2px 2px ;
      height: 7vw;
    }

    p {
      margin: 0;
      padding: 0;
      color: white;
    }

    .cargo {
      font-size: 1rem;
      font-family: 'Calibri', sans-serif;
      text-transform: capitalize;
    }

`

const Raya = styled.div`
    background: #d5d3d3;
    height: 2px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;

`

const TextoFichaTecnica = styled.div`
  padding-top: 2em;


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









