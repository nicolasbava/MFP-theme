import React from "react"
import {styled, connect} from "frontity"
import Link from "./Link"

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
                            <Link href='/artistas'><p onClick={actions.theme.setPlusContadorMobile}>· LINKS DE INTERÉS</p></Link> 
                        </Padding>

                        
                    </NavLinks>                
               {/* <Raya></Raya> */}

                </MenuContainer>
            
            </>
        )
    // } else {return null}

    
}


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
    background: ${fondoRosa};
    color:white;
    position: fixed;
    width: 40%;
    font-size: 0.7rem;
    border-radius: 0px 0px 5px 0px;
    z-index: -1;


    // @media (min-width: 600px){

    //     &{
    //         display:none
    //     }
    // }
`

const NavLinks = styled.nav`
    widht: 100%;
    height: 100%;
    display:flex;
    padding-left: 3em;
    flex-direction: column;
    padding-top: 1em;
    text-align: left;
    // padding-bottom: 1em;
    font-family: 'Krona One';


    p {
        color: #333;
        margin: .2em 0;
        font-family: 'Krona One';
        padding-left: 5%;
    }
`

export default connect(MenuModal)