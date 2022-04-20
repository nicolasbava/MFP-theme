import { connect, styled } from "frontity";
import Link from "./link";
import Item from "./list/list-item";



const Footer = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const postType = data.type;

  return (
    <>
      {postType === "peliculas" && (
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
              <span>>></span>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
              <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/icons8-instagram-240.png"></img>
            </div>
          </FooterPeliculas>
        </AnteRaya>
      )}
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
  height: 5px;
  position: absolute;
  right: 0;
`

const FooterPeliculas = styled.div`
  background-color: #ec7342;

  img{
    width: 15%;
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

