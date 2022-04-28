import React from "react"
import Root from "./Root"
import { connect } from "frontity";

export default {
  name: "nuevo-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      contador: 0,
      contadorMobile: 0,
      contadorPresentacion: 0,
      contadorCatalogo: 0,
      valorBusquedaGlobal: '',
      isMobileMenuOpen: false
    }
  },
  actions: {
    theme: {
      setPlusContador: ({state}) =>{
        state.theme.contador += 1;
      },
      setPlusContadorMobile: ({state}) =>{
        state.theme.contadorMobile += 1;
      },
      setPlusContadorPresentacion: ({state}) =>{
        state.theme.contadorPresentacion += 1;
      },
      setPlusContadorCatalogo: ({state}) =>{
        state.theme.contadorCatalogo += 1;
      },
      setValorBusqueda: ({state}) => value => 
        {state.theme.valorBusquedaGlobal = value}
      },

  }
};
