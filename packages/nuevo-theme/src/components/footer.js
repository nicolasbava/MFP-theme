import { connect, styled } from "frontity";

// import Item from "./list/list-item";



const Footer = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const postType = data.type;

  return (
    <>

<AnteRaya>

          <FooterPeliculas>

            <Linea1>

                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/CAMARA-MAN.png" className="logo-footer"></img>
                
                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/01-LOGO_COLOR-FONDO.png" className="logo-mem"></img>
                
                <Iconos>
                  <img className="raya" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/FLECHITAS.png"></img>
                  
                  <a href="https://google.com" target="_blank"> 
                    <img className="youtube" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-YOUTUBE-A.png"></img>
                  </a>
                  <a href="https://google.com" target="_blank"> 
                    <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-FACEBOOK-A.png"></img>
                  </a>
                  <a href="https://google.com" target="_blank"> 
                    <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/03-INSTAGRAM-A.png"></img>
                  </a>                  
                </Iconos>

                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-M.CONCE-A.png"></img>

                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-FAAIC-A.png"></img>

                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-CC-A.png"></img>
              
              </Linea1>

              <Linea2>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-AFUDEC-A.png"></img>

                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08.MHC-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-H.A.C-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-VERMUT-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-CDS-A.png"></img>
   
              </Linea2>

              <Linea3>

                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-CINETECA-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-CINETECA.U.CHILE-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-ARCHIVO-PATRIMONIAL-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-CATOLICA-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-CINECHILE-A.png"></img>
                <img className="foto" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-CINETECACL-A.png"></img>

              </Linea3>


            
          </FooterPeliculas>
        </AnteRaya>

      <Container>
            <p>DESARROLLADO POR ROJOLAB STUDIO</p>        
      </Container>


    </>
  );
};

const FooterBasico = () => {
  return (
    <Container>
      <p>DESARROLLADO POR <Rojolab href="https://www.behance.net/ROJOLAB">ROJOLAB</Rojolab>STUDIO</p>        
    </Container>
  )

}


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);
export {FooterBasico}



const Linea1 = styled.section`
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Linea2 = styled.section`
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Linea3 = styled.section`
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Rojolab = styled.a`

  &:hover {
    color: red;
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
  background-color: #EC7342;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 186px)
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;


  img {
    width: 3.5vw;
    height: auto;
  }

  img.foto {
    width: 8vw;
  }

  img.raya {
    width: 5vw;
    height: auto;
  }

  .logo-footer{
    padding-left: 1em;
    width: 14vw;
    z-index: 99;
    position: relative;
    top: -57px;
  }

  .logo-mem{
    width: 13vw;
    // margin-top: 7em;
    margin-left: 1em;
  
  }

  div {
    padding-left: 2em;
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
    width: 4.4vw;
  }
`

const Container = styled.div`
  // width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  background-color: #ec7342;
  padding-right: 7%;
  padding-block: 0.3%;
  text-align: right;
  font-size: .5rem;

  p::before {
      content:"> "   
  }
`;

