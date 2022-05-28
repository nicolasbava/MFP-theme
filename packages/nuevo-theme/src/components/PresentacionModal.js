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
                    
                    <NavLinks onMouseLeave={actions.theme.setPlusContadorPresentacion}>
                        <Link href='/territorio'><p className="krona" onClick={actions.theme.setPlusContadorPresentacion}>{"> "}TERRITORIO</p></Link> 
                        <Link href='/proyecto'><p className="krona" onClick={actions.theme.setPlusContadorPresentacion}>{"> "}PROYECTO</p></Link> 
                        <Link href='/equipo'><p className="krona" onClick={actions.theme.setPlusContadorPresentacion}>{"> "}EQUIPO</p></Link> 
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
    left: 39px;
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