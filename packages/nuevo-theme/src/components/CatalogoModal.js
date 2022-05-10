import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const bordeModal = "#b7b7b7"

const fondoRosa = "#fbf0e5"

const CatalogoModal = ({state,actions}) => {


    // if(isMobileMenuOpen === true) {
        return ( 
            <>
                <MenuContainer>
                    
                    <NavLinks>
                        
                        <Link href='/peliculas'><p onClick={actions.theme.setPlusContadorCatalogo}>{"> "}PELÍCULAS</p></Link> 
                        <Link href='/artistas'><p onClick={actions.theme.setPlusContadorCatalogo}>{"> "}ARTISTAS</p></Link> 
                        <Link href='/productoras'><p onClick={actions.theme.setPlusContadorCatalogo}>{"> "}PRODUCTORAS</p></Link> 
                    </NavLinks>                
                </MenuContainer>
               
            
            </>
        )
    // } else {return null}

    
}



const MenuContainer = styled.div`
    background: ${fondoRosa};
    color: white;
    position: absolute;
    top: 15px;
    left: 39px;
    z-index: 99;

`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;


    a {
        padding: 0;

    }

    p {
        margin: 0;
        border: 1px solid ${bordeModal};
        width: 163px;
        padding: 0.3em 0.3em
    }
`

export default connect(CatalogoModal)