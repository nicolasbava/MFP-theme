import React from "react"
import {connect, styled} from "frontity"
import Link from "./Link"



// ESTILOS CSS
const HeaderContenedor = styled.section`

    padding: 1em 7% 1em 7%;

`

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    width: 60%

`

const Nav = styled.nav`
    display: flex; 
    justify-content: space-between;

    & a {
        padding-left: 1em
    }
`

// RENDER
const Header = () => {
    return (
       <HeaderContenedor>
        <Contenedor>
            <Logo>
                <Link href='/'>INICIO</Link> 
            </Logo>
            <Nav>
                <Link href='/peliculas'>PELICULAS</Link> 
                <Link href='/noticias'>NOTICIAS</Link> 
                <Link href='/artistas'>ARTISTAS</Link> 
            </Nav>
        </Contenedor>
            
            
        </HeaderContenedor>
    )

}

export default connect(Header)
