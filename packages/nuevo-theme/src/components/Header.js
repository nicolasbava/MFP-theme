import React, {useEffect} from "react"
import {connect, styled} from "frontity"
import Link from "./Link"
import MenuButton from "./MenuButton"
import FichaLink from "./FichaLink"


import PresentacionModal from "./PresentacionModal"
import CatalogoModal from "./CatalogoModal"
import ContactoModal from "./ContactoModal"
import Raya from "./Raya"


// BRAKEPOINT header mobile

let brakepoint = '880px'


const naranja = "#EC7342"
const fondoSeleccionado = "#f5e1c8;"
const bordeModal = "#b7b7b7"
const logo = "http://web.memoriafilmica.cl/wp-content/uploads/2022/05/Logo.png";

// ESTILOS CSS
const HeaderContenedor = styled.section`
    padding: 2em 7% 2em 7%;
    
    @media (max-widht: ${brakepoint}) {
        padding: 1em 7% 1em 7%;
    }

    @media (max-width: ${brakepoint}{
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
        
        @media (min-width: ${brakepoint}) {
            display: none;
        }
    }
`
const Logo = styled.div`
    font-family: "Krona One";

    .active{
        text-decoration: underline
      } 

    .subrayado {
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

    @media (max-width: ${brakepoint}){
        display:none
    }
`

const Subraya = styled.div`
    
    width: 69px;
    height: 3px;
    position: relative;
    background: #f9672d;
    top: 34px;
    border-radius:4px;
    left: 0px;

`

const Column = styled.div`
    display:block
`



