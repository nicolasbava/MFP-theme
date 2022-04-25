import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const MenuModal = ({state,actions}) => {
    return ( 
        <>
            <MenuContainer>
                <button>CERRAR</button>
                <NavLinks>
                    <Link href='/peliculas'>PELICULAS</Link> 
                    <Link href='/noticias'>NOTICIAS</Link> 
                    <Link href='/artistas'>ARTISTAS</Link> 
                </NavLinks>                
            </MenuContainer>
        
        </>
    )
}

const MenuContainer = styled.div`
    background: rgba(0,0,0,.5);
    color:white;
    position:fixed;

    width: 100vw;
    height:100vh;
    top:0;
    left:0;
    z-index: 99;
`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`

export default connect(MenuModal)