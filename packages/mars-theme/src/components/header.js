import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";


const Header = ({ state }) => {
  return (
    <>
    
      <Container>
        <StyledLink link="/">
          {/* <Title> */}
            <img src={logo} alt="" height="150"/>
          {/* </Title> */}
        </StyledLink>
        <MobileMenu />
      </Container>
      <Description>CATÁLOGO FÍLMICO PENCOPOLITANO</Description>

    </>
  );
};


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

let logo = 'http://localhost/memoriaFilmica/wp-content/uploads/2022/04/Logo-contraste1.png';

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
    

`;

const Title = styled.img`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 1);
  background-color: #00A897;
  padding: .1em .2em;
  margin-right: 7%;
  opacity: 0; 
  @media(min-width: 696px){
    opacity: 1; 
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

