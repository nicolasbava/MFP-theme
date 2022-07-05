import React from "react"
import {connect, styled} from "frontity"

const Search = ({state, actions}) => {
    return (
        <Contenedor>
            
            <img src="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/magnifying-glass.png" ></img>
            <input
                type="text"
                placeholder="Busca aqui..."
                value={state.theme.valorBusquedaGlobal}
                onChange = {event => {
                    actions.theme.setValorBusqueda(event.target.value)
                }}
            >            
            </input>
            {/* <pre>Search value: {state.theme.valorBusquedaGlobal}</pre> */}
        </Contenedor>
    )
}

export default connect(Search);

const Contenedor = styled.div`
        transition: all 500ms ease-in-out;
        position: relative;

        display:none;
        align-items:center;

    input {
        opacity: 0;
        transition: 500ms ease;
        cursor: pointer;
        margin-right: 2em;


        height: 20px;
        background: #f9f9f9;
        border: 1px solid #d9d4d4;
        border-radius: 20px;
        padding: 0.8em 1em;
    }

    input:hover {
        opacity: 1;
    }

    input:focus {
        opacity: 1;


    }

 

    img {
        width: 20px;
        cursor: pointer;
        position: absolute;
        right: 0;
        color:#333;
        transition: 1000ms ease;
        opacity: .7;
        height:auto;
    }

    &:hover input {
        opacity: 1;

    }

    &:focus img {
        opacity: 0;
    }
    
    // &:hover img {
    //     right: 125px;
    // }

    @media (min-width: 466px){
        display:flex;
    }

`

