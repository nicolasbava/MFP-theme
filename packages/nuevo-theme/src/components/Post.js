import React, {useEffect} from 'react'
import {connect, styled, css, Global} from 'frontity'

import Link from './Link'
import FichaLink from './FichaLink'
import Cargando from './Cargando'
import IconosRedes from './IconosRedes'




const naranja = '#ec7342'

const fondoRosa = '#fbf0e5'

const redHat = "'Red Hat Text', sans-serif"




const Post = ({ actions, state, element, libraries }) => {
    const data = state.source.get(state.router.link)
    
    const post = state.source[data.type][data.id]   
    // 
    
  /*NICO PELICULAS controladores */

  useEffect(() => {
    actions.source.fetch("/peliculas")
    actions.source.fetch("/artistas")
    actions.source.fetch("/noticias")
    actions.source.fetch("/presentacion")

  }, []) 



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


  




    /* NICO ARTISTAS FUNCIONES CARACTERISTITAS */
  let fotoRandom

    if (post.acf.foto_artista === true) {
      fotoRandom = post.acf.foto_artista;
    } else { fotoRandom = "http://memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"}
  
   
    
    const nacimiento = post.acf.lugar_de_nacimiento;
  
    const yearNacimiento = post.acf.nacimiento;

  // =========== controladores PRODUCTORAS ====================

    const filmografia = post.acf.filmografia

    // const equipo = post.acf.equipo



  const interesarPeliculas = state.source.peliculas;

  if ( element === 'pelicula')  {
      
    // function shuffle(array) {
    //   if(array != false){
    //     array.sort(() => Math.random() - 0.5);
    //   }
      
    // }

    
                            
  

  // ============ controladores NOTICIAS ======================
  
  const noticias = state.source.noticias


    
    // ARTISTAS final


    // ====== PELICULA inicio ========

    const time = new Date().getTime();
  
    const lastNumber = String(time).slice(-2)

      console.log(lastNumber)
        return (




            <Pelicula>
                <Catalogo className="krona">
                  <Link href="/">  {"> "}CATÁLOGO{" "} 
                  {">"} PELÍCULAS</Link>
                </Catalogo>
                <TituloPeli dangerouslySetInnerHTML={{ __html: post.title.rendered}}></TituloPeli>
                {/* <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli> */}
                

                <CaractPeliculas>      

                    {yearPelicula && <Link href={yearPelicula} > <p>{yearPelicula}</p> </Link>}  
                    
                    {generoPelicula && <p>{tab}/{tab}{generoPelicula} </p>} 

                    {colorPelicula && <p>{tab}/{tab}{colorPelicula} </p>}        
                   
                    {estiloPelicula && <p>/{tab}{estiloPelicula}</p>}                
                    
                </CaractPeliculas>

                <InfoPeli dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli>

                {post.acf.link.length === 0 ? null : (

                  <VideoPelicula>
                      <iframe width="100%" height="600" src={linkPelicula} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </VideoPelicula>
                )}
                
                {/* GALERIA PELICULAS */}
                <GaleriaPelicula>    
                         
                      {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                      return (
                          <a href={val} data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                            <img src={val}  class="img-fluid"></img>
                          </a>
                      )
                      })) : null
                      }    
                  
                </GaleriaPelicula>

                


                <FichaTecnicaPelicula>               

                    <Raya></Raya>
                    <h3>{">"} FICHA TÉCNICA</h3>

                    {/* FICHA TECNICA TEXTO - pelicula  */}
                    <TextoFichaTecnica>
                        <p className="eq">{">"} FICHA TÉCNICA</p>
                        <div className="cartel-ficha">
                            <div>
                            <p>{yearPelicula}{tab}/{tab}{generoPelicula} {tab}/{tab}{colorPelicula}{tab}/{tab}{estiloPelicula}</p>                 
                            {/* <span>{tab}/{tab}{generoPelicula} </span> 
                            <span>{tab}/{tab}{colorPelicula} </span> 
                            <span>{tab}/{tab}{estiloPelicula}</span>  */}
                            <p>Duración: {duracionPelicula}</p> 

                            </div>
                            <p>Formato Original: {post.acf.formato_original}</p>
                            <p>Rodaje: {rodajePelicula}</p>
                            <p>Estreno: {post.acf.estreno}</p>

                            {productoraPelicula.length > 0 ? (productoraPelicula.map((val,key) => {
                            return (
                                <p>Procutora:   <FichaLink link={val.post_type + '/' + val.post_name}> {val.post_title} </FichaLink></p>
                            )
                            })) :<p>Productora: <FichaLink link={"productoras/desconocida"}>  Desconocida </FichaLink></p>
                        }         
                        </div>
                    </TextoFichaTecnica>

                    {fichaTecnica.length > 0 ? (
                      <>
                        <p className="eq">{">"} EQUIPO Y REPARTO</p>
                      </>
                    ): null}
                    
                      
                  {/* FICHA TECNICA PERSONAS slider - pelicula */}
                    <SliderFichaTecnica className="panel" style={wrap} >

                        {fichaTecnica.length > 0 ? fichaTecnica.map((val, key) => {
                        return (                    
                            <ContenedorFicha  value={val.id}>
                            {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/051-min.png"></img> */}
                            {console.log(fichaTecnica)}

                            <div style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
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

                    {/* {state.theme.contador % 2 !== 0 && } */}                
                    


                    {fichaTecnica !== "undefined" && fichaTecnica.length > 5 && (
                    <VerMas onClick={actions.theme.setPlusContador}>Ver más ({fichaTecnica.length}) 
                                    
                    </VerMas>
                    )} 
              </FichaTecnicaPelicula>

            {/* TE PUEDE INTERESAR inicio  */}

                <InteresarPeliculas>
                    <p className="eq">{">"} TE PUEDE INTERESAR</p>
                    <Array>

                      

                      {typeof interesarPeliculas === "undefined" ? <Cargando /> : 


                          
                       
                          

                          Object.values(interesarPeliculas).slice(0, 4).map( pelicula => {
                            
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
      
    // const arrayNuevo = [];

    // const name = post.title.rendered

    // const peliculas = interesarPeliculas;

    // if(peliculas.length > 0) {
    //   peliculas.forEach((item) => {
    //     if (item.acf.ficha_tecnica !== "undefined"){
    //         let test = []
    //         test = item.acf.ficha_tecnica.filter(
    //             (ele) => ele.post_title === name
    //         );
    //     }
    //     if (test.length > 0) arrayNuevo.push(item);
    //     });
    
    // } else {return null}

    const productoras = post.acf.prodcutoras
    const trabajos = post.acf.trabajos

    let direccion = []
    let guion = []
    let produccion = []
    let otros = []

    if (trabajos.length >= 1) {

    trabajos.forEach(element => {

      if (element.cargo === 'Dirección') {
        direccion.push(element)
      } 
      
      else if (element.cargo === 'Guión') {
        guion.push(element)
      } 
      
      else if (element.cargo === 'Producción') {
        produccion.push(element)
      } 
      
      else if (element.cargo.length > 1) {
        otros.push(element)
      }
      
    })
  } else return null
    // console.log(otros);



     



       return ( 
        <>


          <Artista>

               {/* {productoras.length > 0 ? console.log(productoras.length) : null}  */}
               {/* {console.log(post)} */}
               {/* {console.log(interesarPeliculas)} */}
               {console.log(trabajos)}

              
               
                  

                <InfoAf>
                    <Indice><p className='krona'> {">"} CATALOGO {">"} FICHA TÉCNICA</p></Indice>
                    <Info>
                    <Foto>
                        <div style={{backgroundImage:`url(${post.acf.foto_artista || fotoRandom})`}}></div>
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



{/*============== TRABAJOS ARTISTA / artista==============================*/}
                  
                {typeof trabajos === false ? <p>{"> "}FILMOGRAFÍA</p> : (


               
                  <InteresarPeliculas>
                    <p className="eq">{"> "}FILMOGRAFÍA</p>

                    {/* == 1. Trabajos Dirección == */}
                    {direccion.length === 0 ? null : (
                        <p>{"> "}Dirección</p>        
                    )}
                    <Array>                    

                      {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                          Object.values(direccion).map(element => {

                              return (
                                      
                                      <Article key={element.id}>
                                      {/* {console.log(direccion)} */}

                                      
                                      <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                              {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                              <Cuadrado style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}>
                                                  <Cartel>

                                                    <Rayita></Rayita>
                                                    <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                {/* <h4>{pelicula.acf.year}</h4> */}
                                                </Cartel>
                                            </Cuadrado>
                                        </FichaLink>

                                    </Article>                                                                
                            )
                        })     
                    }
                    </Array>


                    {/* Trabajos Produccion */}
                    {produccion.length === 0 ? null : (
                        <p>{"> "}Producción </p>        
                    )}
                    <Array>                    

                      {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> : 

                          
                          Object.values(produccion).map( element => {

                              
                              console.log(element.peliculas[0].ID)
                              

                              let id = element.peliculas[0].ID

                              let foto = [] 

                              let fotoRandom = 'http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)'

                              // if(interesarPeliculas[id].acf.foto_pelicula !== 'undefined'){
                              //   foto.push(interesarPeliculas[id].acf.foto_pelicula)
                              // } else {foto.push(fotoRandom)}
                              

                              console.log(element.peliculas[0].post_title , id)
                                
                                
                              console.log(foto)
                              //console.log(interesarPeliculas[370])
                              

                             
                              

                              

                              return (

                                      <Article key={element.id}>
                                      {/* {console.log(produccion)} */}
                                      
                                     

                                      
                                      <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                              {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                              <Cuadrado style={{backgroundImage:`url(${foto})`}}>
                                                  <Cartel>

                                                  <Rayita></Rayita>
                                                  <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                {/* <h4>{pelicula.acf.year}</h4> */}
                                                </Cartel>
                                            </Cuadrado>
                                        </FichaLink>

                                    </Article>                                                                
                            )
                        })     
                    }
                    </Array>

                    {/* Trabajos Guion */}
                    {guion.length === 0 ? null : (
                        <p>{"> "}Guión</p>        
                    )}
                    <Array>                    

                      {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                          Object.values(guion).map( element => {

                              return (

                                      <Article key={element.id}>
                                      {/* {console.log(guion)} */}
                                      
                                      <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                              {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                              <Cuadrado style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}>
                                                  <Cartel>

                                                    <Rayita></Rayita>
                                                    <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                {/* <h4>{pelicula.acf.year}</h4> */}
                                                </Cartel>
                                            </Cuadrado>
                                        </FichaLink>

                                    </Article>                                                                
                            )
                        })     
                    }
                    </Array>

                    
                        
                  </InteresarPeliculas>
                   )}



                {/* ============ PRODUCTORAS / artista ============*/}

                {typeof productoras === "undefined" ? <p>{"> "}PRODUCTORAS ASOCIADAS</p> : (
                  <InteresarPeliculas>
                  <p className="eq">{">"} PRODUCTORAS ASOCIADAS</p>
                  <Array>

                    {typeof productoras === "undefined" ? <p>Cargando Peliculas...</p> : 

                        Object.values(productoras).map( pelicula => {

                            return (
                                    <Article key={pelicula.id}>

                                    <FichaLink link={pelicula.post_type + '/' + pelicula.post_name}> 
                                            {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                            <Cuadrado style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}>
                                                <Cartel>

                                                <Rayita></Rayita>
                                                <h3 dangerouslySetInnerHTML={{__html:pelicula.post_title}}></h3>

                                              {/* <h4>{pelicula.acf.year}</h4> */}
                                              </Cartel>
                                          </Cuadrado>
                                      </FichaLink>

                                  </Article>                                                                
                          )
                      })         
                  }

              </Array>
                      
                </InteresarPeliculas>

                )}
                </TrabajosArtista>




        </Artista>
        </>   
           )
    } else if (element === 'productora'){
        return ( 
            <>
               <Artista>
                    <InfoAf>
                        <Indice><p> {">"} CATÁLOGO                
                            {" > "} 
                          <Link href='/productoras'>
                            PRODUCTORAS 
                          </Link></p>
                         </Indice>
                        <Info>
                        <Foto>
                            <div style={{backgroundImage:`url(${post.acf.foto_productora || fotoRandom})`}}></div>
                        </Foto>
                        <InfoArtista>
                            <TituloArtista dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

    
                            <DescripcionArtista dangerouslySetInnerHTML={{__html:post.content.rendered }}></DescripcionArtista>
    
                        
                        </InfoArtista>
                        </Info>
                    </InfoAf>
                    <TrabajosArtista>
    
                   
     
                      {/* <h3>EN DESARROLLO</h3> */}
                    

                    </TrabajosArtista>
                    
    
    
                    {/* [0].peliculas.post_title */}
    
            </Artista>



            </>   
               )
    } else if (element === 'noticia') {
        
      return (
        <Noticia>
        <IndiceNoticias>
          <Link href='/noticias'>
            <p className="krona">{"> "}NOTICIAS</p>
          </Link>
        </IndiceNoticias>
          
          <ContenedorNoticia>
            <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
          </ContenedorNoticia>

          <GaleriaPelicula>              
                    {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                      return (
                        <a href={val} data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                          <img src={val}  class="img-fluid"></img>
                        </a>
                      )
                      })) : null
                    }    

          </GaleriaPelicula>

          <ContenedorNoticia>
            <IconosRedes />

          </ContenedorNoticia>

        
        </Noticia>
        )
    }
}

export default connect(Post)



//  NOTICIA inicio
const Noticia = styled.section`
  margin-bottom: 7%;
`;

const IndiceNoticias = styled.div`
    padding: 2em 7%;

    p {
      font-size: .7rem;
    }

`;


const ContenedorNoticia = styled.section`
    // padding-top: 7%;
    padding-left: 16%;
    padding-bottom: 4em;
    padding-right: 16%;

    ul, li {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        // width: 67vw;
        width: 100%;
        height: auto;
        margin-left:auto;
        margin-right: auto;
        padding:1em 0;
    }

    .margen {
        padding-left: 4%;
        paddin-right: 10%;
        width: 35vw;
    }


    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
        padding-bottom: 1em;
        font-weight: normal;
    }

    h3 { 
        font-weight: normal; 
        padding-bottom: 1em;    
    }

    h3, p, div {
        font-family: 'Red Hat Text', sans-serif;
        margin: 0;    
    }

    p {
        padding-bottom: 2em;    

    }


`;


//  ARTISTA inicio 

const Artista = styled.div`
    // background-color: #eed8c0;
    background-color: #f0e3d6;


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

    p {
      font-size: .7rem;
      padding-top: 2em;
      padding-bottom: 2em;
      font-weight: normal;
    }
`

const Info = styled.div`
    display: flex;
    padding-left: 7%;
    padding: -24px;
    padding-right: 18%;
    padding-bottom: 2em;
`

const Foto = styled.div`


    div {
      width: 16vw;
      height: 20vw;
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
    
    p {
      font-family: 'Krona One';
      font-weight: normal;
      padding-bottom: 2em;
      font-size: 0.8rem;
    }

`

const Article = styled.article`
    margin-bottom: 1vw;
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

const Cartel = styled.div`
  color: #fff;
  //padding-top: 2em;
  // padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity:0;
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



const Pelicula = styled.section`
    padding-left: 7%;
    padding-right: 7%;
    margin-bottom: 15vh;

`
const Catalogo = styled.p`
    padding-top: 2em;
    padding-bottom: 2em;
    font-size: .7rem
`
const TituloPeli = styled.h2`
    font-size: 2rem;
    color: black;
    margin-bottom: 0.7em;
    margin-top: 0;
    text-transform: uppercase;
    font-weight: normal;

`
const InfoPeli = styled.span`
    font-family: ${redHat};
    font-size: 1rem;
    color:#5b5b5b;
    margin-botton: 1rem;

`
const CaractPeliculas = styled.div`
    display: flex;
    text-transform: uppercase;
    letter-spacing: 1px;
    color:#424141;
    margin-bottom: 1.2em;

    p {
      padding: 0;
      margin: 0;
      font-family: 'Krona One';
    }
`
const VideoPelicula = styled.div`
    padding: 1em 0;

`

const GaleriaPelicula = styled.div`
    text-align: center;
    display: flex;
    overflow-x: scroll;
    padding-bottom: 2em;
    padding-top: 1em;
    height: auto;
    gap: 1vw;

    &:first-of-type {
      margin-left: -2vw;
    }

    img {
      cursor:pointer;
      // margin-bottom: 2vw;
      max-height: 300px;
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
        background: #f95614;
        border-radius: 50px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #F9672D;;
        cursor: pointer;

      }
`

const FichaTecnicaPelicula = styled.div`
      

    h3 {
      padding-top: 2em;
      color: #333;
      font-weight: normal;
      font-size: 1.5rem;
      padding-bottom: .5em;
    }

    .eq {
      font-size: .9rem;
      // padding-left: 1.4em;
      color: #333;
      padding-bottom: 1em;
      padding-top: 0.5em;
      font-family: 'krona one';
    }

    .cartel-ficha {
      font-family: 'Calibri';
      line-height: 1;
      font-size: 1rem;
      color: #333;
      // padding-top: 0.5em;
    }
`

const SliderFichaTecnica = styled.div`
      transition: all 500ms ease;
      padding-bottom: 0.5em;
      display: flex;
      gap: 1vw;
      overflow-x: scroll;
      //justify-content: space-between;

      scrollbar-color: #ff510a ${fondoRosa};
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      // &:first-of-type {
      //   margin-left: -2vw;
      // }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff510a ${fondoRosa};
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

      scrollbar-color: #ff5e1d ${fondoRosa};
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &:first-of-type {
        margin-left: -2vw;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff5e1d ${fondoRosa};
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
        background: #ff510a;
        border-radius: 25px;
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









