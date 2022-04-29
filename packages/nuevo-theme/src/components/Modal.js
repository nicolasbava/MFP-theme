import React from "react"
import {connect, styled, css, Global} from "frontity"

const Modal = ({ state, img, actions}) => {
    return (
    
        <Modal1>
        <Contenedor>

                <img src='http://web.memoriafilmica.cl/wp-content/uploads/2022/04/viole-1.jpg'></img>

        </Contenedor>
        </Modal1>
    )

}

export default connect(Modal)

const Modal1 = styled.main`
    background: rgba(0,0,0,.3);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const Contenedor = styled.dialog`
    display: flex; 
    justify-conten: center;
    align-items: center;
    bacground: rgba(0,0,0,.3)
    position:relative;
    z-index: 99;

    img {
        width: 60vw;
        height: 60vh;
    }
`