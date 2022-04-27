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
                        <p>{">"}PRESENTACIÓN</p>
                        <Padding>
                            <Link href='/presentacion/territorio'>· TERRITORIO</Link> 
                            <Link href='/presentacion/proyecto'>· PROYECTO</Link> 
                            <Link href='/presentacion/equipo'>· EQUIPO</Link> 
                        </Padding>
                        <Link href='/noticias'>{">"}NOTICIAS</Link>
                        <p>{">"}CATÁLOGO</p>
                        <Padding>
                            <Link href='/peliculas'>· PELICULAS</Link> 
                            <Link href='/noticias'>· NOTICIAS</Link> 
                            <Link href='/artistas'>· ARTISTAS</Link> 
                        </Padding>
                        <Link href='/mapa'>{">"}MAPA</Link>
                        <Link href='/contacto'>{">"}CONTACTO</Link>

                        
                    </NavLinks>                
                </MenuContainer>
               
            
            </>
        )
    // } else {return null}

    
}

const Padding = styled.div`
    padding-left: 2em;
    display: flex;
    flex-direction:column;
    margin-bottom: .5em;

    a {
        margin-bottom: .3em;
    }
`

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

    p {
        color: #333;
        margin: .2em 0;
    }
`

export default connect(MenuModal)