import React from "react"
import {connect, Global, css, styled} from "frontity"
import Link from "../components/Link"

const LinksDeInteres = ({state}) => {
   

   

    return (
        <Contenedor>
            
                <Linea2>
                <a href="http://catalogoafudec.udec.cl/" target="_blank">
                <img className="foto achicar gris" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/07-AFUDEC-b.png"></img>
                </a>
                <a href="http://www.archivohistoricoconcepcion.cl/" target="_blank">
                <img className="foto agrandar gris" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/08.MHC-B.png"></img>
                </a>
                <a href="https://historiaarquitectonicaconcepcion.cl/?fbclid=IwAR0irT9yzrWgfSoCdCDuJ5RCVneYns1G9GQX4Vg-Ud4p2IalxL8FaJ3LGOA" target="_blank">
                <img className="foto agrandar gris bigger" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/09-H.A.C-B.png"></img>
                </a>
                <a href="http://proyectovermut.cl/" target="_blank">
                <img className="foto achicar gris" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/10-VERMUT-B.png"></img>
                </a>
                <a href="https://casadesalud.cl/" target="_blank">
                <img className="foto agrandar gris bigger" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/11-CDS-B.png"></img>
                </a>
              </Linea2>

              <Linea3>
                <a href="https://www.cclm.cl/cineteca-nacional-de-chile/" target="_blank">
                <img className="foto gris" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/12-CINETECA-A.png"></img>
                </a>
                <a href="http://cinetecavirtual.uchile.cl/" target="_blank">
                <img className="foto agrandar blanco bigger" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/13-CINETECA.U.CHILE-B.png"></img>
                </a>
                <a href="https://archivopatrimonial.usach.cl/" target="_blank">
                <img className="foto agrandar blanco bigger" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/14-ARCHIVO-PATRIMONIAL-B.png"></img>
                </a>
                <a href="http://archivofilmico.uc.cl/" target="_blank">
                <img className="foto agrandar blanco ultimos" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/15-CATOLICA-B.png"></img>
                </a>
                <a href="https://cinechile.cl/" target="_blank">
                <img className="foto agrandar gris ultimos" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/16-CINECHILE-B.png"></img>
                </a>
                <a href="" target="_blank">
                <img className="foto agrandar blanco ultimos" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/17-CINETECACL-B.png"></img>
                </a>
              </Linea3> 


            
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
    padding: 7% ; 
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 186px)
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;



  .bigger {
    width: 9vw;
  }

  a:hover {
    transform: scale(1.01)
  }

  img {
    width: 2.5vw;
    height: auto;
  }

  img.foto {
    width: 8vw;

  }
  
  img.foto.agrandar {
    width: 11vw;
  }

  img.foto.agrandar.bigger {
    width: 14vw;
  }

  img.foto.achicar {
      width: 6vw;

  }

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
