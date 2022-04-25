import React from "react"
import Root from "./root"

export default {
  name: "nuevo-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      contador: 0,
      valorBusquedaGlobal: ''
    }
  },
  actions: {
    theme: {
      setPlusContador: ({state}) =>{
        state.theme.contador += 1;
      },
      setValorBusqueda: ({state}) => value => 
        {state.theme.valorBusquedaGlobal = value}
    }
  }
};
