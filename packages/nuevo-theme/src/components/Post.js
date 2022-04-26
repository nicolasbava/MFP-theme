import React from 'react'
import {connect, styled, css, Global} from 'frontity'
import Featured from './Featured'
import Link from './Link'
import FichaLink from './FichaLink'
import Trabajos from './Tabajos'

const naranja = '${naranja}'

const fondoRosa = '#fbf0e5'

const redHat = "'Red Hat Text', sans-serif"


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

  const interesarPeliculas = state.source.peliculas;

  // const randomInteresarPeliculas = Math.floor(Math.random() * interesarPeliculas.length)

    /* NICO ARTISTAS FUNCIONES CARACTERISTITAS */


  
    const fotoArtista = post.acf.foto_artista;
    
    const nacimiento = post.acf.lugar_de_nacimiento;
  
    const yearNacimiento = post.acf.nacimiento;

    // const found = fichaTecnica.find((item) => {
    //   item.cargo.cargo_nombre === post.title.rendered
    // })


    
    // ARTISTAS final


    // ====== PELICULA inicio ========
    if ( element === 'pelicula')  {
        return (




            <Pelicula>
                <Catalogo>{">>"}CÁLOGO FÍLMICO PENCOPOLITANO</Catalogo>
                <TituloPeli dangerouslySetInnerHTML={{ __html: post.title.rendered}}></TituloPeli>
                {/* <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli> */}
                <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli>
                

                <CaractPeliculas >      

                    {yearPelicula && <Link href={yearPelicula} > <p>{yearPelicula}</p> </Link>}  
                    
                    {generoPelicula && <p>/{tab}{generoPelicula} </p>} 

                    {colorPelicula && <p>{tab}/{tab}{colorPelicula} </p>}        
                   
                    {estiloPelicula && <p>/{tab}{estiloPelicula}</p>}                
                    
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




                <FichaTecnicaPelicula>
                    
                    {fichaTecnica > 0 ? (
                      <>
                        <Raya></Raya>   
                        <h3>{">"} FICHA TÉCNICA</h3>
                        <p className="eq">{">"} EQUIPO Y REPARTO</p>
                      </>
                    ): null}
                    
                
                    <SliderFichaTecnica className="panel" style={wrap} >

                        {fichaTecnica > 0 ? fichaTecnica.map((val, key) => {
                        return (                    
                            <ContenedorFicha  value={val.id}>
                            {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png"></img> */}
                            <div style={{backgroundImage:`url(https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png)`}}></div>
                            <article className="fondo-verde">                        
                                {val.cargo_nombre.map((val,key) =>{
                                return (
                                    <FichaLink link={val.post_type + "/" + val.post_name}>
                                        <p>{val.post_title}</p>
                                    </FichaLink>
                                )
                                })}
                                <p className="cargo">{val.cargo}</p>  
                                </article>
                            </ContenedorFicha>
                        )
                      } 
                        ): null
                    }
                    </SliderFichaTecnica >
                    
                    
                    
                

                  { fichaTecnica !== "undefined" && fichaTecnica.length > 5 && (
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
                                <p>Procutora:   <FichaLink link={val.post_type + '/' + val.post_name}> {val.post_title} </FichaLink></p>
                            )
                            })) : <FichaLink link={"productoras/desconocida"}> <p>Productora: Desconocida</p> </FichaLink>
                        }         
                        </div>
                    </TextoFichaTecnica>
              </FichaTecnicaPelicula>

            {/* TE PUEDE INTERESAR inicio  */}

                <InteresarPeliculas>
                    <p className="eq">{">"} TE PUEDE INTERESAR</p>
                        <Array>

                            {typeof interesarPeliculas === "undefined" ? <p>Cargando Peliculas...</p> : 

                                    
                            
                                Object.values(interesarPeliculas).slice(0,4).map( pelicula => {

                                    return (
                                            <Article key={pelicula.id}>
                                            {/* <p>{peliculas.title.rendered}</p> */}
                    
                                            {/* {console.log(arrayPeliculas)} */}
                                                
                                                <Link href={pelicula.link}>
                                                    {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                    
                    
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
              


            </Pelicula>            

        )
    } else if (element === 'artista') {
       return ( 
        <>
           <Artista>


                <InfoAf>
                    <Indice><p> {">"} CATALOGO {">"} FICHA TÉCNICA</p></Indice>
                    <Info>
                    <Foto>
                        <div style={{backgroundImage:`url(${fotoArtista})`}}></div>
                    </Foto>
                    <InfoArtista>
                        <TituloArtista dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p>{yearNacimiento}</p>
                        <p>{nacimiento}</p>

                        <DescripcionArtista dangerouslySetInnerHTML={{__html:post.content.rendered }}></DescripcionArtista>

                    
                    </InfoArtista>
                    </Info>
                </InfoAf>
                <TrabajosArtista>

                    <Trabajos />
                    <p>{">"} DIRECTOR (8)</p>
                    <p>poner las peliculas en las que trabajo como director</p>
                    <p>{">"} SONIDO (2)</p>
                    <p>poner las peliculas en las que trabajo como sonido</p>

   
                </TrabajosArtista>




        </Artista>
        </>   
           )
    } else if (element === 'productora'){
        return ( 
            <>
               <Artista>
                    <InfoAf>
                        <Indice><p> {">"} CATALOGO {">"} FICHA TÉCNICA</p></Indice>
                        <Info>
                        <Foto>
                            <div style={{backgroundImage:`url(${fotoArtista})`}}></div>
                        </Foto>
                        <InfoArtista>
                            <TituloArtista dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            <p>{yearNacimiento}</p>
                            <p>{nacimiento}</p>
    
                            <DescripcionArtista dangerouslySetInnerHTML={{__html:post.content.rendered }}></DescripcionArtista>
    
                        
                        </InfoArtista>
                        </Info>
                    </InfoAf>
                    <TrabajosArtista>
    
                        <p>{">"} DIRECTOR (8)</p>
                        <p>poner las peliculas en las que trabajo como director</p>
                        <p>{">"} SONIDO (2)</p>
                        <p>poner las peliculas en las que trabajo como sonido</p>
    
    
                    </TrabajosArtista>
    
    
    
    
            </Artista>
            </>   
               )
    } 
}

// artista inicio

//  ARTISTA inicio 

const Artista = styled.div`
    background-color: #eed8c0;

`

const DescripcionArtista = styled.span`
    font-family: 'Red Hat Text', sans-serif;
`

const InfoAf = styled.div`
    // background: ${fondoRosa};

`

const Bio = styled.p`
    font-family: 'Calibri', sans-serif;
    line-height: 1.2;
`


const TituloArtista  = styled.h2`
    margin: 0;
    margin-top: 0px;
    margin-bottom: 8px;
    color: #0f0c09;
    font-size: 1.2rem;
    font-weight: lighter;
    text-transform: uppercase;
`;

const Indice = styled.div`
    padding-left: 7%;
    padding-top: 1%;
    padding-bottom: 2%;
`

const Info = styled.div`
    display: flex;
    padding-left: 7%;
    padding: -24px;
    padding-right: 7%;
    padding-bottom: 2em;
`

const Foto = styled.div`


    div {
      width: 12vw;
      height: 18vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
`

const InfoArtista = styled.div`
    margin-left: 2em;
`

const TrabajosArtista = styled.div`
    padding: 1em 0 4em 0;
    background:#fbf0e5;
    padding-left: 7%;
    padding-right: 7%;
`

// artista final
const InteresarPeliculas = styled.section`
    padding-top: 2em;
`

const Article = styled.article`
    
&:first-of-type{
    margin-left: -1vw;
}
`

const Array = styled.div`
    display: flex;
    padding: 1em 0;
`

const Cartel = styled.div`
  color: #fff;
  padding-top: 2em;
  padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity:0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1em;

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
  height: 20vw;
  width: 20vw;
  overflow:hidden;
  margin-left: 1vw;
  z-index: 99;
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

    scrollbar-color: ${naranja} ${fondoRosa};
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: ${naranja} ${fondoRosa};
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: ${fondoRosa};
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: ${naranja};
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

      scrollbar-color: ${naranja} ${fondoRosa};
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &:first-of-type {
        margin-left: -2vw;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: ${naranja} ${fondoRosa};
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: ${fondoRosa};
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: ${naranja};
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
      padding: 0.3em 0.5em 1.1em 0.5em;
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









