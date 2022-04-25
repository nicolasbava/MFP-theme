import React from "react"
import {connect} from "frontity"
import Header from "./components/Header"
import CatalogoVideos from "./pages/catalogoVideos";
import CatalogoArtistas from "./pages/catalogoArtistas";
import Post from "./components/Post"
import Search from "./components/Search";
import Footer from "./components/footer";
import UpHeader from "./components/UpHeader";
import CatalogoNoticias from "./pages/catalogoNoticias";

import Base from "./styles/Base";




const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    return (
      <>
        <Base />

        <UpHeader />

        <Header />
        <Search />
        <hr />


        {data.isHome && <p> Estamos en la Home</p>}
        {data.isFetching && <p>Cargando...</p>}

        {data.isPeliculasArchive && <CatalogoVideos />}
        {data.isArtistasArchive && <CatalogoArtistas />}
        {data.isNoticiasArchive && <CatalogoNoticias />}
        {data.isNoticiasArchive && <p> Estamos en la Noticias</p>}

        {data.isPeliculas && <Post element='pelicula' />}
        {data.isArtistas && <Post element='artista' />}


      </>
    );
  };

export default connect(Root)