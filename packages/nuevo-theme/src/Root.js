import React, {useEffect, useState} from "react"
import {connect, styled} from "frontity"
import Header from "./components/Header"
import CatalogoVideos from "./pages/catalogoVideos";
import CatalogoArtistas from "./pages/catalogoArtistas";
import Post from "./components/Post"

import Footer, { FooterBasico } from "./components/footer";
import UpHeader from "./components/UpHeader";
import CatalogoNoticias from "./pages/catalogoNoticias";

import Base from "./styles/Base";
import Home from "./pages/Home";
import CatalogoProductoras from "./pages/catalogoProductoras";
import Mapa from "./pages/Mapa";
import HomePeliculas from "./pages/HomePeliculas";
import MenuModal from "./components/MenuModal";
import Territorio from "./pages/Territorio";
import Equipo from "./pages/Equipo";
import Proyecto from "./pages/Proyecto";
import Modal from "./components/Modal";
import Catalogo from "./pages/catalogoVideos"
import Peliculas from "./pages/Peliculas";
import Cargando from "./components/Cargando";




const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const [estadoModal1, cambiarEstadoModal1] = useState(true);


    useEffect(() => {
      actions.source.fetch("/peliculas")
      actions.source.fetch("/artistas")
      actions.source.fetch("/noticias")
      actions.source.fetch("/territorio")
      actions.source.fetch("/equipo")
      actions.source.fetch("/proyecto")


    }, []) 



    return (
      <>
        <Base />
        <UpHeader />

        <Header />




        <Raya></Raya>
        {state.theme.contadorMobile % 2 !== 0 && <MenuModal />}


        {data.isFetching && <Cargando />}

        {data.isHome && <Home />}

        {data.isTerritorioArchive && <Territorio />}
        {data.isEquipoArchive && <Equipo />}
        {data.isProyectoArchive && <Proyecto />}

        {data.isPeliculasArchive && <Peliculas />}
        {data.isArtistasArchive && <CatalogoArtistas />}
        {data.isNoticiasArchive && <CatalogoNoticias />}
        {data.isProductorasArchive && <CatalogoProductoras />}


        {data.isPeliculas && <Post element='pelicula' />}
        {data.isArtistas && <Post element='artista' />}
        {data.isProductoras && <Post element='productora' />}
        
        {data.isMapaArchive && <Mapa />}
       
       
       
       


        <Footer />





      </>
    );
  };

export default connect(Root)

const Raya = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d4d4;

  @media (max-width: 600px){

    &{
      display:none
    }
  }
`