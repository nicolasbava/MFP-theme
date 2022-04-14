import { connect, styled } from "frontity";
import Link from "./link";



const Footer = ({ state }) => {
  return (
    <>
    
      <Container>
            <p>DESARROLLADO POR ROJOLAB STUDIO</p>        
      </Container>


    </>
  );
};


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);



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

