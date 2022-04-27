import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const PresentacionModal = ({state,actions}) => {


    // if(isMobileMenuOpen === true) {
        return ( 
            <>
                <MenuContainer>
                    
                    <NavLinks>
                        <Link href='/presentacion/territorio'><p onClick={actions.theme.setPlusContadorPresentacion}>TERRITORIO</p></Link> 
                        <Link href='/presentacion/proyecto'><p onClick={actions.theme.setPlusContadorPresentacion}>PROYECTO</p></Link> 
                        <Link href='/presentacion/equipo'><p onClick={actions.theme.setPlusContadorPresentacion}>EQUIPO</p></Link> 
                    </NavLinks>                
                </MenuContainer>
               
            
            </>
        )
    // } else {return null}

    
}



const MenuContainer = styled.div`
    background: #fbf0e5;
    color: white;
    position: absolute;
    top: 19px;
    left: 13px;
    z-index: 99;
`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;

    flex-direction: column;
    padding-top: .3em;
    padding-bottom: .3em;
    border: 2px solid rgba(0,0,0,.3);
    padding-right: 1em;
    // padding-left: .2em;

    p {
        margin: 0;
    }
`

export default connect(PresentacionModal)