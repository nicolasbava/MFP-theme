import React, {useEffect, useState} from "react"
import {connect, Head, styled} from "frontity"
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
import Script from "./scripts";
import Contacto from "./pages/Contacto";
import HeaderFijo from "./components/HeaderFijo";
import Raya from "./components/Raya";
import HeaderMobile from "./components/HeaderMobile";
import HeaderFijoMobile from "./components/HeaderFijoMobile";
import LinksDeInteres from "./pages/LinksDeInteres";
import CargandoPrincipal from "./components/CargandoPrincipal";




let brakepoint = '880px'

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const [estadoModal1, cambiarEstadoModal1] = useState(true);

    const peliculas = state.source.peliculas

    useEffect(() => {
      actions.source.fetch("/peliculas")
      actions.source.fetch("/artistas")
      actions.source.fetch("/noticias")
      actions.source.fetch("/territorio")
      actions.source.fetch("/equipo")
      actions.source.fetch("/proyecto")
      actions.source.fetch("/contacto")

      

    }, []) 



    return (
      <>
        <Head>

            <meta name="description" content="Memoria Filmica Pencopolitana" />
            
            <html lang="en" /> 

            {/* BOOTSTRAP icons */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
            {/* LIGHTBOX BOOTSTRAP CSS */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" integrity="sha512-Velp0ebMKjcd9RiCoaHhLXkR1sFoCCWXNp6w4zj1hfMifYB5441C+sKeBl/T/Ka6NjBiRfBBQRaQq65ekYz3UQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

            {/* FONTAWESOME */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            {/* BOOTSTRAP CSS */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
             

        
        </Head>

       
                       
        
        {/* <HeaderMobile /> */}
        
        {/* estilos CSS base */}
        <Base />
        {data.isFetching ? <CargandoPrincipal /> : 

        <>
 
        <UpHeader />
        <Header />
        <HeaderFijo />
        
        <HeaderFijoMobile />
        <Raya />
        
        
        
        
        





        <Main>

          {state.theme.contadorMobile % 2 !== 0 && <MenuModal />}


          {data.isFetching && <Cargando />}

          {data.isHome && <Home />}

          {data.isTerritorioArchive && <Territorio />}
          {data.isEquipoArchive && <Equipo />}
          {data.isProyectoArchive && <Proyecto />}

          {data.isPeliculasArchive && <CatalogoVideos />}
          {data.isArtistasArchive && <CatalogoArtistas />}
          {data.isNoticiasArchive && <CatalogoNoticias />}
          {data.isProductorasArchive && <CatalogoProductoras />}


          {data.isPeliculas && <Post element='pelicula' />}
          {data.isArtistas && <Post element='artista' />}
          {data.isProductoras && <Post element='productora' />}
          {data.isNoticias && <Post element='noticia' />}

          {data.isContactoArchive && <Contacto />}

    
          {state.router.link === '/links/' && !data.isFetching &&
          <LinksDeInteres />
          
          }
          {/* <LinksDeInteres when={state.router.link === '/links/'} /> */}
    



          
          {data.isMapaArchive && <Mapa />}
    
          
        </Main>
        <Footer />
        </>
       
        }

        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js" integrity="sha512-Y2IiVZeaBwXG1wSV7f13plqlmFOx8MdjuHyYFVoYzhyRr3nH/NMDjTBSswijzADdNzMyWNetbLMfOpIPl6Cv9g==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script> */}
        {/* script bootstrap 5 */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></Script>
        {/* BOOTSTRAP LIGHTBOX */}
        <Script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.0/dist/index.bundle.min.js"></Script>

        
  

      </>
    );
  };

export default connect(Root)

const Main = styled.section`

  // @media (max-width: ${brakepoint}){
  //   padding-top: 150px;

  // }
`