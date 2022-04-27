import { connect, styled } from "frontity";
import Link from "./link";
// import Item from "./list/list-item";



const Footer = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const postType = data.type;

  return (
    <>

<AnteRaya>
          <Raya></Raya>
          <FooterPeliculas>
            <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/CAMARA-MAN.png" className="logo-footer"></img>
            
            <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/01-LOGO_COLOR-FONDO.png" className="logo-mem"></img>
            
            <div>
              <h4>¿QUIÉNES SOMOS?</h4>
              <p>Memoria Fílmica Pencopolitana es un colectivo de investigación y difusión del patrimonio audiovisual pencopolitano, dedicado al rescate y puesta en valor del patrimonio universal local.</p>
            </div>
            <Iconos>
              <span>{">>"}</span>
              <a href="https://google.com" target="_blank"> 
                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              </a>
              <a href="https://google.com" target="_blank"> 
                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              </a>
              <a href="https://google.com" target="_blank"> 
                <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              </a>
              
            </Iconos>
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
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;


  img {
    width: 3.5vw;
    height: auto;
  }

  .logo-footer{
    padding-left: 1em;
    width: 14vw;
    z-index: 99;
    position: relative;
    top: 21px;
  }

  .logo-mem{
    width: 13vw;
    margin-top: 7em;
    margin-left: 1em;
  
  }

  div {
    padding-left: 2em;
    margin-right: 2em;
    color: #333;
    margin-top: 6em;
   
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

  span { 
    font-size: 2.5rem;
    color: black;
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

