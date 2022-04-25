import React from "react"
import { connect, styled, css } from "frontity"
import MenuModal from "./MenuModal"





const MenuButton = ({actions,state}) => {
    const {isMobileMenuOpen} = state.theme;

    return (
        <>
            <StyledMenuButton onClick={actions.theme.toggleMobileMenu}
            >MENU</StyledMenuButton>

            {isMobileMenuOpen && <MenuModal />}
        </>
    )
}


const StyledMenuButton = styled.button`
    display:none;

    @media (max-width: 600px){
        display: flex;
    }
`;

export default connect(MenuButton)