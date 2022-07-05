import React from "react"
import {connect, Global, css, styled} from "frontity"
import Link from "../components/Link"

const LinksDeInteres = ({state}) => {
   

   

    return (
        <Contenedor>
                <article className="flex-noticias">
                  {/* OPACITY ZERO . ON PORPOUSE */}
                    <p style={{opacity:'0'}} className="krona responsive"><Link href="/">{"> "}CATÁLOGO </Link>{" > "}CONTACTO{" > "}LINKS DE INTERÉS</p>
                </article>

            
                <div className="flex around">
                  <a href="https://www.festivalbiobiocine.cl/" target="_blank">
                    <img className="uno" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/1.png"></img>
                  </a>
                  <a href="http://catalogoafudec.udec.cl/" target="_blank">
                    <img className="dos" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/2.png"></img>
                  </a>
                  <a href="https://www.archivohistoricoconcepcion.cl/" target="_blank">
                    <img className="tres" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/3.png"></img>
                  </a>
                </div>

                <div className="flex between">
                  <a href="http://proyectovermut.cl/" target="_blank">
                    <img className="cuatro" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/4.png"></img>
                  </a>
                  <a href="https://historiaarquitectonicaconcepcion.cl/" target="_blank">
                    <img className="cinco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/5.png"></img>
                  </a>
                  <a href="https://casadesalud.cl/" target="_blank">
                    <img className="seis" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/6.png"></img>
                  </a>
                  <a href="http://filmoteca.cl/" target="_blank">
                    <img className="siete" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/7.-Filmoteca.png"></img>
                  </a>

                </div>

                <div className="flex between">
                    <a href="https://cinechile.cl/" target="_blank">
                      <img className="ocho" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/8.png"></img>
                    </a>
                    <a href="https://www.cinerecobrado.cl/" target="_blank">
                      <img className="nueve" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/9.png"></img>
                    </a>
                    <a href="http://www.bibliotecanacionaldigital.gob.cl/bnd/625/w3-channel.html" target="_blank">
                      <img className="diez" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/10.png"></img>
                    </a>
                    <a href="http://www.bibliotecamuseodelamemoria.cl/gsdl/cgi-bin/library.cgi?l=es" target="_blank">
                      <img className="once" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/11.png"></img>
                    </a>

                </div>
                <div className="flex between">
                    <a href="https://www.cclm.cl/cineteca-nacional-de-chile/" target="_blank">
                      <img className="doce" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/12.png"></img>
                    </a>
                    <a href="http://cinetecavirtual.uchile.cl/" target="_blank">
                      <img className="trece" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/13.png"></img>
                    </a>
                   
                    <a href="https://archivopatrimonial.usach.cl/" target="_blank">
                      <img className="catorce" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/14.png"></img>
                    </a>  
                    <a href="http://archivofilmico.uc.cl/" target="_blank">
                      <img className="quince" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/15.png"></img>
                    </a>
                </div>
                
        </Contenedor>
    )
}

export default connect(LinksDeInteres)


const Linea2 = styled.section`
  display:flex;
  flex-wrap:wrap;
  align-items: center;
  margin-bottom: 7%;
  justify-content: space-between;

  @media (max-width: 944px){
    & {
      padding-bottom: 4em;
    }
  }

`

const Linea3 = styled.section`
  flex-wrap:wrap;
  display:flex;
  align-items: center;
  padding-bottom: 4em;
  justify-content: space-between;

  .ultimos {
    max-width: 9vw;
  }
  
  @media (max-width: 944px){
    & {
      padding-bottom: 4em;
    }
  }


`

