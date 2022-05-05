import { connect, styled } from "frontity";

// import Item from "./list/list-item";

const anaranjado = "#f9672d"

const Footer = () => {
  // const data = state.source.get(state.router.link);
  // const post = state.source[data.type][data.id];
  // const postType = data.type;

  return (
    <>

      <AnteRaya>

          <FooterPeliculas>

            <Linea1>

                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/CAMARA-MAN.png" className="logo-footer"></img>
                
                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/01-LOGO_COLOR-FONDO.png" className="logo-mem"></img>
                
                <Iconos>
                  <img className="raya" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/FLECHITAS.png"></img>
                  
                  <a href="https://www.youtube.com/channel/UCcCPD7ziLSWwc_tqyn_hL5w" target="_blank"> 
                    <img className="youtube" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/01-YOUTUBE-A.png"></img>
                  </a>
                  <a href="https://www.facebook.com/memoriafilmicapencopolitana" target="_blank"> 
                    <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/02-FACEBOOK-A.png"></img>
                  </a>
                  <a href="https://www.instagram.com/memoriafilmica/" target="_blank"> 
                    <img src="http://memoriafilmica.cl/wp-content/uploads/2022/04/03-INSTAGRAM-A.png"></img>
                  </a>                  
                </Iconos>
                <a href=""> 
                <img className="foto" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/04-M.CONCE-A.png"></img>
                </a>

                <a>
                <img className="foto" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/05-FAAIC-A.png"></img>
                </a>
                <a>
                <img className="foto" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/06-CC-A.png"></img>
                </a>
              </Linea1>

              <Linea2>
                <a href="http://catalogoafudec.udec.cl/" target="_blank">
                <img className="foto achicar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/07-AFUDEC-A.png"></img>
                </a>
                <a href="http://www.archivohistoricoconcepcion.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/08.MHC-A.png"></img>
                </a>
                <a href="https://historiaarquitectonicaconcepcion.cl/?fbclid=IwAR0irT9yzrWgfSoCdCDuJ5RCVneYns1G9GQX4Vg-Ud4p2IalxL8FaJ3LGOA" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/09-H.A.C-A.png"></img>
                </a>
                <a href="http://proyectovermut.cl/" target="_blank">
                <img className="foto achicar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/10-VERMUT-A.png"></img>
                </a>
                <a href="https://casadesalud.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/11-CDS-A.png"></img>
                </a>
              </Linea2>

              <Linea3>
                <a href="https://www.cclm.cl/cineteca-nacional-de-chile/" target="_blank">
                <img className="foto" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/12-CINETECA-A.png"></img>
                </a>
                <a href="http://cinetecavirtual.uchile.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/13-CINETECA.U.CHILE-A.png"></img>
                </a>
                <a href="https://archivopatrimonial.usach.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/14-ARCHIVO-PATRIMONIAL-A.png"></img>
                </a>
                <a href="http://archivofilmico.uc.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/15-CATOLICA-A.png"></img>
                </a>
                <a href="https://cinechile.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/16-CINECHILE-A.png"></img>
                </a>
                <a href="https://cinechile.cl/" target="_blank">
                <img className="foto agrandar" src="http://memoriafilmica.cl/wp-content/uploads/2022/04/17-CINETECACL-A.png"></img>
                </a>
              </Linea3>


            
          </FooterPeliculas>
        </AnteRaya>

      <Container>
        <p>MEMORIAFILMICAPENCOPOLITANA@GMAIL.COM</p>
        <p className="rojolab">DESARROLLADO POR <a href="https://www.behance.net/ROJOLAB" target="_blank">ROJOLAB</a></p>        
      </Container>


    </>
  );
};


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);




const Linea1 = styled.section`
  flex-wrap:wrap;
  display:flex;
  align-items: center;
  justify-content: space-between;
  // padding-bottom: 2em;

  @media (max-width: 944px){
    & {
  padding-top: 2em; 
  padding-bottom: 2em;
    }
  }
`

const Linea2 = styled.section`
  display:flex;
  flex-wrap:wrap;
  align-items: center;
  padding-bottom: 4em;
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

  @media (max-width: 944px){
    & {
      padding-bottom: 4em;
    }
  }
`


const AnteRaya = styled.div`
  position: relative;

`

const Raya = styled.div`
  height: 1px;
  position: absolute;
  right: 0;
  left: 26%;
  background: #3939394f;
  top: 125px;
  border-radius: 2px;
`

const FooterPeliculas = styled.div`
  background-color: ${anaranjado};
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 186px)
  align-items: center;
  padding-left: 6%;
  padding-right: 7%;

  a:hover {
    transform: scale(1.01)
  }

  img {
    width: 2.9vw;
    height: auto;
  }

  img.foto {
    width: 8vw;
    margin-left: 1em;
  }
  
  img.foto.agrandar {
    width: 11vw;
  }

  img.foto.achicar {
      width: 7vw;

  }

  img.raya {
    width: 4vw;
    height: 2.7vw;
    margin: auto;
  }

  .logo-footer{
    padding-left: 1em;
    width: 14vw;
    z-index: 99;
    position: relative;
    top: -57px;

    @media (max-width: 944px){

      display:none
    }
  }

  .logo-mem{
    width: 13vw;
    // margin-top: 7em;
    margin-left: 1em;
  
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

  img {
    margin-left: 1vw;
  }


  .youtube {
    width: 3.4vw;
    height: auto;
  }
`

const Container = styled.div`
  // width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  background-color: #333;
  padding-right: 6.7%;
  padding-left: 7%;
  padding-block: 0.3%;
  text-align: right;
  font-size: .5rem;
  display: flex; 
  justify-content: space-between; 
  align-items: center;

  .rojolab {
    text-align: right;
  }

  a {color: white}

  p::before {
      content:"> "   
  }
`;

