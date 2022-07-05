import { connect, styled } from "frontity";
import Link from "./Link";
// import MobileMenu from "./menu";

let brakepoint = '880px'


const UpHeader = ({ state }) => {
  const logo = "http://web.memoriafilmica.cl/wp-content/uploads/2022/05/Logo.png";


  let arrayBackgrounds = [   
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/23-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/22-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/21-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/20-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/19-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/18-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/23-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/22-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/21-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/20-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/19-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/18-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/23-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/22-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/21-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/20-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/19-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/18-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/23-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/22-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/21-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/20-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/19-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/18-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/10-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/09-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/08-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/07-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/05-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/04-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-3556X900png.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/23-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/22-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/21-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/20-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/19-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/18-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/17-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/15-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/12-3556X900.png')",
    "url('http://web.memoriafilmica.cl/wp-content/uploads/2022/04/11-3556X900.png')"

    
  ];
  
  
  
  const time = new Date().getTime();
  
  const lastNumber = String(time).slice(-2)
  
  let background = arrayBackgrounds[lastNumber];


  return (
    <>
    <HeadContainer  style={{backgroundImage:`${background}`}} >

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