const Contenedor = styled.div`
  // padding-top: 3.5%;
  padding-bottom: 7% ; 
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 186px)
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;

  // INDICE
    .flex-noticias {
        // padding-top: 1em;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;

        p {
            font-size: .7rem;
            padding-top: 3em;
            padding-bottom: 3em;
        }

        @media (max-width: 462px){
            p {
                font-size: .5rem;
            }
        }

        @media (max-width: 270px){
            p {
                font-size: .5rem;
            }
        }
    }

  // article {
  //   padding-bottom: 3.5%;
  // }

  .flex {
    display:flex;
    align-items: center;
    margin-bottom: 4rem;
    flex-wrap:wrap;

    img {
      height: auto;
      width: 85px;
      margin-inline: 2em;
      margin-block:4em;
    }
    .uno {
      width: 80px;
      height: auto;

      
    }
    .dos {
      width: 85px;
      height: auto;
      margin-left: 132px;

      @media(max-width: 500px){
        margin-left: 0px;
      }
    }
    .tres {
      width: 180px;
      height: auto;
    }
    .cuatro {
      width: 100px;
      height: auto;
    }
    .cinco {
      width: 240px;
      height: auto;
    }
    .seis {
      width: 92px;
      height: auto;
    }
    .siete {
      width: 105px;
      height: auto;
    }
    .ocho {
      width: 155px;
      height: auto;
    }
    .nueve {
      // width: 155px;
      height: auto;
    }
    .diez {
      width: 175px;
      height: auto;
    }
    .once {
      width: 125px;
      height: auto;
    }
    .doce {
      width: 155px;
      height: auto;
    }
    .trece {
      width: 105px;
      height: auto;
    }
    .catorce {
      width: 235px;
      height: auto;
    }
    .quince {
      width: 175px;
      height: auto;
    }
   
  }

  a:hover {
    transform: scale(1.01)
  }

  .around {
    justify-content: space-around;

    @media (max-width: 664px){
      justify-content: center;
    }
  }

  .between {
    justify-content: space-between;

    @media (max-width: 664px){
      justify-content: center;
    }
  }

  // .bigger {
  //   width: 9vw;
  // }
  // img {
  //   width: 2.5vw;
  //   height: auto;
  // }

  // img.foto {
  //   width: 8vw;

  // }
  
  // img.foto.agrandar {
  //   width: 11vw;
  // }

  // img.foto.agrandar.bigger {
  //   width: 14vw;
  // }

  // img.foto.achicar {
  //     width: 6vw;

  // }

  .gris {
    filter: grayscale(1) brightness(0.6);
    transition: all 300ms ease;
    cursor:pointer;
  }

  .gris:hover {
    filter: grayscale(0) brightness(1);
  }

  .blanco {
    filter: brightness(0.1);
    transition: all 300ms ease;
  }

  .blanco:hover {
    filter: brightness(0.1);
  }

  img.raya {
    width: 3.5vw;
    height: 2.2vw;
    margin: auto;
    margin-left: -1em;
    margin-right: 1em;
  }

  .logo-footer{
    width: 10vw;
    z-index: 99;
    position: relative;
    top: -34px;

    @media (max-width: 944px){

      display:none
    }
  }

  .logo-mem{
    width: 11.1vw;
    /* margin-left: 1em;   
  }

  div {
    // padding-left: 2em;
    margin-right: 2em;
    color: #333;
    // margin-top: 6em;
   
  h4 {
    font-size: 0.7rem;
    margin: 0.5em 0;
    font-weight: normal;

  }  

  p { 
    font-size: .8rem;
    font-family: "Calibri", sans-serif;
    margin: 0;
    color: #646464;
    letter-spacing: .3px;
  } 
  }
`

const Iconos = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;


  & > a {
    margin-left: 2.4vw;
  }

  .youtube {
    width: 3vw;
    height: auto;
  }
`


/*
 <Linea2>
                <a href="http://catalogoafudec.udec.cl/" target="_blank">
                <img className="foto achicar gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-AFUDEC-b.png"></img>
                </a>
                <a href="http://www.archivohistoricoconcepcion.cl/" target="_blank">
                <img className="foto agrandar gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08.MHC-B.png"></img>
                </a>
                <a href="https://historiaarquitectonicaconcepcion.cl/?fbclid=IwAR0irT9yzrWgfSoCdCDuJ5RCVneYns1G9GQX4Vg-Ud4p2IalxL8FaJ3LGOA" target="_blank">
                <img className="foto agrandar gris bigger" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-H.A.C-B.png"></img>
                </a>
                <a href="http://proyectovermut.cl/" target="_blank">
                <img className="foto achicar gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-VERMUT-B.png"></img>
                </a>
                <a href="https://casadesalud.cl/" target="_blank">
                <img className="foto agrandar gris bigger" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-CDS-B.png"></img>
                </a>
              </Linea2>

              <Linea3>
                <a href="https://www.cclm.cl/cineteca-nacional-de-chile/" target="_blank">
                <img className="foto gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-CINETECA-A.png"></img>
                </a>
                <a href="http://cinetecavirtual.uchile.cl/" target="_blank">
                <img className="foto agrandar blanco bigger" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-CINETECA.U.CHILE-B.png"></img>
                </a>
                <a href="https://archivopatrimonial.usach.cl/" target="_blank">
                <img className="foto agrandar blanco bigger" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-ARCHIVO-PATRIMONIAL-B.png"></img>
                </a>
                <a href="http://archivofilmico.uc.cl/" target="_blank">
                <img className="foto agrandar blanco ultimos" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-CATOLICA-B.png"></img>
                </a>
                <a href="https://cinechile.cl/" target="_blank">
                <img className="foto agrandar gris ultimos" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-CINECHILE-B.png"></img>
                </a>
                <a href="" target="_blank">
                <img className="foto agrandar blanco ultimos" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-CINETECACL-B.png"></img>
                </a>
              </Linea3>  */



