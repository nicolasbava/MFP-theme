import React, {useState} from "react"
import {connect, styled, css, Global} from "frontity"

const Modal = ({ state, img, actions, estado, cambiarEstado}) => {
    // const [estadoModal1, cambiarEstadoModal1] = useState(false)

    return (
        <>
        {estado &&        
        
        <Modal
        >
            <Contenedor>
                
               <BotonCerrar
                
               >X</BotonCerrar>
               MODAL
               MODAL
               MODAL
               MODAL
            </Contenedor>
        </Modal>
        }
        </>

    )

}

export default connect(Modal)

const EncabezadoModal = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-betweeen;
    position:relative;
`

const BotonCerrar = styled.button`
    position: absolute;
    top:0;
    right: 0;
    background: none;

    border: none;
    cursor: pointer;
    transition: .3s ease all;
    color: black;

    &:hover {
        background:#f2f2f2;
    }
`

const Modal1 = styled.main`
    background: rgba(0,0,0,.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;  
    display: flex;
    justify-conten:center;
    align-items:center;
    border: none;
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