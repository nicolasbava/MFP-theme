import React from "react"
import {connect, styled} from "frontity"
import Link from "./Link"
import MenuButton from "./MenuButton"
import FichaLink from "./FichaLink"



// ESTILOS CSS
const HeaderContenedor = styled.section`
    padding: 2.5em 7% 1em 7%;

`

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .8rem

    
`
const Logo = styled.div`
    width: 20%

`

const Nav = styled.nav`
    display: flex; 
    justify-content: space-between;

    & a {
        padding-left: 1em
    }

    @media (max-width: 600px){
        display:none
    }
`

// RENDER
const Header = () => {
    return (
       <HeaderContenedor>
            <Contenedor>
                <Logo>
                    <Link href='/peliculas'>{">"}INICIO</Link> 
                </Logo>
                <Nav>
                   
                   <Link>PRESENTACION</Link>                    
                   <Link href='/noticias'>NOTICIAS</Link> 
                   <Link href='/peliculas'>CATALOGO</Link> 
                   <Link href='/articulos'>ARTICULOS</Link> 


                    
                    {/* <Link href='/productoras'>PRODUCTORAS</Link> */}
                    <FichaLink link='/mapa'>MAPA INTERACTIVO</FichaLink>
                </Nav>
                <MenuButton />
            </Contenedor>
            
            
        </HeaderContenedor>
    )

}

export default connect(Header)

const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    visibility: collapse;

    .hover:hover & {
        display: block
    }
`
