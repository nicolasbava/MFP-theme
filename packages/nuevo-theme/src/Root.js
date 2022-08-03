import React, {useEffect, useState} from "react"
import {connect, Head, styled} from "frontity"

// == COMPONENTS ==
import Script from "./scripts";
import Raya from "./components/Raya";

// HEADER - MENU
import UpHeader from "./components/Header/UpHeader";
import MenuModal from "./components/Header/MenuModal";
import HeaderFijo from "./components/Header/HeaderFijo";
import HeaderFijoMobile from "./components/Header/HeaderFijoMobile";
import Header from "./components/Header/Header"

// CARGANDO
import Cargando from "./components/Cargando";
import CargandoPrincipal from "./components/CargandoPrincipal";


// == PAGES ==
// POST
import Post from "./pages/Post"
// CATALOGO
import CatalogoVideos from "./pages/catalogo/catalogoVideos";
import CatalogoArtistas from "./pages/catalogo/catalogoArtistas";
import CatalogoProductoras from "./pages/catalogo/catalogoProductoras";

// NOTICIAS
import CatalogoNoticias from "./pages/noticias/catalogoNoticias";
import Base from "../src/public/styles/Base";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";

// PRESENTACION
import Equipo from "./pages/presentacion/Equipo";
import Proyecto from "./pages/presentacion/Proyecto";
import Territorio from "./pages/presentacion/Territorio";


// CONTACTO
import Contacto from "./pages/contacto/Contacto";
import LinksDeInteres from "./pages/contacto/LinksDeInteres";

// FOOTER
import Footer from "./components/footer/footer";

let brakepoint = '880px'

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const [estadoModal1, cambiarEstadoModal1] = useState(true);

    const peliculas = state.source.peliculas

    useEffect(() => {
      actions.source.fetch("/peliculas")
      actions.source.fetch("/noticias")
    }, []) 

    return (
      <>
      <React.StrictMode>
        <Head>
            <meta name="description" content="Memoria Filmica Pencopolitana" />
            <title>Memoria Fílmica Pencopolitana</title>
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
        <Base />
        {data.isFetching ? <CargandoPrincipal /> :  

        <>
          {/* == HEADER / MENU'S == */}
          <UpHeader />
          <Header />
          <HeaderFijo />
          <HeaderFijoMobile />
          <Raya />
        
          {/* == EN CONSTRUCCIÓN == */}
          {/* <EnConstruccion></EnConstruccion> 
          <EnConstruccionMobile></EnConstruccionMobile> */}

          {/* fin en construccion */}
          <Main>
            
            {/* == HOME / INICIO == */}
            {data.isHome && <Home />}

            {/* == MENU == */}
            {state.theme.contadorMobile % 2 !== 0 && <MenuModal />}

            {/* == CARGANDO == */}
            {data.isFetching && <Cargando />}

            {/* == PRESENTACION == */}
            {data.isTerritorioArchive && <Territorio />}
            {data.isEquipoArchive && <Equipo />}
            {data.isProyectoArchive && <Proyecto />}

            {/* == CATALOGO == */}
            {data.isPeliculasArchive && <CatalogoVideos />}
            {data.isArtistasArchive && <CatalogoArtistas />}
            {data.isNoticiasArchive && <CatalogoNoticias />}
            {data.isProductorasArchive && <CatalogoProductoras />}

            {/* == POST INDIVIDUALES == */}
            {data.isPeliculas && <Post element='pelicula' />}
            {data.isArtistas && <Post element='artista' />}
            {data.isProductoras && <Post element='productora' />}
            {data.isNoticias && <Post element='noticia' />}


            {/* == CONTACTO == */}
            {/* == CONTACTO / CONTACTO == */}
            {data.isContactoArchive && <Contacto />}

            {/*  == CONTACTO / LINKS DE INTERES ==
            // state.router.link es lo que aparece en la url
            // cuando la url contenga '/links/' y la data esta cargada entonces -> mostrar LinksDeInteres
            // asi fue la unica forma que encontre establecer una ruta   */}      
            {state.router.link === '/links/' && !data.isFetching && <LinksDeInteres /> }
              

            {/* == MAPA == */}
            {data.isMapaArchive && <Mapa />} 
            
          </Main> 

         {/* == FOOTER == */}
         <Footer /> 
        </>
        } 
        {/* == COMPONENTE SCRIPTS == */}
        {/* Usado para cargar los cdn del lightbox (usado para mostrar las fotos de la galeria) y para los iconos */}

        {/* == BOOTSTRAP 5 == */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></Script>
        
        {/* == BOOTSTRAP LIGHTBOX == */}
        <Script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.0/dist/index.bundle.min.js"></Script>

      </React.StrictMode>
      </>
    );
  };

export default connect(Root)

const Main = styled.section`

  // @media (max-width: ${brakepoint}){
  //   padding-top: 150px;
  // }
`

// STYLES EN CONSTRUCCION
// const EnConstruccionMobile = styled.section`
//     width: 100vw;
//     height: 150vh;
//     overflow: hidden;
//     background: url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-22-at-1.10.40-PM.jpeg);
//     background-size: cover;
//     background-position: bottom center;
//     background-repeat: no-repeat;

//     @media (min-width: 700px){
//       display: none
//     }
// `

// const EnConstruccion = styled.section`
//     width: 100vw;
//     height: 100vh;
//     overflow: hidden;
//     background: url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/EN-CONSTRUCCION.png);
//     background-size: cover;
//     background-position: bottom center;

//     @media (max-width: 700px){
//       display: none
//     }

// `

// fin STYLES EN CONSTRUCCION