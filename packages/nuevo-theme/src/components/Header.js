import React, {useEffect} from "react"
import {connect, styled} from "frontity"
import Link from "./Link"
import MenuButton from "./MenuButton"
import FichaLink from "./FichaLink"


import PresentacionModal from "./PresentacionModal"
import CatalogoModal from "./CatalogoModal"
import ContactoModal from "./ContactoModal"

import Raya from "./Raya"
const naranja = "#EC7342"
const fondoSeleccionado = "#f5e1c8;"
const bordeModal = "#b7b7b7"
const logo = "http://memoriafilmica.cl/wp-content/uploads/2022/05/Logo.png";

// ESTILOS CSS
const HeaderContenedor = styled.section`
    padding: 2em 7% 2em 7%;
    
    @media (max-widht:600px) {
        padding: 1em 7% 1em 7%;
    }

    @media (max-width: 769px){
        // HIDE HEADER IN SMARTPHONE
        display:none;

        &{
            background: #ff743d

        }
    }
`
const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
    align-items: center; 
    font-family: "Krona One";


    .img {
        max-width: 106px;
        height: auto;
        
        @media (min-width: 769px) {
            display: none;
        }
    }
`
const Logo = styled.div`
    font-family: "Krona One";

    .active{
        text-decoration: underline
      } 

`
const Nav = styled.nav`
    display: flex; 
    justify-content: space-between;
    // position:relative;

    & a {
        padding-left: 3.5em
    }

    @media (max-width: 769px){
        display:none
    }
`

// RENDER
const Header = ({state,actions}) => {

    return (
       <HeaderContenedor>
            <Contenedor>
                <Logo>
                    <Link href='/' activeClassName={`active`}><a> {"> "}INICIO </a></Link> 
                </Logo>
                <img className="img" src={logo}></img>
                <Nav>
                   <Relative>
                        
                        {state.theme.contadorPresentacion % 2 !== 0 && <Presentacion  onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN <i className="bi bi-caret-up-fill"></i></Presentacion>}                       
                        {state.theme.contadorPresentacion % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN <i className="bi bi-caret-down-fill"></i></Presentacion2>}
                                        
                        {state.theme.contadorPresentacion % 2 !== 0 && <PresentacionModal />}                       
                   </Relative>

                   <Link href='/noticias'>NOTICIAS</Link> 

                   <RelativeCatalogo>
                        {state.theme.contadorCatalogo % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-up-fill"></i></Presentacion>}
                        {state.theme.contadorCatalogo % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-down-fill"></i></Presentacion2>}

                        {state.theme.contadorCatalogo % 2 !== 0 && <CatalogoModal />}                       
                        
                        
                        

                   </RelativeCatalogo>
                   
                    {/* <Link href='/productoras'>PRODUCTORAS</Link> */}
                    <FichaLink link='/mapa'>MAPA</FichaLink>
                    {/* <Link href='/contacto'>CONTACTO</Link>  */}
                    <RelativeCatalogo>
                        {state.theme.contadorContacto % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorContacto}>CONTACTO <i className="bi bi-caret-up-fill"></i></Presentacion>}
                        {state.theme.contadorContacto % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorContacto}>CONTACTO <i className="bi bi-caret-down-fill"></i></Presentacion2>}

                        {state.theme.contadorContacto % 2 !== 0 && <ContactoModal />}                       
                        
                        
                        

                   </RelativeCatalogo>
                    
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
    // padding: 0.1em 0.2em;
    padding: 0.4em 0.8em;
    margin-left: 3.5em;
    
    .absoluto {
        position:absoluto;
        display:none;
        top: 1px;
        left:1px;
        background: white;
        border: 1px solid black;
    }


    span:hover {
        color: #EC7342
    }

    &:hover .absoluto{
        display: inline;
    }
`
const Presentacion2 = styled.span`
    margin-left: 3.5em;
    cursor: pointer;
    // padding: .1em .2em;
    padding: 0.4em 0.8em;
    border: 1px solid rgba(0,0,0,0);
    position:relative;


`

const Relative = styled.div`
    position:relative;
    transition: 250ms ease;
`
const RelativeCatalogo = styled.div`
    position: relative;
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