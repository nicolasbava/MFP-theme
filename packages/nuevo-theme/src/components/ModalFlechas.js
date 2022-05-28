import React from "react"
import {connect, styled, css, Global} from "frontity"

const ModalFlechas = () => {


    return (

        <Modal>
            <div className="izq">{'<'}</div>
            <div className="der">{'>'}</div>         
            
        </Modal>
    )

}

export default ModalFlechas

const Modal = styled.section`


   .izq {
       position: absolute;
       left:0;
       top:50%;
   }

   .der {
       position:absolute;
       right: 0;
       top:50%;
   }
`

