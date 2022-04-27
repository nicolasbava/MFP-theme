import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const bordeModal = "#b7b7b7"

const fondoRosa = "#fbf0e5"

const PresentacionModal = ({state,actions}) => {


    // if(isMobileMenuOpen === true) {
        return ( 
            <>
                <MenuContainer>
                    
                    <NavLinks>
                        <Link href='/presentacion/territorio'><p onClick={actions.theme.setPlusContadorPresentacion}>{"> "}TERRITORIO</p></Link> 
                        <Link href='/presentacion/proyecto'><p onClick={actions.theme.setPlusContadorPresentacion}>{"> "}PROYECTO</p></Link> 
                        <Link href='/presentacion/equipo'><p onClick={actions.theme.setPlusContadorPresentacion}>{"> "}EQUIPO</p></Link> 
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
    top: 19px;
    left: 12px;
    z-index: 99;

`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;


    a {
        padding: 0
    }

    p {
        margin: 0;
        border: 1px solid ${bordeModal};
        width: 163px;
        padding: 0.3em 0.3em
    }
`

export default connect(PresentacionModal)