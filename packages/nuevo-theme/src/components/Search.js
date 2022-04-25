import React from "react"
import {connect} from "frontity"

const Search = ({state, actions}) => {
    return (
        <>
            <input
                type="text"
                placeholder="Busca aqui..."
                value={state.theme.valorBusquedaGlobal}
                onChange = {event => {
                    actions.theme.setValorBusqueda(event.target.value)
                }}
            >            
            </input>
            <pre>Search value: {state.theme.valorBusquedaGlobal}</pre>
        </>
    )
}

export default connect(Search)