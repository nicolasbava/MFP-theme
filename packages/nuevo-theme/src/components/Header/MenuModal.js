import React from "react"
import {styled, connect} from "frontity"
import Link from "../Link"

const fondoRosa = "rgb(251 240 229)"


const MenuModal = ({state,actions}) => {
    const {isMobileMenuOpen} = state.theme

    // if(isMobileMenuOpen === true) {
        return ( 
            <>
                <MenuContainer>
                    
                    <NavLinks>
                        <p onClick={actions.theme.setPlusContadorMobile}>{">"}PRESENTACIÓN</p>
                        <Padding>
                            <Link href='/territorio'><p onClick={actions.theme.setPlusContadorMobile}>· TERRITORIO</p></Link> 
                            <Link href='/proyecto'><p onClick={actions.theme.setPlusContadorMobile}>· PROYECTO</p></Link> 
                            <Link href='/equipo'><p onClick={actions.theme.setPlusContadorMobile}>· EQUIPO</p></Link> 
                        </Padding>
                        <Link href='/noticias'><p onClick={actions.theme.setPlusContadorMobile}>{">"}NOTICIAS</p></Link>
                        <p onClick={actions.theme.setPlusContadorMobile}>{">"}CATÁLOGO</p>
                        <Padding>
                            <Link href='/peliculas'><p onClick={actions.theme.setPlusContadorMobile}>· PELICULAS</p></Link> 
                            <Link href='/artistas'><p onClick={actions.theme.setPlusContadorMobile}>· ARTISTAS</p></Link> 
                            <Link href='/productoras'><p onClick={actions.theme.setPlusContadorMobile}>· PRODUCTORAS</p></Link> 
                        </Padding>
                        <Link href='/mapa'><p onClick={actions.theme.setPlusContadorMobile}>{">"}MAPA</p></Link>
                        <Link href='/contacto'><p onClick={actions.theme.setPlusContadorMobile}>{">"}CONTACTO</p></Link>
                        <Padding>
                            <Link href='/contacto'><p onClick={actions.theme.setPlusContadorMobile}>· ESCRÍBENOS</p></Link> 
                            <Link href='/links'><p onClick={actions.theme.setPlusContadorMobile}>· LINKS DE INTERÉS</p></Link> 
                        </Padding>
                       
                    {/* ICONOS REDES */}
                    <ContenedorRedes>
                        <a href="https://www.twitter.com/memoriafilmicapencopolitana" target="_blank"> 
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/memoriafilmicapencopolitana" target="_blank"> 
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/memoriafilmica/" target="_blank"> 
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCcCPD7ziLSWwc_tqyn_hL5w" target="_blank"> 
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                      
                    </ContenedorRedes>
                        
                    </NavLinks>                
               {/* <Raya></Raya> */}
                </MenuContainer>
            
            </>
        )
    // } else {return null}

    
}

const ContenedorRedes = styled.section`
    width: 100%;
    //text-align: right;
    //background: grey;
    padding: 9% 7%;

    i {
        font-size: 1rem;
        margin-left: 1em;
    }

    a {
        cursor:pointer;
    }
`;




const Raya = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d4d4;

`

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
    background: rgba(0 0 0 / .5);
    color:white;
    position: fixed;
    width: 100%;
    height:100%;
    font-size: 0.7rem;
    border-radius: 0px 0px 5px 0px;

    @media (min-width: 880px){

        &{
            display:none
        }
    }
`

const NavLinks = styled.nav`
    max-width: 250px;
    height: 100%;
    display:flex;
    padding-left: 2em;
    flex-direction: column;
    padding-top: 2em;
    text-align: left;
    // padding-bottom: 1em;
    font-family: 'Krona One';
    background-color: ${fondoRosa};


    p {
        color: #333;
        margin: .2em 0;
        font-family: 'Krona One';
        padding-left: 5%;
    }
`

export default connect(MenuModal)