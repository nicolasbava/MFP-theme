import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

const MenuModal = () => {
    return ( 
        <>
            <MenuContainer>
                <button>CERRAR</button>
                <nav>
                    <Link href='/peliculas'>PELICULAS</Link> 
                    <Link href='/noticias'>NOTICIAS</Link> 
                    <Link href='/artistas'>ARTISTAS</Link> 
                </nav>                
            </MenuContainer>
        
        </>
    )
}

const MenuContainer = styled.div`
    background: rgba(0,0,0,.5);
    color:white;
    position:fixed;
    position: relative;
    width: 100vw;
    height:100vh;
    top:0;
    left:0;
    z-index: 99;
`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    displat:flex;
    alight-items:center;
    justify-content: center
`

export default connect(MenuModal)