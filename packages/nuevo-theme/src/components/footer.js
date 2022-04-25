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
            <div>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/CAMARA-MAN.png"></img>
            </div>
            <div>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/01-LOGO_COLOR-FONDO.png"></img>
            </div>
            <div>
              <h4>¿QUIÉNES SOMOS?</h4>
              <p>A theme is the foundation for the complete design of a website. This includes things like typography, color palettes, headers and footers, backgrounds, and page layouts.</p>
            </div>
            <div>
              <span>{">>"}</span>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
            </div>
          </FooterPeliculas>
        </AnteRaya>

      <Container>
            <p>DESARROLLADO POR ROJOLAB STUDIO</p>        
      </Container>


    </>
  );
};


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const AnteRaya = styled.div`
  position: relative;

`

const Raya = styled.div`
height: 2px;
position: absolute;
right: 0;
left: 26%;
background: #3939394f;
top: 42px;
border-radius: 2px;
`

const FooterPeliculas = styled.div`
  background-color: #f5ebda;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;


  img {
    width: 3.5vw;
  }

  .logo-footer{
    padding-left: 1em;
    width: 12vw;
    z-index: 99;
    position: relative;
    top: 21px;
  }

  .logo-mem{
    width: 13vw;

margin-top: 1em;
margin-left: -1em;
  
  }

  div {
    padding-left: 1em;
    margin-right: 2em;
    color: #333;

  p { 
    font-size: .7rem;
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
  font-size: .8rem;

  p::before {
      content:">"   
  }
`;

