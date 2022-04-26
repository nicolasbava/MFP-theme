import React from "react"
import {connect, styled} from "frontity"

const Search = ({state, actions}) => {
    return (
        <>
            <Input
                type="text"
                placeholder="Busca aqui..."
                value={state.theme.valorBusquedaGlobal}
                onChange = {event => {
                    actions.theme.setValorBusqueda(event.target.value)
                }}
            >            
            </Input>
            {/* <pre>Search value: {state.theme.valorBusquedaGlobal}</pre> */}
        </>
    )
}

export default connect(Search)

const Input = styled.input`
    height: 20px;
    
`