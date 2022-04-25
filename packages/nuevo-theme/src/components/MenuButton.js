import React from "react"
import {connect, styled, css} from "frontity"






const MenuButton = () => {
    return (
        <>
            <StyledManuButton>MENU</StyledManuButton>
        </>
    )
}


const StyledManuButton = styled.button`
    display:none;

    @media (max-width: 600px){
        display: flex;
    }
`;

export default connect(MenuButton)