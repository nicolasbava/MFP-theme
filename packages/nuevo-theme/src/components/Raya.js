import React from "React"
import {connect, styled, css, Global} from "frontity"

// COMPONENTE RAYA
// raya gris que separa elementos
 
const Raya = () => {

    return (
        <>
            <Rayita>
            </Rayita>
        </>
    )
}

export default connect(Raya)

const Rayita = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d4d4;

  @media (max-width: 600px){

    &{
      display:none
    }
  }
`