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
                <img src="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/CAMARA-MAN.png" className="logo-footer"></img>
                <a>
                  <img src="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-LOGO_COLOR-FONDO.png" className="logo-mem"></img>
                </a>
                <Iconos>
                  <img className="raya blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/FLECHITAS.png"></img>
                  
                  <a href="https://www.youtube.com/channel/UCcCPD7ziLSWwc_tqyn_hL5w" target="_blank"> 
                    <img className="youtube blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-YOUTUBE-B.png"></img>
                  </a>
                  <a href="https://www.facebook.com/memoriafilmicapencopolitana" target="_blank"> 
                    <img className="blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-FACEBOOK-B.png"></img>
                  </a>
                  <a href="https://www.instagram.com/memoriafilmica/" target="_blank"> 
                    <img className="blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/03-INSTAGRAM-B.png"></img>
                  </a>  
                </Iconos>
                <div className="raya2"></div>

                <a> 
                <img className="foto gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-M.CONCE-b.png"></img>
                </a>

                <a>
                <img className="foto gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-FAAIC-B.png"></img>
                </a>
                <a>
                <img className="foto gris" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/06/06-CC-A.png"></img>
                </a>
              </Linea1>

            
          </FooterPeliculas>
        </AnteRaya>

      <Container>
        <p>{'> '}MEMORIAFILMICAPENCOPOLITANA@GMAIL.COM</p>
    
        <p className="rojolab">{'> '}DESARROLLADO POR  <a href="https://www.behance.net/ROJOLAB" target="_blank">ROJOLAB</a>     </p>  
     
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



  .raya2 {
    height: 5vw;
    width: 2px;
    background: #00000052;
    position: relative;
    top: 0;
    border-radius: 6px;
    // left: -10px;
  }

  @media (max-width: 944px){
    .raya2 {display:none}

    & {
  padding-top: 2em; 
  padding-bottom: 2em;
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
    // margin-left: 1em;

    // @media (max-width: 944px){
    //   width: 13vw;
    // }
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
    filter: brightness(1);
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
  font-size: 'Krona One';
  flex-wrap: wrap;

  p {
    margin: 1em 0;
    FONT-SIZE: 0.5rem;
    font-family: 'Krona One';
  }

  .rojolab {
    text-align: right;
  }

  a {color: white}

  a:hover {
    color: #ff946a;
  }

  @media(max-width: 325px){
    p {
      font-size: .3rem;
    }
  }
`;
