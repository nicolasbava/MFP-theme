import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const MenuModal = ({state,actions}) => {
    const {isMobileMenuOpen} = state.theme

    // if(isMobileMenuOpen === true) {
        return ( 
            <>
                <MenuContainer>
                    
                    <NavLinks>
                        <Link href='/peliculas'>PELICULAS</Link> 
                        <Link href='/noticias'>NOTICIAS</Link> 
                        <Link href='/artistas'>ARTISTAS</Link> 
                    </NavLinks>                
                </MenuContainer>
               
            
            </>
        )
    // } else {return null}

    
}

const MenuContainer = styled.div`
    background: rgba(0,0,0,.5);
    color:white;
    position:relative;

    top:0;
    left:0;
    z-index: 99;

    @media (min-width: 600px){

        &{
            display:none
        }
    }
`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;
    padding-left: 1em;
    flex-direction: column;
    padding-top: 1em;
    text-align: left;
    padding-bottom: 1em;
`

export default connect(MenuModal)