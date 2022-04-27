import React from "react"
import {connect, styled} from "frontity"
import Link from "./Link"
import MenuButton from "./MenuButton"
import FichaLink from "./FichaLink"
import MenuModal from "./MenuModal"
import { CloseIcon, HamburgerIcon } from "./menu-icon"
import PresentacionModal from "./PresentacionModal"
import CatalogoModal from "./CatalogoModal"

const naranja = "#EC7342"
const fondoSeleccionado = "#f5e1c8;"
const bordeModal = "#b7b7b7"
const logo = 'https://memoriafilmica.cl/wp-content/uploads/2022/04/Logo-contraste1.png';

// ESTILOS CSS
const HeaderContenedor = styled.section`
    padding: 1em 7% 1em 7%;
    
    @media (max-widht:600px) {
        padding: 1em 7% 1em 7%;

    }

    @media (max-width: 600px){

        &{
            background: #ff743d


        }
    }
`

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    align-items: center;    

    .img {
        width: 147px;
        height: auto;
        
        @media (min-width: 600px) {
            display: none
        }
    }
`
const Logo = styled.div`


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
const Header = ({state,actions}) => {
    return (
       <HeaderContenedor>
            <Contenedor>
                <Logo>
                    <Link href='/peliculas'>{">"}INICIO</Link> 
                </Logo>
                <img className="img" src={logo}></img>
                <Nav>
                   <Relative>
                        
                            {state.theme.contadorPresentacion % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN</Presentacion>}                       
                            {state.theme.contadorPresentacion % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN</Presentacion2>}
                                          
                        {state.theme.contadorPresentacion % 2 !== 0 && <PresentacionModal />}                       
                   </Relative>

                   <Link href='/noticias'>NOTICIAS</Link> 

                   <RelativeCatalogo>
                        {state.theme.contadorCatalogo % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO</Presentacion>}
                        {state.theme.contadorCatalogo % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO</Presentacion2>}

                        {state.theme.contadorCatalogo % 2 !== 0 && <CatalogoModal />}                       
                        
                        
                        

                   </RelativeCatalogo>
                   
                    {/* <Link href='/productoras'>PRODUCTORAS</Link> */}
                    <FichaLink link='/mapa'>MAPA</FichaLink>
                    <Link href='/articulos'>CONTACTO</Link> 
                </Nav>
            <MenuButton />



            </Contenedor>
            
        </HeaderContenedor>
    )

}

export default connect(Header)

const Presentacion = styled.span`
    background: ${fondoSeleccionado};
    cursor: pointer;
    border: 0.3px solid ${bordeModal};
    /* border-radius: 2px; */
    padding: 0.1em 0.2em;
    margin-left: 1em;

    span:hover {
        color: #EC7342
    }
`
const Presentacion2 = styled.span`
    margin-left: 1em;
    cursor: pointer;
    padding: .1em .2em;
    border: 1px solid rgba(0,0,0,0);


`

const Relative = styled.div`
    position:relative;
    transition: 250ms ease;
`
const RelativeCatalogo = styled.div`
    position:relative;
    transition: 250ms ease;    
`

const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    visibility: collapse;

    .hover:hover & {
        display: block
    }
`
