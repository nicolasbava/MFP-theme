import { connect, styled } from "frontity";
import Link from "./Link";
// import MobileMenu from "./menu";

import banner1 from '../img/banner/comp/01.jpg'
import banner2 from '../img/banner/comp/02.jpg'
import banner3 from '../img/banner/comp/03.jpg'
import banner4 from '../img/banner/comp/04.jpg'
import banner5 from '../img/banner/comp/05.jpg'
import banner6 from '../img/banner/comp/06.jpg'
import banner7 from '../img/banner/comp/07.jpg'
import banner8 from '../img/banner/comp/08.jpg'
import banner9 from '../img/banner/comp/09.jpg'
import banner10 from '../img/banner/comp/10.jpg'
import banner11 from '../img/banner/comp/11.jpg'
import banner12 from '../img/banner/comp/12.jpg'
import banner13 from '../img/banner/comp/13.jpg'
import banner14 from '../img/banner/comp/14.jpg'
import banner15 from '../img/banner/comp/15.jpg'
import banner16 from '../img/banner/comp/16.jpg'
import banner17 from '../img/banner/comp/17.jpg'
import banner18 from '../img/banner/comp/18.jpg'
import banner19 from '../img/banner/comp/19.jpg'
import banner20 from '../img/banner/comp/20.jpg'
import banner21 from '../img/banner/comp/21.jpg'
import banner22 from '../img/banner/comp/22.jpg'
import banner23 from '../img/banner/comp/23.jpg'



let brakepoint = '880px'


const UpHeader = ({ state }) => {
  const logo = "http://web.memoriafilmica.cl/wp-content/uploads/2022/05/Logo.png";


  let arrayBackgrounds = [   
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`,
    `url(${banner5})`,
    `url(${banner6})`,
    `url(${banner7})`,
    `url(${banner8})`,
    `url(${banner9})`,
    `url(${banner10})`,
    `url(${banner11})`,
    `url(${banner12})`,
    `url(${banner13})`,
    `url(${banner14})`,
    `url(${banner15})`,
    `url(${banner16})`,
    `url(${banner17})`,
    `url(${banner18})`,
    `url(${banner19})`,
    `url(${banner20})`,
    `url(${banner21})`,
    `url(${banner22})`,
    `url(${banner23})`,
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`,
    `url(${banner5})`,
    `url(${banner6})`,
    `url(${banner7})`,
    `url(${banner8})`,
    `url(${banner9})`,
    `url(${banner10})`,
    `url(${banner11})`,
    `url(${banner12})`,
    `url(${banner13})`,
    `url(${banner14})`,
    `url(${banner15})`,
    `url(${banner16})`,
    `url(${banner17})`,
    `url(${banner18})`,
    `url(${banner19})`,
    `url(${banner20})`,
    `url(${banner21})`,
    `url(${banner22})`,
    `url(${banner23})`,
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`,
    `url(${banner5})`,
    `url(${banner6})`,
    `url(${banner7})`,
    `url(${banner8})`,
    `url(${banner9})`,
    `url(${banner10})`,
    `url(${banner11})`,
    `url(${banner12})`,
    `url(${banner13})`,
    `url(${banner14})`,
    `url(${banner15})`,
    `url(${banner16})`,
    `url(${banner17})`,
    `url(${banner18})`,
    `url(${banner19})`,
    `url(${banner20})`,
    `url(${banner21})`,
    `url(${banner22})`,
    `url(${banner23})`,
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`,
    `url(${banner5})`,
    `url(${banner6})`,
    `url(${banner7})`,
    `url(${banner8})`,
    `url(${banner9})`,
    `url(${banner10})`,
    `url(${banner11})`,
    `url(${banner12})`,
    `url(${banner13})`,
    `url(${banner14})`,
    `url(${banner15})`,
    `url(${banner16})`,
    `url(${banner17})`,
    `url(${banner18})`,
    `url(${banner19})`,
    `url(${banner20})`,
    `url(${banner21})`,
    `url(${banner22})`,
    `url(${banner23})`,
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`,
    `url(${banner5})`,
    `url(${banner6})`,
    `url(${banner7})`,
    `url(${banner8})`,
    `url(${banner9})`,
    `url(${banner10})`  
       
  ];
  
  
  
  const time = new Date().getTime();
  
  const lastNumber = +String(time).slice(-2)
  
  let background = arrayBackgrounds[lastNumber];

  console.log('NUMERO==', lastNumber);


  return (
    <>
    <HeadContainer  style={{backgroundImage:`${background}`}} >
    {/* <HeadContainer  style={{backgroundImage:`url(${banner1})`}} > */}

        <Container>
          <StyledLink href="/peliculas">
            {/* <Title> */}
              <img src={logo} alt="" height="150"/>
            {/* </Title> */}
          </StyledLink>
          {/* <MobileMenu /> */}
        </Container>
        
        <Description>ENCICLOPEDIA VIRTUAL</Description>
      
    </HeadContainer>

    </>
  );
};


// Connect the Header component to get access to the `state` in it's `props`
export default connect(UpHeader);




const HeadContainer = styled.div`

  display: flex;
  align-items: center;
  background-blend-mode: multiply;
  transition: 500ms ease;
  background: rgba(0,0,0,0.5) no-repeat left center;
  background-size: cover;
  justify-content: space-between;
  font-weight: normal;

  @media (max-width: ${brakepoint}){
    & {
      display: none
    }
  }
`;

const Container = styled.div`
  // width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 7%;
  padding-block: 5.5%;
    
  & img {
    transition: 250ms ease-in-out;
}

& img:hover {
    transform: scale(1.01)
}

`;


const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 1);
  background-color: #00A897;
  padding: .1em .2em;
  margin-right: 7%;
  opacity: 0; 
  font-weight: normal;
  font-size: 1rem;
  
  @media(min-width: ${brakepoint}){
    opacity: 1; 
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;


`;

