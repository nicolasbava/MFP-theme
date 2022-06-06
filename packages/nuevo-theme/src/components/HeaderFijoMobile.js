
import { useEffect, useState } from "react";
import {connect, Global, styled} from "frontity"
import Header from "./Header";
import Raya from "./Raya";
import HeaderMobile from "./HeaderMobile";
import MenuModal from "./MenuModal";


export const EdgeButton = styled.div`    
    position: fixed;
    top: 0;
    
    width: 100%;
    // height: 2.5rem;
    background-color: #FBF0E5;
    border: none;
    // font-size: 1rem;
    // color: ${p => p.color};
    // font-weight: 700;
    z-index: 99;


`;


const HeaderFijoMobile = ({state, actions,children, color}) => {
    const [isVisible, setIsVisible] = useState(true);

   

    // // Top: 0 takes us all the way back to the top of the page
    // // Behavior: smooth keeps it smooth!
    // const scrollToTop = () => {
    //   window.scrollTo({
    //     top: 0,
    //     // behavior: "smooth"
    //   });
    // };
  
    // useEffect(() => {
    //   // Button is displayed after scrolling for 302 pixels
    //   const toggleVisibility = () => {
       
    //       setIsVisible(true);
        
    //   };
  
    //   window.addEventListener("scroll", toggleVisibility);
  
    //   return () => window.removeEventListener("scroll", toggleVisibility);
    //   // onClick={scrollToTop}
    // }, []);

    return (  
      <>
        {isVisible && (
          <EdgeButton color={color} >
            {children}
            <HeaderMobile />
            <Raya />
            {state.theme.contadorMobile % 2 !== 0 && <MenuModal />}

          </EdgeButton>
        )}
        
      </>
    );
}
 
export default connect(HeaderFijoMobile);