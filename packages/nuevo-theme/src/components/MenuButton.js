import React from "react"
import { connect, styled, css } from "frontity"
import MenuModal from "./MenuModal"
import { CloseIcon, HamburgerIcon } from "./menu-icon";

import HambIcon from "../img/hamb.png"
import Close from "../img/close.png"





const MenuButtons = ({ state, actions }) => {
    const isMobileMenuOpen = state.theme.isMobileMenuOpen;

    return (
        <>
            {/* <StyledMenuButton >

                MENU
            </StyledMenuButton> */}
            {/* {state.theme.contadorMobile % 2 !== 0 && <MenuModal />} */}
            {state.theme.contadorMobile % 2 === 0 && <Img src={HambIcon} onClick={actions.theme.setPlusContadorMobile}></Img>}
            
            {state.theme.contadorMobile % 2 !== 0 && <Img src={Close} onClick={actions.theme.setPlusContadorMobile}></Img>} 
        </>
    )
}

const Img = styled.img`
    height: 40px;
    width: 40px;

    display:none;

    @media (max-width: 600px){
        display: flex;
    }
`

const StyledMenuButton = styled.button`

`;

export default connect(MenuButtons)