// RENDER
const Header = ({state,actions}) => {

    return (
       <HeaderContenedor>
            <Contenedor>
                <Logo>
                    {state.router.link !== '/' && 
                     <>
                        <Link href='/' activeClassName={`active`}  ><a> {"> "}INICIO </a></Link>
                        <Subraya style={{background:'none'}}></Subraya>
                    </>
                    }
                    {/* <Link href='/' activeClassName={`active`} className={{display:'none'}}><a> {"> "}INICIO </a></Link> */}
                    {state.router.link === '/' &&  
                    <>
                        <Link href='/' activeClassName={`active`} style={{paddingTop:'2px', left:'-1px'}}><a> {"> "}INICIO</a></Link>
                        <Subraya ></Subraya>
                    </>
                    } 
                    {/* <Link href='/' activeClassName={`active`} className={{display:'none'}}><a> {"> "}INICIO </a></Link>  */}
                </Logo>
                <img className="img" src={logo}></img>
                <Nav>
                   <Relative>
                        
                    
                        <Column>              
                        
                        
                            <>
                                
                                {state.theme.contadorPresentacion % 2 !== 0 && <Presentacion  onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN <i className="bi bi-caret-up-fill"></i></Presentacion>}   
                                {state.theme.contadorPresentacion % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorPresentacion}>PRESENTACIÓN <i className="bi bi-caret-down-fill"></i></Presentacion2>}
                                    
                        
                            </>

                                {state.router.link !== '/territorio/' &&  
                                        <Subraya style={{background:'none'}}></Subraya>
                                }   
                        
                                {state.router.link !== '/equipo/' &&  
                                        <Subraya style={{display:'none'}}></Subraya>
                                }  
                                {state.router.link !== '/proyecto/' &&  
                                        <Subraya style={{display:'none'}}></Subraya>
                                } 
                            
                                {state.router.link === '/territorio/' &&  
                                        <Subraya style={{left:'44px', width:'141px'}}></Subraya>
                                    
                                } 
                                {state.router.link === '/equipo/' &&  
                                        <Subraya style={{left:'44px', width:'141px'}}></Subraya>
                                } 
                                {state.router.link === '/proyecto/' &&  
                                        <Subraya style={{left:'44px', width:'141px'}}></Subraya>
                                } 
                          
                        </Column>
                                        
                        {state.theme.contadorPresentacion % 2 !== 0 && <PresentacionModal />}                       
                   </Relative>

                   <Column>
                        {!state.router.link.includes('noticias') &&  
                        <>
                            <Link href='/noticias'>NOTICIAS</Link> 
                            <Subraya style={{background:'none'}}></Subraya>
                        </>
                        } 
                        {state.router.link.includes('noticias') &&  
                        <>
                            <Link href='/noticias'>NOTICIAS</Link> 
                            <Subraya style={{left:'37px', width:'81px'}}></Subraya>
                        </>
                        } 
                   </Column>

                   
                   
                    {/* CATALOGO */}
                   <RelativeCatalogo>

                        {/* {state.theme.contadorCatalogo % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-up-fill"></i></Presentacion>} */}
                        {/* {state.theme.contadorCatalogo % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-down-fill"></i></Presentacion2>} */}

                        
                        <Column>              
                        
                        
                            <>
                                {state.theme.contadorCatalogo % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-up-fill"></i></Presentacion>}
                                {state.theme.contadorCatalogo % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorCatalogo}>CATÁLOGO <i className="bi bi-caret-down-fill"></i></Presentacion2>}
                            </>

                                {state.router.link !== '/artistas/' &&  
                                        <Subraya style={{background:'none'}}></Subraya>
                                }   
                                {state.router.link !== '/peliculas/' &&  
                                        <Subraya style={{display:'none'}}></Subraya>
                                }  
                                {state.router.link !== '/productoras/' &&  
                                        <Subraya style={{display:'none'}}></Subraya>
                                }  
                       
                            
                                {state.router.link.includes('peliculas')   &&  
                                        <Subraya style={{left:'47px', width:'104px'}}></Subraya>
                                    
                                } 
                                {state.router.link.includes('artistas')  &&  
                                        <Subraya style={{left:'47px', width:'104px'}}></Subraya>
                                } 
                                {state.router.link.includes('productoras') &&  
                                    <Subraya style={{left:'47px', width:'104px'}}></Subraya>
                                } 
                        </Column>

                                {state.theme.contadorCatalogo % 2 !== 0 && <CatalogoModal />}      

                   </RelativeCatalogo>
                   
                    {/* <Link href='/productoras'>PRODUCTORAS</Link> */}
                    {/* MAPA */}
                    <Column>
                        {state.router.link !== '/mapa/' &&  
                        <>
                            <FichaLink link='/mapa'>MAPA</FichaLink>

                        </>
                        } 
                    {state.router.link === '/mapa/' &&  
                        <>
                            <FichaLink link='/mapa' style={{marginTop:'2px'}}>MAPA</FichaLink>
                            <Subraya style={{left:'35px', width:'52px'}}></Subraya>
                        </>
                        } 
                   </Column>
                    
                    {/* <Link href='/contacto'>CONTACTO</Link>  */}
                    <RelativeCatalogo>
                        

                        
                        
                        <Column>              
                        
                        
                            <>
                                {state.theme.contadorContacto % 2 !== 0 && <Presentacion onClick={actions.theme.setPlusContadorContacto}>CONTACTO <i className="bi bi-caret-up-fill"></i></Presentacion>}
                                {state.theme.contadorContacto % 2 === 0 && <Presentacion2 onClick={actions.theme.setPlusContadorContacto}>CONTACTO <i className="bi bi-caret-down-fill"></i></Presentacion2>}
                            </>

                                {state.router.link !== '/links/' &&  
                                        <Subraya style={{background:'none'}}></Subraya>
                                }   
                        
                                {state.router.link !== '/contacto/' &&  
                                        <Subraya style={{display:'none'}}></Subraya>
                                }  
                       
                            
                                {state.router.link === '/contacto/' &&  
                                        <Subraya style={{left:'47px', width:'103px'}}></Subraya>
                                    
                                } 
                                {state.router.link === '/links/' &&  
                                        <Subraya style={{left:'47px', width:'103px'}}></Subraya>
                                } 
                          
                        </Column>
                        
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