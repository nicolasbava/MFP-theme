import React, {useEffect} from "react"
import {connect, styled} from "frontity"
import Header from "./components/Header"
import CatalogoVideos from "./pages/catalogoVideos";
import CatalogoArtistas from "./pages/catalogoArtistas";
import Post from "./components/Post"
import Search from "./components/Search";
import Footer, { FooterBasico } from "./components/footer";
import UpHeader from "./components/UpHeader";
import CatalogoNoticias from "./pages/catalogoNoticias";

import Base from "./styles/Base";
import Home from "./pages/Home";
import CatalogoProductoras from "./pages/catalogoProductoras";
import Mapa from "./pages/Mapa";





const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    useEffect(() => {
      actions.source.fetch("/peliculas")
      actions.source.fetch("/artistas")
      actions.source.fetch("/noticias")
      actions.source.fetch("/presentacion")

    }, []) 



    return (
      <>
        <Base />
        <UpHeader />

        <Header />


        <Raya></Raya>


        {data.isFetching && <p>Cargando...</p>}
        {data.isHome && <Home />}

        {data.isPeliculasArchive && <CatalogoVideos />}
        {data.isArtistasArchive && <CatalogoArtistas />}
        {data.isNoticiasArchive && <CatalogoNoticias />}
        {data.isProductorasArchive && <CatalogoProductoras />}


        {data.isPeliculas && <Post element='pelicula' />}
        {data.isArtistas && <Post element='artista' />}
        {data.isMapaArchive && <Mapa />}


        {data.isPeliculas && <FooterBasico />}
        {data.isArtistas && <FooterBasico />}



      </>
    );
  };

export default connect(Root)

const Raya = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d4d4;
`