import React, {useEffect, useState} from 'react'
import {connect, styled, css, Global, state} from 'frontity'

import Link from './Link'
import FichaLink from './FichaLink'
import Cargando from './Cargando'
import IconosRedes from './IconosRedes'
import {arrayArtistas} from '../pages/catalogoArtistas'
import InteresarPeliculas2 from './individuales/InteresarPeliculas'
import SliderFichaTecnicaModulo from './individuales/SliderFichaTecnica'
import Script from '../scripts'

import { useHorizontalScroll } from "../components/useSideScroll";

let fondoRandom = "http://web.web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"

const naranja = '#ec7342'

const fondoRosa = '#fbf0e5'

const redHat = "'Red Hat Text', sans-serif"


{/* script bootstrap 5 */}
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></Script>
{/* BOOTSTRAP LIGHTBOX */}
<Script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.0/dist/index.bundle.min.js"></Script>


// no pude realizar la base de datos de forma relacional asique lo hago desde aca, subo todos los links
// de la foto de cada pelicula y de cada artista y lo enlazo con la info que me trae cada post

// ***!!!! debe ser actualizado cada vez que se sume una pelicula, artista o productora !!!!!****

// OBJETO FOTOS con fotos de artistas y peliculas para usar en los slider de ficha tecnica 
// YA SE QUE PODRIA ESTAR EN OTRO ARCHIVO E IMPORTAR EL OBJETO


  let fotos = {  
    699 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/acero9.png",
    742 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/queridoscompanerosp.png",
    741 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/unterderjunta2.png",
    740 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/mendoza.png" ,
    51  : "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/sempenq1.jpg"  ,
    71  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-12.png",
    105 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/pencoloza.png" ,
    110 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/poker6.png",
    123 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-21.png" ,
    124 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/fburgos.jpeg",
    125 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-22.png",
    128 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1967_12_26_ECRAN-p8-copia.png",
    129 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    130 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-1418137820_1-copia.png",
    131 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/13-4.png",
    145 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/oriana2.png",
    203 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1946.png",
    239 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1903fundicion.jpg" ,
    242 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1.png" ,
    248 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1924_12_17_EL-SUR.jpg",
    251 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1941_12_02_ECRAN-p18¿.png",
    252 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/163934403_2829588743963118_9058270311909214934_n.jpg",
    373 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/amparoalsina2.png",
    374 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    376 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/Adolfo_Berchenko_Garcia_entre_1945_1948_Concepcion_Chile-copia.jpg",
    377 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/buhrlegym.png",
    378 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/mariita-copia.png",
    379 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/67140215_2434850203235230_1432942308470292480_o-copia.jpg",
    380 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/claracastillocantaynollores3.png",
    381 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/anitagiraudocantaynollores.png",
    382 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/trianavarela.png",
    383 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/domenechcantaynollores6.png",
    388 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/loubiescruzdelsur3.png",
    477 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/viole-1.jpg",
    403 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/wolff.jpg",
    400 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/seallscantaynollores.png",
    398 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/Jorge-Sanjinés-IMG_0014.jpg",
    397 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/IMG_8838-scaled.jpg",
    395 : "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-10.png",
    394 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/lalitocantaynollores.png",
    393 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/berrocalcantaynollores3.png" ,
    392 : "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/pellicercantaynollores-1024x757.png",
    402 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    258 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-11.png" ,
    265 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/regioncarbonifera.png" ,
    370 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1.jpg",
    681 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1925_01_20_EL-SUR-p8-copia-1.jpg",
    685 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3.jpg",
    686 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    687 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    688 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    690 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/rapto8.png",
    691 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/notibordeu2.png",
    692 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/carbon17.png",
    693 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    694 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    695 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-copia-copia.jpg"  ,
    696 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-copia.jpg",
    697 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-9.png",
    698 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    700 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/mural-estacion.png",
    701 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-8.png" ,
    702 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1lota-green.png",
    703 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-16.png",
    704 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-15.png" ,
    705 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    707 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    708 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil.jpg" ,
    709 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil-1.png" ,
    710 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-13.png" ,
    711 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    712 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil.png",
    713 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-7.png",
    714 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/6-7.png",
    715 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    716 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-9.png" ,
    717 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    718 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/lctd1.png"  ,
    719 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-2.png" ,
    720 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/7-4.png" ,
    721 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-3.png" ,
    722 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/construccion12.png",
    723 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/pinacoteca.png",
    724 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-1.png",
    725 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    726 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-2.png" ,
    727 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/nocheotono.png",
    728 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/22.png",
    729 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/plazaapostadero.png",
    730 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/freiasmar2.png",
    731 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/freiquiriquina2.png",
    732 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    733 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    734 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    735 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/primerano.png",
    736 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,
    737 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5.png",
    738 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/cormu2.png",
    739 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" ,

    53  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/cineforo.jpg",
    54  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/costasur-1.png",
    55  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/austral.jpeg",
    57  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-24.png" ,
    58  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/rapto-1.png" ,
    59  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-10.jpg",
    60  : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/IDBN5724_0001.png",
    677 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1931_11_01_LA-OPINION-DE-LOTA-p2.png",
    683 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/juanpenco1-scaled.jpg",
    681 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/actualidadestalcahuano.jpg",
    248 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/actualidadespenquistas1.jpg",
    707 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    694 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    693 : "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",

    1754: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/mckeycantaynollores3.png",
    1791: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/vicente.jpg",
    1777: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/oliveroscruzdelsur2.png",
    1779: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/unnamed-file.png" ,
    1781: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/carlos.jpg",
    1878: "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png",
    1877: "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/sempenq1.jpg",
    1722: "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/cinenucleo.jpg",
    1879: "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/poker6.png"
  }


// console.log('esta foto es: ', fotos[739])

{
// ***** FOTOS ARTISTAS ****** //

let foto377 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/buhrlegym.png" // arturo burhle

let foto124 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/fburgos.jpeg" // fernando burgos

let foto1781 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/carlos.jpg" // carlos flores del pino

let foto1779 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/unnamed-file.png" // jorge infante biggs

let foto1791 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/vicente.jpg" // vicente santamaria

let foto1777 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/oliveroscruzdelsur2.png"; //alberto oliveros

let foto477 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/viole-1.jpg" // violeta parra
 
let foto403 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/wolff.jpg" // Mary wolf
 
let foto400 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/seallscantaynollores.png" //Alberto Sealls Cara
let foto398 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/Jorge-Sanjinés-IMG_0014.jpg" //Jorge Sanjinés 
  
let foto397 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/IMG_8838-scaled.jpg" // consuelo saavedra
  
let foto395 = "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-10.png"//Elena Puelma

let foto394 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/lalitocantaynollores.png"//Juan Pérez Castillo
  
let foto393 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/berrocalcantaynollores3.png" //Juan Pérez Berrocal
  
let foto392 = "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/pellicercantaynollores-1024x757.png" //"Antonia Pellicer"

let foto742 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/queridoscompanerosp.png"//QUERIDOS COMPAÑEROS
  
let foto741 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/unterderjunta2.png" // Chile unter der junta
  
let foto740 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/mendoza.png" //césar Mendoza y carabineros en plaza de armas de Concepción - 
 
let foto71 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-12.png" // "El carbón chileno - Memoria Filmica Pencopolitana"

let foto110 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/poker6.png"// "Poker - Memoria Filmica Pencopolitana"

// **** FOTOS PELICULAS ****

let foto1877 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/sempenq1.jpg" //la semana penquista

let foto1878 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" // fabrica de loza de penco

let foto699 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/acero9.png" // acero

let foto123 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-21.png"// "/peliculas/la-sortija-de-la-suerte/"
 
let foto239 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1903fundicion.jpg"// "fundicion-de-cobre-en-lota"
 
let foto242 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1.png" // "una-visita-a-las-minas-de-lota"
 
let foto248 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/actualidadespenquistas1.jpg"// "actualidades-penquistas"
 
let foto258 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-11.png" // /peliculas/boyscouts-en-concepcion/"
 
let foto265 ="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/regioncarbonifera.png" // "/peliculas/la-region-carbonifera/"
 
let foto370 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1.jpg"// "Mater dolorosa - Memoria Filmica Pencopolitana"
 
let foto681 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/actualidadestalcahuano.jpg"// "/peliculas/actualidades-de-talcahuano/"
 
let foto683 ="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/juanpenco1-scaled.jpg" // "juan-penco-boxeador"
 
let foto685 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/3.jpg"// "canta-y-no-llores-corazon-o-el-precio-de-una-honra"
   
let foto686 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"// "/peliculas/desfile-del-cuerpo-de-bomberos-y-revista-general/"
 
let foto687 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" // "solemnes-funerales-del-senor-cousino"
 
let foto688 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"// "/peliculas/vistas-panoramicas-de-lota/"
 
let foto690 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/rapto8.png"// "/peliculas/el-rapto/"
  
let foto691 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/notibordeu2.png"// "/peliculas/1er-noticiario/"
  
let foto692 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/carbon17.png"// "carbon-biografia-de-una-mina"
  
let foto693 = fondoRandom // "Alerta en el Pacífico - Memoria Filmica Pencopolitana"
  
let foto694 = fondoRandom// NOTICIARIO N 1

let foto695 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-copia-copia.jpg" // "Noticiario El Sur N° 2"

let foto696 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/06-copia.jpg"// "Más allá del río Claro y del Bío-Bío"

let foto697 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-9.png"// "bajo-la-cruz-del-sur"

let foto698 = fondoRandom // "concepcion-parque-industrial-de-chile"
  
//let foto699 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/perfil.png"// "/peliculas/huachipato/"
 
let foto700 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/mural-estacion.png"//"concepcion-cuatro-siglos-de-progreso-de-una-provincia"
  
let foto701 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-8.png"//"100-anos-del-carbon-de-lota"
  
let foto702 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1lota-green.png"//"El dominio del fuego - Memoria Filmica Pencopolitana"
  
let foto703 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-16.png"//"/peliculas/panos-de-tome/"
  
let foto704 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-15.png"//"/peliculas/vidrios-planos-de-lirquen/"
  
let foto705 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"El poroto"
  
let foto708 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil.jpg"//"mercado-lorenzo-arenas"
 
let foto709 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil-1.png"//"universidad-de-concepcion"
  
let foto710 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-13.png"//"trilla"
  
let foto711 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"el-puerto-olvidado"
  
let foto712 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1perfil.png"//"/peliculas/energia-gris/"
  
let foto713 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-7.png"//"/peliculas/marcha-de-los-mineros-del-carbon/"
  
let foto714 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/6-7.png"//
  
let foto715 =  fondoRandom//"/peliculas/residuos-domiciliarios/"
  
let foto716 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-9.png"//"/peliculas/lo-que-debemos-saber/"
  
let foto717 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"/peliculas/parto-normal/"
  
let foto718 ="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/lctd1.png" //"/peliculas/la-cara-tiznada-de-dios/"
  
let foto719 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/14-2.png"//"/peliculas/un-espiritu-en-el-bronce/"
  
let foto720 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/7-4.png"//"/peliculas/tejidos-chilenos/"
  
let foto721 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-3.png"//"/peliculas/carbon/"
  
let foto722 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/construccion12.png"//"/peliculas/un-millon-de-toneladas/"
  
let foto723 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/pinacoteca.png"//"gonzalez-camarena-en-la-pinacoteca-udec"
 
let foto724 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/16-1.png"//"/peliculas/ocaso/"
 
let foto725 = fondoRandom //"/peliculas/exposicion-de-hobbies/"
 
let foto726 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5-2.png"//"/peliculas/las-nueve-torres/"
 
let foto727 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/nocheotono.png"//"/peliculas/con-la-noche-el-otono/"
 
let foto728 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/22.png" //"reportaje-a-lota"
 
let foto729 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/plazaapostadero.png"//"visita-de-s-e-el-presidente-la-republica-sr-eduardo-frei-montalva-a-la-base-naval-de-talcahuano-e-isla-quiriquina"
 
let foto730 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/freiasmar2.png"//"visita-de-s-e-el-presidente-de-la-republica-sr-eduardo-frei-montalva-a-la-planta-asmar-talcahuano"
 
let foto731 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/freiquiriquina2.png"//"visita-de-s-e-sr-eduardo-frei-montalva-a-la-isla-quiriquina"
 
let foto732 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"/peliculas/el-companero-rios/"
 
let foto733 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"bellavista-tome"
 
let foto734 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"//"lota"
 
let foto735 ="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/primerano.png" //"el-primer-ano"
 
let foto736 = fondoRandom //"/peliculas/historia-de-una-pelota/"
 
let foto737 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/5.png"//"/peliculas/nuestro-acero/"
 
let foto738 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/cormu2.png"//"proyecto-cormu-concepcion"
 
let foto739 = fondoRandom //"interferencias"

let foto707 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png" // pelicula / [FIESTA DE SAN SEBASTIÁN DE YUMBEL] 
 
 
// fin fotos peliculas

// **** FOTOS PRODUCTORAS ****

let foto1722 = "https://web.memoriafilmica.cl/wp-content/uploads/2022/06/cinenucleo.jpg" // cine nucleo


}



const Post = ({ actions, state, element, libraries }) => {
  const scrollRef = useHorizontalScroll();
  const scrollRef2 = useHorizontalScroll()

  const data = state.source.get(state.router.link)
  
  const post = state.source[data.type][data.id]   
  

  // FETCH STATES 
  // FETCH ARTISTAS
  const [fetchArtistas, setFetchArtistas] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // FETCH PELICULAS
  const [fetchPeliculas, setFetchPeliculas] = useState('')

  const [fetchProductoras , setFetchProductoras] = useState('')




  const arrayPeliculas = state.source.peliculas

  const yearPelicula = post.acf.year;

  const generoPelicula = post.acf.genero;

  const rodajePelicula = post.acf.rodaje;

  const colorPelicula = post.acf.color;

  const estiloPelicula = post.acf.estilo;

  const fotoPelicula = post.acf.foto_pelicula;

  const fichaTecnica = post.acf.ficha_tecnica;

  const linkPelicula = "https://www.youtube.com/embed/" + post.acf.link;

  const duracionPelicula = post.acf.duracion;

  const productoraPelicula = post.acf.productora;

  const galeriaPelicula = post.acf.galeria;



 
  // WRAP FICHA TECNICA 
  let wrap2 = {flexWrap:'no-wrap'}

  if(state.theme.contador % 2 !== 0) {
    wrap2 = {flexWrap:'wrap'}
  } else {
    wrap2 = {flexWrap:'no-wrap'}
  }




  const tab = '\u00A0';


  




    /* NICO ARTISTAS FUNCIONES CARACTERISTITAS */
  let fotoRandom

    if (post.acf.foto_artista === true) {
      fotoRandom = post.acf.foto_artista;
    } else { fotoRandom = "http://web.memoriafilmica.cl/wp-content/uploads/2022/04/800x1096.png"}
  
   
    
    const nacimiento = post.acf.lugar_de_nacimiento;
  
    const yearNacimiento = post.acf.nacimiento;

    const yearFallecimiento = post.acf.fallecimiento

    const fallecimiento = post.acf.lugar_de_fallecimiento

    const trabajoComo = post.acf.trabajoComo

    const cargoIndice = post.acf.cargo_indice


  // =========== controladores PRODUCTORAS ====================

  const filmografia = post.acf.filmografia

  // const equipo = post.acf.equipo

  // shuffle
  const time = new Date().getTime();
    
  const lastNumber = String(time).slice(-2)

  const interesarPeliculas = state.source.peliculas;

  var points = [40, 100, 1, 5, 25, 10];

  if(interesarPeliculas){
    for (let i = interesarPeliculas.length -1; i > 0; i--) {
      j = Math.floor(time * i)
      k = interesarPeliculas[i]
      interesarPeliculas[i] = interesarPeliculas[j]
      interesarPeliculas[j] = k
    }
  }


  if ( element === 'pelicula')  {
      
   
    
    let peliculaId = post.id                       
  
    // ====== PELICULA inicio ========
  

    {/* FETCH DE ARTISTAS PARA UBICAR SU FOTO EN EQUIPO */}
    {useEffect(() => {
        // FETCH DE ARTISTAS 
        fetch('https://web.memoriafilmica.cl/wp-json/wp/v2/artistas?per_page=100')
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((resFetchArtistas) => {

            const obj = Object.fromEntries(
              resFetchArtistas.map(ele => [ele.id, {
                ele
              }])
            )    

            setFetchArtistas(obj);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setFetchArtistas(null);
          })
          .finally(() => {
            setLoading(false);
          });

        // FETCH PELICULAS

        fetch('https://web.memoriafilmica.cl/wp-json/wp/v2/peliculas?per_page=100')
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((resFetchPeliculas) => {
            setFetchPeliculas(resFetchPeliculas);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setFetchPeliculas(null);
          })
          .finally(() => {
            setLoading(false);
          });

    


        }
                , []) 
    }
    {/* fin FETCH DE ARTISTAS PARA UBICAR SU FOTO EN EQUIPO */} 

   let fotoPelicula = post.acf.foto_pelicula ;
   let link = post.acf.link

    // console.log(lastNumber)
 
         return (

            <Pelicula>


              {/* CONSOLE LOG para ubicar fotos, id */}
              {console.log('==== Pelicula ==== :  ',post.title.rendered)}
              {console.log('Post Pelicula:',post)}
              {console.log('Post ID:',post.id)}
              {console.log('Foto Pelicula url:',fotoPelicula)}
              {/* fin CONSOLE LOG */}


                <Catalogo style={{opacity:'0'}} className="krona">
                
                <Link href="/">{"> "}CATÁLOGO</Link>
                    <Link href="/peliculas">
                    {" > "}PELÍCULAS
                    </Link>
                        {" > "}FICHA TÉCNICA
                </Catalogo>
                {/* TITULO PELICULA */}
                <TituloPeli dangerouslySetInnerHTML={{ __html: post.title.rendered}}></TituloPeli>
                

                <CaractPeliculas>      

                    {yearPelicula && <p>{yearPelicula}{tab}/{tab}</p> }  
                    
                    {generoPelicula && <p>{generoPelicula}{tab}/{tab}</p>} 

                    {colorPelicula && <p>{colorPelicula}{tab}/{tab}</p>}        
                   
                    {estiloPelicula && <p>{estiloPelicula}</p>}                
                    
                </CaractPeliculas>

                <InfoPeli style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html: post.content.rendered}}></InfoPeli>

                {post.acf.link.length === 0 ? null : (

                  <VideoPelicula>
                     <a href={link} target='_blank'>
                       <div className='reproductor' style={{backgroundImage:`url(${fotoPelicula}`}} >
                        <i className="bi bi-play-btn"></i>
                        <p>Ver Pelicula</p>
                       </div>

                     </a>
                      {/* <iframe width="100%" height="600" src={linkPelicula} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  </VideoPelicula>
                )}
                
                {/* PELICULA - galeria */}
                {/* scroll ref scroll horizontal */}
                <GaleriaPelicula ref={scrollRef} style={{ overflow: "auto" }}>    
                         
                      {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                       
                      
                      return (
                          <a href={val.url} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4" data-caption={val.description}>
                            <Galeria style={{backgroundImage:`url(${val.url})`}} className="img-fluid"></Galeria>
                            {/* <img src={val}  className="img-fluid"></img> */}
                          </a>
                      )
                      })) : null
                      }    
                  
                </GaleriaPelicula>

                


                <FichaTecnicaPelicula>               

                    <Raya style={{marginTop:`-4px`}}></Raya>
                    <p className="eq" style={{paddingTop: '2.4em', paddingBottom:'1.6em', marginBottom:'0'}}>{">"} FICHA TÉCNICA</p>

                    {/* FICHA TECNICA TEXTO - pelicula  */}
                    <TextoFichaTecnica>
                        
                        <div className="cartel-ficha">
                            
                            {duracionPelicula ? <p>Duración: {duracionPelicula}</p>  : null}
                            {post.acf.formato_original ? <p>Formato Original: {post.acf.formato_original}</p> : null}
                            {rodajePelicula ? <p>Rodaje: {rodajePelicula}</p> : null}
                            {post.acf.estreno.length > 1 ? <p>Estreno: {post.acf.estreno}</p> : null}
                            {productoraPelicula.length > 0 ? (productoraPelicula.map((val,key) => {
                            return (
                                <p>Productora: <FichaLink link={val.post_type + '/' + val.post_name}> {val.post_title} </FichaLink></p>
                              )
                              })) : null
                            }
                            
                        </div>
                    </TextoFichaTecnica>


                  {/* FICHA TECNICA PERSONAS slider - pelicula */}
                    {fichaTecnica.length > 0 ? (
                      <>
                        <p className="eq">{">"} EQUIPO</p>
                      </>
                    ): null}

                    {/* {
                      console.log(fetchArtistas)
                    } */}

                  
                   

                    {/* FLEX NO-WRAP */}
                    {state.theme.contador % 2 === 0 && 
                    // 
                    <>
                      <SliderFichaTecnica className="panel" ref={scrollRef2}  style={{paddingBottom: '2em',overflow: "auto"}}>
                                        
                        {console.log('fetchArtistas',fetchArtistas)}

                          {fichaTecnica.length > 0  ? fichaTecnica.map((val, key) => {
                 
                          return (             
                            <ContenedorFicha  key={val.id}>
                            
                    
                              {val.cargo_nombre.length === 0 ? 

                                <div style={{backgroundImage:`url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
                              
                              : (

                                <>
                                  {fetchArtistas ?  
                                    <div style={{backgroundImage:`url(${fetchArtistas[val.cargo_nombre[0].ID].ele.acf.foto_artista})`}}></div>
                                    
                                    // <div style={{backgroundImage:`url(${fotos[val.cargo_nombre[0].ID]})`}}></div>
                                  : null}
                                </>
                              )}
                              {fetchArtistas ?    
                                    <article key={val.id} className="fondo-verde">                        
                                  {val.cargo_nombre.length === 0 ? null : val.cargo_nombre.map((val,key) =>{
                                  return (
                                      <FichaLink link={val.post_type + "/" + val.post_name}>
                                          <p className='nombre'>{val.post_title}</p>
                                      </FichaLink>
                                  )
                                  })}

                                  {val.nombre_texto.length === 0 ? null : 
                                      <p>{val.nombre_texto}</p>
                                  }
                                  
                                  <p className="cargo">{val.cargo}</p>  
                                  </article>
                              : null}      
                              </ContenedorFicha>
                          )
                        } 
                          ): null
                      }
                      </SliderFichaTecnica >
                      <Raya style={{marginTop:`-4px`}}></Raya>

                    </>
                    //
                    }

                    {/* FIN FLEX- NO-WRAP */}

                    {/* PELICULA - EQUIPO - FICHA TECNICA - FIND PICTURE */}
                    

                    {/* INICIO FLEX WRAP  */}

                    {state.theme.contador % 2 !== 0 &&
                    <>
                    

                    <SliderFichaTecnica className="panel" ref={scrollRef2}  style={{flexWrap:'wrap'}}>
                                      

                          {fichaTecnica.length > 0  ? fichaTecnica.map((val, key) => {
                
                            return (                    
                              <ContenedorFicha  key={val.id}>
                               
                              {/* PICTURE BACKGROUND IMAGE */}
                              {val.cargo_nombre.length === 0 ? 
                              
                              <div style={{backgroundImage:`url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
                              
                              : (
                                
  
                              <div style={{backgroundImage:`url(${fotos[val.cargo_nombre[0].ID]})`}}></div>
  
                              )}
  
                              <article key={val.id} className="fondo-verde">                        
                                  {val.cargo_nombre.length === 0 ? null : val.cargo_nombre.map((val,key) =>{
                                  return (
                                      <FichaLink link={val.post_type + "/" + val.post_name}>
                                          <p className='nombre'>{val.post_title}</p>
                                      </FichaLink>
                                  )
                                  })}
  
                                  {val.nombre_texto.length === 0 ? null : 
                                      <p>{val.nombre_texto}</p>
                                  }
                                    
                                  <p className="cargo">{val.cargo}</p>  
                                  </article>
                              </ContenedorFicha>
                          )
                        } 
                          ): null
                      }
                      </SliderFichaTecnica >
                      {/* <Raya style={{marginTop:`-4px`}}></Raya> */}

                    </>
                    }
                 

                    {/* {state.theme.contador % 2 !== 0 && } */}                
                    


                    

                    {/* BOTON "ver mas" condiciones */}
                    {state.theme.contador % 2 !== 0 && 
                    fichaTecnica !== "undefined" && 
                    fichaTecnica.length > 5 && 
                        
                          <VerMas onClick={actions.theme.setPlusContador}>Ver Menos <i style={{marginTop:'2px'}} className="bi bi-caret-up-fill"></i></VerMas>
                    }
                    
                    {state.theme.contador % 2 === 0 && 
                    fichaTecnica !== "undefined" && 
                    fichaTecnica.length > 5 && 
                        <VerMas onClick={actions.theme.setPlusContador}>Ver Más ({fichaTecnica.length-5})<i className="bi bi-caret-down-fill" ></i></VerMas>
                    }
                    {/* <VerMas onClick={actions.theme.setPlusContador}>Ver más ({fichaTecnica.length-5}) 
                                      <p>{state.theme.contador} </p>
                    </VerMas> */}
                  
              </FichaTecnicaPelicula>

  

            {/* TE PUEDE INTERESAR inicio  */}
            {/* from InteresarPeliculas.js  */}
            {/* <InteresarPeliculas2 /> */}


            </Pelicula>            

        )
    } else if (element === 'artista') {

      // FETCH PELICULAS
      {useEffect(() => {

        fetch('https://web.memoriafilmica.cl/wp-json/wp/v2/peliculas?per_page=100')
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((resFetchPeliculas) => {
  
    
            const obj = Object.fromEntries(
              resFetchPeliculas.map(ele => [ele.id, {
                ele
              }])
            )    
            
            setFetchPeliculas(obj);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setFetchPeliculas(null);
          })
          .finally(() => {
            setLoading(false);
          });

          // FETCH PRODUCTORAS 
          // PARA MOSTRAR LA FOTO 
          fetch('https://web.memoriafilmica.cl/wp-json/wp/v2/productoras?per_page=100')
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((resFetchProductoras) => {
  
    
            const obj = Object.fromEntries(
              resFetchProductoras.map(ele => [ele.id, {
                ele
              }])
            )    
            
            setFetchProductoras(obj);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setFetchProductoras(null);
          })
          .finally(() => {
            setLoading(false);
          });
        
        
        
        
        }
                , []) 
    }

    // *************** POST ARTISTA *************
    const productoras = post.acf.prodcutoras
    
    // ARRAYS con cargos
    const trabajos = post.acf.trabajos
    
       
    // ARTISTA TRABAJOS
    // ARTISTA TRABAJOS arrays
    // aca voy a separar segun el cargo en diferentes arrays para luego mapearlos en sus respectivos lugares
    let direccion = []
    let guion = []
    let produccion = []
    let elenco = []
    let realizacion = []
    let camara = []
    let direccionDeFotografia = []
    let sonido = []
    let montaje = []
    let guionTecnico = []
    let direccionArtistica = []
    let asistenteDireccion = []
    let argumento = []
    let musica = []

    let otros = []

    // TRABAJOS condicionales filter
    if (trabajos) {

    trabajos.forEach(element => {

      if (element.cargo === 'Dirección') {
        direccion.push(element)
      } 
      
      else if (element.cargo.includes('Guión')) {
        guion.push(element)
      } 
      
      else if (element.cargo.includes('Producción')) {
        produccion.push(element)
      } 

      else if (element.cargo.includes('Elenco')) {
        elenco.push(element)
      } 

      else if (element.cargo.includes('Realización')) {
        realizacion.push(element)
      } 

      else if (element.cargo.includes('Cámara')) {
        camara.push(element)
      } 
      
      else if (element.cargo === 'Dirección de fotografía') {
        direccionDeFotografia.push(element)
      } 
            
      else if (element.cargo.includes('Sonido')) {
        sonido.push(element)
      } 
            
      else if (element.cargo == 'Montaje') {
        montaje.push(element)
      } 
            
      else if (element.cargo.includes('Guión técnico')) {
        guionTecnico.push(element)
      } 
            
      else if (element.cargo === 'Dirección artística') {
        direccionArtistica.push(element)
      } 
            
      else if (element.cargo.includes('Asistente de dirección')) {
        asistenteDireccion.push(element)
      } 
            
      else if (element.cargo.includes('Argumento')) {
        argumento.push(element)
      } 

      else if (element.cargo.includes('Música')) {
        musica.push(element)
      } 
      
      else  {
        otros.push(element)
      }
      
    })
  } else return null
    // console.log(otros);
    
    // useEffect(() => {
    //   actions.source.fetch("/peliculas")
    //   actions.source.fetch("/artistas")
    // }, [])


     // 1. fetch data related to the tag you need
    //  actions.source.fetch("/peliculas/");
    //  actions.source.fetch("/artistas/");

     // 2. get data from frontity state
     // const peliculasGET = state.source.get("/peliculas/");

    //  const peliculasGET = state.source.get('/peliculas')
    //  const peliculasGET2 = state.source.peliculas

    //  const artistasGET = state.source.get('/artistas')

    //  const arrayArtistas = state.source.artistas
    

    // console.log('feeeeetch=====',fetchPeliculas)
    console.log('feeeeetch=====',fetchProductoras)



       return ( 
        <>
          <Artista>

              {/* CONSOLE LOG para ubicar fotos, id */}
                {console.log('==== Artista ==== :  ', post.title.rendered)}
                {console.log('Post Artista:',post)}
                {console.log('Post ID:',post.id)}
                {console.log('Foto Artista url:', post.acf.foto_artista)}
              {/* fin CONSOLE LOG */}

                {/* {productoras.length > 0 ? console.log(productoras.length) : null}  */}
                {/* {console.log(post)} */}
                {/* {console.log(interesarPeliculas)} */}
                {/* {console.log(trabajos)} */}
                  <InfoAf>
                      <Indice><p className='krona'> 
                        <Link href="/artistas">{"> "}CATÁLOGO </Link>
                        <Link href="/artistas">{" > "}ARTISTAS{' > '}  </Link>
                        {cargoIndice ? <span className='krona' style={{textTransform: 'uppercase', fontSize:'.8rem'}}>{cargoIndice}</span> : <span className='krona'>FICHA TÉCNICA</span>}

                        </p>

                        
                        </Indice>
                        {/* {console.log('artistasGET:', artistas)} */}
                      
                      <Info>
                      <Foto>
                          <div style={{backgroundImage:`url(${post.acf.foto_artista || fotoRandom})`}}></div>
                      </Foto>
                      <InfoArtista>
                          <div >
                              <TituloArtista dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              {yearNacimiento ? <span>{'('}{yearNacimiento}{')'}</span> : null}
                              {nacimiento ? <span>{' - '} {nacimiento}</span> : null}
                              {yearFallecimiento ? <span>{' - '}{'('}{yearFallecimiento}{')'}</span> : null}
                              {fallecimiento ? <span>{' - '} {fallecimiento}</span> : null}

                              <p className='krona'>{trabajoComo}</p>

                          </div>

                          <DescripcionArtista style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:post.content.rendered }} ></DescripcionArtista>
                      
                      </InfoArtista>

                      </Info>
                      <DescripcionArtistaMobile style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:post.content.rendered }}   ></DescripcionArtistaMobile>

                  </InfoAf>
                  <TrabajosArtista>



                  {/*======== TRABAJOS ARTISTA - artista ===================*/}

                    
                  {typeof trabajos === false ? <p>{"> "}FILMOGRAFÍA</p> : (
                    <InteresarPeliculas>
                      <p className="eq" style={{paddingBottom:'0', fontSize:'1rem'}}>{"> "}FILMOGRAFÍA</p>

                      {/* == 1. Trabajos Dirección == */}
                      {direccion.length === 0 ?  null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Dirección</p>        
                      )}
                      <Array key={1}>     
                        {typeof direccion  === "undefined" ? null :                          
                            Object.values(direccion).map(element => {
                              let id = element.peliculas[0].ID  
                              // {console.log('state.source.peliculas=)==',state.source.peliculas)} 
                              // {console.log(fetchPeliculas)}
                              return (
                                  <Article key={element.id}>
                                  {/* {console.log('element:',element)}*/}
                                  {/* {console.log(peli)} */}
                                  {/* <p>{id}</p> */}
                                  <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                          {/* FOTO DE FONDO DESDE EL FETCH */}
                                          {fetchPeliculas ? 
                                            <>
                                              {/* <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}> */}
                                              <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                              <Cartel>
                                                <Rayita></Rayita>
                                                <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>
                                            </Cartel>
                                        </Cuadrado>
                                            </>
                                          : null }              
                                              
                                    </FichaLink>

                                </Article>                                                                
                              )
                          })     
                      }
                      </Array>


                      {/* == 2. Trabajos Producción == */}
                      {produccion.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Producción </p>        
                      )}
                      <Array key={2}>                    

                        {typeof trabajos === "undefined" ? null : 
                           
                            Object.values(produccion).map( element => {
                                
                                // console.log(element.peliculas[0].ID)
                                
                                let id = element.peliculas[0].ID

                                let foto = [] 

                                let fotoRandom = 'http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)'

                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(produccion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                                                {fetchPeliculas? 
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                  {/* <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}> */}
                                                  <Cartel>
                                                    <Rayita></Rayita>
                                                    <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>
                                                  </Cartel>
                                              </Cuadrado>
                                                 : null }
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 3. Trabajos Guión == */}
                      {guion.length === 0 ? null : (
                          <p className='uppercase' style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Guión</p>        
                      )}
                      <Array key={3}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(guion).map( element => {
                              let id = element.peliculas[0].ID
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                          <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                                                {fetchPeliculas ? 
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>

                                                  {/* <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}> */}
                                                      <Cartel>

                                                        <Rayita></Rayita>
                                                        <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                    {/* <h4>{pelicula.acf.year}</h4> */}
                                                    </Cartel>
                                                  </Cuadrado>
                                                : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 4. Trabajos Elenco == */}
                      {elenco.length === 0 ?  null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Elenco</p>        
                      )}
                      <Array key={4}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(elenco).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                                            {fetchPeliculas ? 
                                              <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>

                                              {/* <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}> */}
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 5. Trabajos Realización == */}
                      {realizacion.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Realización</p>        
                      )}
                      <Array key={5}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(realizacion).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}

                                                {fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>

                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 6. Trabajos Cámara == */}
                      {camara.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Cámara</p>        
                      )}
                      <Array key={6}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(camara).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}

                                                {fetchPeliculas ? 
                                                  // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>

                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 7. Trabajos Dirección de fotografía == */}
                      {direccionDeFotografia.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Dirección de fotografía</p>        
                      )}
                      <Array key={7}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(direccionDeFotografia).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                          <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                                          { fetchPeliculas ? 


                                                 // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                 <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null }
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 8. Trabajos Sonido == */}
                      {sonido.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Sonido</p>        
                      )}
                      <Array key={8}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(sonido).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}

                                                {fetchPeliculas ? 
                                                 // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                 <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 9. Trabajos Montaje == */}
                      {montaje.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Montaje</p>        
                      )}
                      <Array key={9}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(montaje).map( element => {
                              let id = element.peliculas[0].ID  

                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}
                                              {fetchPeliculas ? 

                                               // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                               <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                                </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 10. Trabajos Guión técnico == */}
                      {guionTecnico.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Guión técnico</p>        
                      )}
                      <Array key={10}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(guionTecnico).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}

                                                {fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                 <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 11. Trabajos Dirección artística == */}
                      {direccionArtistica.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Dirección artística</p>        
                      )}
                      <Array key={11}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(direccionArtistica).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}

                                                { fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>

                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null}
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 12. Trabajos Asistente de dirección == */}
                      {asistenteDireccion.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Asistente de dirección</p>        
                      )}
                      <Array key={12}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(asistenteDireccion).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                                { fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                               : null  }
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>
                      
                      {/* == 14. Trabajos Argumento == */}
                      {argumento.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Argumento</p>        
                      )}
                      <Array key={14}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(argumento).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                                { fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null  }
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 15. Trabajos Música == */}
                      {musica.length === 0 ? null : (
                          <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Música</p>        
                      )}
                      <Array key={15}>                    

                        {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                            Object.values(musica).map( element => {
                              let id = element.peliculas[0].ID  
                                return (

                                        <Article key={element.id}>
                                        {/* {console.log(guion)} */}
                                        
                                          <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                                {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                                { fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                    <Cartel>

                                                      <Rayita></Rayita>
                                                      <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                  {/* <h4>{pelicula.acf.year}</h4> */}
                                                  </Cartel>
                                              </Cuadrado>
                                              : null   }
                                          </FichaLink>

                                      </Article>                                                                
                              )
                          })     
                      }
                      </Array>

                      {/* == 16. Trabajos Otros == */}
                      {otros.length === 0 ? null : (
                        <p style={{paddingBottom: '0', paddingTop: '2em', textTransform:'uppercase'}}>{"> "}Música</p>        
                      )}
                      <Array key={16}>                    

                      {typeof trabajos === "undefined" ? <p>Cargando Trabajos...</p> :                          

                          Object.values(otros).map( element => {
                            let id = element.peliculas[0].ID  
                              return (

                                      <Article key={element.id}>
                                      {/* {console.log(guion)} */}
                                      
                                        <FichaLink link={element.peliculas[0].post_type + '/' + element.peliculas[0].post_name}> 
                                              {/* <Featured imgID={peliculas.featured_media} element="pelicula" /> */}


                                              { fetchPeliculas ? 
                                                // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                                  <Cuadrado style={{backgroundImage:`url(${fetchPeliculas[id].ele.acf.foto_pelicula})`}}>
                                                  <Cartel>

                                                    <Rayita></Rayita>
                                                    <h3 dangerouslySetInnerHTML={{__html:element.peliculas[0].post_title}}></h3>

                                                {/* <h4>{pelicula.acf.year}</h4> */}
                                                </Cartel>
                                            </Cuadrado>
                                            : null   }
                                        </FichaLink>

                                    </Article>                                                                
                            )
                        })     
                    }
                      </Array>

                    </InteresarPeliculas>
                    )}

                    {console.log(post)}

                

                  {/* ============ PRODUCTORAS / artista ============*/}

                  { !productoras  ? null : (
                    <InteresarPeliculas style={{paddingTop:'2em'}}>
                    <p className="eq" style={{paddingBottom:'0'}}>{">"} PRODUCTORAS ASOCIADAS</p>
                    <Array key={17}>

                      {typeof productoras === "undefined" ? <p>Cargando Productoras...</p> : 

                          Object.values(productoras).map( productora => {
                            let id = productora.ID
                            
                            
                              return (
                                      <Article key={productora.id}>

                                        <FichaLink link={productora.post_type + '/' + productora.post_name}> 
                                          {fetchProductoras ? 
                                            // <Cuadrado style={{backgroundImage:`url(${fotos[id]})`}}>
                                            <Cuadrado style={{backgroundImage:`url(${fetchProductoras[id].ele.acf.foto_productora})`}}>
                                              <Cartel>
                                                <Rayita></Rayita>
                                                <h3 dangerouslySetInnerHTML={{__html:productora.post_title}}></h3>
                                              </Cartel>
                                            </Cuadrado>
                                          : null}
                                        </FichaLink>

                                    </Article>                                                                
                            )
                        })         
                      }

                    </Array>
                        
                  </InteresarPeliculas>

                  )}
                  </TrabajosArtista>




          </Artista>
        </>   
           )
    } else if (element == 'productora'){

        const filmografia = post.acf.filmografia
        const equipo = post.acf.equipo
        const galeria = post.acf.galeria

        let desde = post.acf.desde
        let hasta = post.acf.hasta
        let lugar = post.acf.lugar

        // 1. fetch data related to the tag you need
        actions.source.fetch("/peliculas/");
        actions.source.fetch("/artistas/");

        // 2. get data from frontity state
        // const peliculasGET = state.source.get("/peliculas/");
        const peliculasGET = state.source.peliculas

        const artistasGET = state.source.artistas

        // console.log('peliculasGET:', peliculasGET, peliculasGET.length)
        // console.log('artistasGET:', artistasGET, artistasGET.length)
       
        // === PRODUCTORA individual === //
        return ( 
            <>

              {/* CONSOLE LOG para ubicar fotos, id */}
              {console.log('==== Productora ==== :  ',post.title.rendered)}
              {console.log('Post Productora:',post)}
              {console.log('Post ID:',post.id)}
              {console.log('Foto Productora url:', post.acf.foto_productora)}
              {/* fin CONSOLE LOG */}

               <Artista>
                    <InfoAf>
                        <Indice><p className='eq'> 
                          <Link href='/'>
                            {">"} CATÁLOGO 
                              </Link>               
                            
                                <Link href='/productoras'>
                                  {" > "}PRODUCTORAS 
                                    </Link>
                                      {" > "}FICHA TÉCNICA </p>
                        </Indice>
                        <Info>
                          <Foto>
                              <div style={{backgroundImage:`url(${post.acf.foto_productora || fotoRandom})`}}></div>
                          </Foto>
                          <InfoArtista>
                              <TituloArtista dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              {desde ? <span>{'('}{desde}{')'}</span> : null}
                              {lugar ? <span>{' - '} {lugar}</span> : null}
                              {hasta ? <span>{' - '}{'('}{hasta}{')'}</span> : null}
      
                              <DescripcionArtista style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:post.content.rendered }}></DescripcionArtista>

                          
                          </InfoArtista>

                        </Info>
                        <DescripcionArtistaMobile style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:post.content.rendered }}></DescripcionArtistaMobile>

                    </InfoAf>

                    

                    {/* PRODUCTORA - trabajos */}
                    <TrabajosArtista>   

                      {/* PRODUCTORA - galeria  */}
                    {galeria === false ? null : 
                      <>
                        <p className="eq" style={{fontSize:'0.8rem', marginTop:'2em'}}>{"> "}GALERÍA</p> 
                        <GaleriaPelicula ref={scrollRef} style={{ overflow: "auto", backgroundColor: '#FBF0E5', paddingInline:'2%'}}>    
                                                       
                          
                          {galeria.map((val,key) => {
                          return (
                              <a href={val.url} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4" data-caption={val.description}>
                                <Galeria style={{backgroundImage:`url(${val.url})`}} className="img-fluid"></Galeria>
                              
                              </a>
                              )
                            }) }
                              
                      
                        </GaleriaPelicula> 
                        <Raya style={{marginTop:`-5px`, zIndex: 2}}></Raya>

                      </>
                    }
                          
                        {/* PRODUCTORA - filmografia */}
                        {typeof filmografia === "undefined" ? <p>{"> "}FILMOGRAFÍA </p> : (
                           

                          <InteresarPeliculas>
                            <p className="eq">{"> "}FILMOGRAFÍA</p>
                            <Array>
                              
                   

                            {typeof filmografia === "undefined" ? <p>Cargando Peliculas...</p> : 

                            Object.values(filmografia).map( (pelicula, index) => {
                              // console.log(filmografia);
                              let idPelicula = pelicula.peliculas.ID
                              return(
                                      <Article key={pelicula.id}>

                                        {/* {console.log('pelicula:', pelicula)} */}
                                      <FichaLink link={pelicula.peliculas.post_type + '/' + pelicula.peliculas.post_name}> 
                                              <Cuadrado style={{backgroundImage:`url(${fotos[idPelicula]})`}}>
                                                <Cartel>
                                                  <Rayita></Rayita>
                                                  <h3 dangerouslySetInnerHTML={{__html:filmografia[index].peliculas.post_title}}></h3>
                                                </Cartel>
                                            </Cuadrado>
                                        </FichaLink>

                                        </Article>                                                                
                                    )
                                })         
                              }

                              </Array>
                        
                            </InteresarPeliculas>

                        )} 


                        {/* PRODUCTORA - equipo slider */}
                        {!equipo ? null : (
                            <p className='eq' style={{paddingBlock: '3em', fontSize: '0.8rem', margin: '0'}}>{"> "}EQUIPO </p>
                        )}
                        <SliderFichaTecnica className="panel" ref={scrollRef} style={{ paddingBottom: '2em',overflow: "auto", flexWrap:'wrap' }}>
                          
                          {typeof equipo === "undefined" ? null : 

                          Object.values(equipo).map((element, key) => {
                            //console.log('equipo:',equipo);

                            // if(element.nombre.length > 2){
                              // let id = element.nombre[0].ID
                              // id1 = fotos[id]
                            // } 
                            
                       
                          return (                    
                              <ContenedorFicha  key={key}>
                              {/* FONDO imagen */}    
                              {/*  */}
                              {element.nombre.length === 0 ? 
                                <div style={{backgroundImage:`url(http://web.memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
                                
                                : (
                                  

                                <div style={{backgroundImage:`url(${fotos[element.nombre[0].ID]})`}}></div>

                                )}
                                
                                  {/* FONDO verde texto */}
                                  <article className="fondo-verde">                        
                                      <>
                                      {/* PRODUCTORA - Equipo - Nombre Link  */}
                                      {element.nombre.length === 0 ? <p dangerouslySetInnerHTML={{__html: element.nombre_texto}}></p> : (
                                          <FichaLink link={'artistas/' + element.nombre[0].post_name}>   
                                          <p dangerouslySetInnerHTML={{__html: element.nombre[0].post_title}}></p>
                                          </FichaLink>  
                                      )}

                                  </>
                                 
                                  
                                  {element.nombre.length === 0 ? 
                                      <p className="cargo" dangerouslySetInnerHTML={{__html: element.cargo}}></p>
                                  : (
                                    <> 
                                      
                                      <p className="cargo" dangerouslySetInnerHTML={{__html: element.cargo}}></p>
                                    </>
                                  )}
                                  
                                  </article>
                              </ContenedorFicha>
                          )
                          } 
                          )
                          }
                          </SliderFichaTecnica >
                          <Raya style={{marginTop:`-4px`}}></Raya>
                          {/* /  */}
                        
                    </TrabajosArtista>
            </Artista>

            </>   
               )
    } else if (element === 'noticia') {
        
      return (
        <Noticia>
          
          <Indice>
            <p className='eq'> 
                        <Link href='/'>
                          {">"} CATÁLOGO 
                          </Link>               
                            
                          <Link href='/noticias'>
                          {" > "}NOTICIAS 
                          </Link>
                          {" > "}NOTICIA </p>
                        </Indice>
          
          <ContenedorNoticia style={{paddingTop: '2em'}}>
            <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
            <div className='justify' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
          </ContenedorNoticia>

           {/* scroll ref scroll horizontal */}
           <GaleriaPelicula ref={scrollRef} style={{ overflow: "auto" }}>             
                    {galeriaPelicula.length > 0 ? (galeriaPelicula.map((val,key) => {
                      return (
                        <a href={val.url} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4" data-caption={val.description}>
                          <Galeria style={{backgroundImage:`url(${val.url})`}} className="img-fluid"></Galeria>
                        </a>
                      )
                      })) : null
                    }    

          </GaleriaPelicula>
          <Raya style={{marginTop:`-5px`}}></Raya>
          <ContenedorNoticia>
            <IconosRedes />

          </ContenedorNoticia>

        
        </Noticia>
        )
    }

}

export default connect(Post)

const Galeria = styled.div`
      height: 20vw;
      width: 29vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      & .col-sm-4 {
        width: 33.333333%;
      }

      @media (max-width: 785px){
        height: 35vw;
        width: 50vw;

        & .col-sm-4 {
          width: 40%;
        }
      }
    `

//  NOTICIA inicio
const Noticia = styled.section`
  margin-bottom: 7%;
`;

const IndiceNoticias = styled.div`
    padding: 2em 7%;

    p {
      font-size: .7rem;
    }

`;


const ContenedorNoticia = styled.section`
    // padding-top: 7%;
    padding-left: 16%;
    padding-bottom: 4em;
    padding-right: 16%;

    .justify {
      text-align: justify;
    }

    ul, li {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        // width: 67vw;
        width: 100%;
        height: auto;
        margin-left:auto;
        margin-right: auto;
        padding:1em 0;
    }

    .margen {
        padding-left: 4%;
        paddin-right: 10%;
        width: 35vw;
    }


    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
        padding-bottom: 1em;
        font-weight: normal;
    }

    h3 { 
        font-weight: normal; 
        padding-bottom: 1em;    
    }

    h3, p, div {
        font-family: 'Red Hat Text', sans-serif;
        margin: 0;    
    }

    p {
        padding-bottom: 2em;    

    }


`;


//  ARTISTA inicio 

const Artista = styled.div`
    // background-color: #eed8c0;
    background-color: #f0e3d6;


`
const DescripcionArtistaMobile = styled.div`
    font-family: 'Red Hat Text', sans-serif;
    padding-inline: 7%;
    text-align: justify;

    @media (min-width: 880px){
      display:none;
    }
`

const DescripcionArtista = styled.div`
    font-family: 'Red Hat Text', sans-serif;
    text-transform: none;
    margin-top:1em;

    @media (max-width: 880px){
      display:none;
    }

`

const InfoAf = styled.div`
    // background: ${fondoRosa};

`

const Bio = styled.p`
    font-family: 'Calibri', sans-serif;
    line-height: 1.2;
`


const TituloArtista  = styled.h2`
    margin: 0;
    margin-top: 0px;
    margin-bottom: 8px;
    color: #0f0c09;
    font-size: 1.2rem;
    font-weight: lighter;
    text-transform: uppercase;
    word-break: break-all;
    padding-right: 1em;
`;

const Indice = styled.div`

// OPACITY ZERO
opacity:0;
//
    padding-left: 7%;
    padding-top: 1%;
    padding-bottom: 2%;

    p {
      font-size: .7rem;
      padding-top: 2em;
      padding-bottom: 2em;
      font-weight: normal;
    }
`

const Info = styled.div`
    display: flex;
    padding-left: 7%;
    padding: -24px;
    padding-right: 7%;
    padding-bottom: 2em;
`

const Foto = styled.div`


    div {
      width: 16vw;
      height: 20vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      @media (max-width: 880px){
        width: min(30vw, 192px);
        height: min(36vw, 244px);

      }
    }


`

const InfoArtista = styled.div`
    margin-left: 2em;
    font-family: 'Krona One';
    color: #5e5959;
    text-transform: uppercase;

    .krona {
      font-family: 'Krona One';
    }  

    span {
      line-height: 1.8;
      // margin-bottom: .5em;
    }
`

const TrabajosArtista = styled.div`
    padding: 1em 0 4em 0;
    background:#fbf0e5;
    padding-left: 7%;
    padding-right: 7%;
`

// artista final
const InteresarPeliculas = styled.section`
    padding-top: 2em;
    
    p {
      font-family: 'Krona One';
      font-weight: normal;
      padding-bottom: 2em;
      font-size: 0.8rem;
    }

`

const Article = styled.article`
    //margin-bottom: 1vw;
    &:first-of-type{
        // margin-left: -1vw;
    }
`

const Array = styled.div`
    display: flex;
    //padding: 1em 0;
    flex-wrap: wrap;
    gap: 1vw;
    margin-right: -2vw;
`

const Cartel2 = styled.div`
  color: #fff;
  //padding-top: 2em;
  // padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: all 500ms ease;
  opacity: 1;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  padding-right: 3em;
  background: rgba(0,0,0, .7);


  gap: 1vw;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 3em;
  padding-bottom: 3em;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 1rem;
  }

  h4 {
    font-weight: normal;
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
    margin-bottom: 2em;
  }

  // & > * {

  //   transition: transform 0.7s;
  //   transform: translateX(-8rem);
  // }

  
  &:hover > * {
    //transform: translateX(0);
    // transform: scale(1.1);
    text-decoration: underline;
  }

  // &:hover {
  //   background: rgba(0,0,0, .7);
  //   opacity: 1;
  //   box-sizing: border-box;
  // }
`



const Cartel = styled.div`
  color: #fff;
  //padding-top: 2em;
  // padding-left: 1em;
  height: 100%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity: 0;
  box-sizing: border-box;
  transition: opacity 0.55s;
  border-radius: 2px;
  z-index: 95;
  display: flex;
  padding-right: 2em;

  gap: 1vw;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 3em;
  padding-bottom: 3em;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 0;
    // font-size: 1rem;
    // font-size: clamp(.7rem, 3vw, 1.35rem);
    
    font-size: clamp(.7rem, 2.3vw, 0.95rem);

  
  }

  h4 {
    font-weight: normal;
    padding-top: 0;
    margin-top: 0;
    font-size: 1rem;
    margin-bottom: 2em;
  }

  & > * {

    transition: transform 0.7s;
    transform: translateX(-8rem);
  }

  
  &:hover > * {
    transform: translateX(0);

  }

  &:hover {
    background: rgba(0,0,0, .7);
    opacity: 1;
    box-sizing: border-box;
  }

  @media (max-width: 400px){

    & {
      padding-bottom: 1em;
      padding-left: 1em;
    }
    
  }

`

const Rayita = styled.div`
  width: 18%;
  height: 5px;
  background: #ff871c;
  border-radius: 4px;
`

const Cuadrado = styled.div`
  background: grey;
  border-radius: 2px;
  height: 36vw;
  width: 41vw;
  overflow:hidden;
  //margin-left: 1vw;
  z-index: 99;
  background-position: center;
  background-size: cover;

  @media (min-width: 944px){   
      width: 20.5vw;
      height: 18vw;   
  }
`



const Pelicula = styled.section`
    padding-left: 7%;
    padding-right: 7%;
    margin-bottom: 15vh;

`
const Catalogo = styled.p`
    // padding-top: 3em;
    padding-bottom: 3em;
    font-size: .7rem;
    
    @media (max-width: 390px){
      // padding-top: 5em;
      padding-bottom: 5em;
      font-size: .5rem
    }
`
const TituloPeli = styled.h2`
    font-size: 2rem;
    color: black;
    margin-bottom: 0.7em;
    margin-top: 0;
    text-transform: uppercase;
    font-weight: normal;

     @media (max-width: 470px){

      font-size: 1.5rem;
    }

`
const InfoPeli = styled.span`
    font-family: ${redHat};
    font-size: 1rem;
    color:#5b5b5b;
    margin-botton: 1rem;

`
const CaractPeliculas = styled.div`
    display: flex;
    text-transform: uppercase;
    letter-spacing: 1px;
    color:#424141;
    margin-bottom: 1.2em;
    flex-wrap:wrap;
    
    p {
      padding: 0;
      margin: 0;
      font-family: 'Krona One';
    }

    @media (max-width: 492px){
      p {
        font-size: .8rem
      }
    }

`
const VideoPelicula = styled.div`
    padding: 1em 0;
    

    a {
      cursor:pointer
    }

    .reproductor{
      width: 100%;
      height: 300px;
      // background: black;
      background-blend-mode: multiply;
      background-position: center;
      background-repat: no-repeat;
      background-size: cover;
      background-color: rgba(0,0,0,0.7);
      border-radius: 5px;
      
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;

      .bi-play-btn {
        color: #8f8f8f63; 
        font-size: 4rem;
        transition: all 250ms ease;
      }

           

      
    }

    
    

    

    @media (min-width: 950px){
      .reproductor {
        height: 500px;
      }
    }
 

`

const GaleriaPelicula = styled.div`
    text-align: center;
    display: flex;
    overflow-x: scroll;
    padding-bottom: 2em;
    padding-top: 1em;
    height: auto;
    gap: 1vw;

    .col-sm-4 {
      flex: 0 0 auto;
      width: 28.333333%;
    }

    &:first-of-type {
      margin-left: -2vw;
    }

    img {
      cursor:pointer;
      // margin-bottom: 2vw;
      max-height: 300px;
      margin: auto;
    }

    scrollbar-color: ${naranja} #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: ${naranja} #0d6efd00;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #0d6efd00;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #f95614;
        border-radius: 50px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #F9672D;;
        cursor: pointer;
      }

      @media (max-width: 785px){
        .col-sm-4 {
          flex: 0 0 auto;
          width: 40%;
        }


      }


 `

const FichaTecnicaPelicula = styled.div`
      

    h3 {
      padding-top: 2em;
      color: #333;
      font-weight: normal;
      font-size: 1.5rem;
      padding-bottom: .5em;
    }

    .eq {
      font-size: .9rem;
      // padding-left: 1.4em;
      color: #333;
      padding-bottom: 1em;
      padding-top: 0.5em;
      font-family: 'krona one';
    }

    .cartel-ficha {
      font-family: 'Calibri';
      line-height: 1;
      font-size: 1rem;
      color: #333;
      // padding-top: 0.5em;
    }
`

const transparente = '#0d6efd00'

const SliderFichaTecnica = styled.div`
      transition: all 500ms ease;
      padding-bottom: 0.5em;
      display: flex;
      gap: 1vw;
      overflow-x: scroll;
      //justify-content: space-between;
      flex-wrap: no-wrap;

      scrollbar-color: #ff510a #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      // &:first-of-type {
      //   margin-left: -2vw;
      // }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff510a #0d6efd00;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #0d6efd00;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #ff510a;
        border-radius: 6px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #fe7434;
        cursor: pointer;

      }

      @media (max-width: 799px){
        
        &{
          // justify-content: center;

        }
      }
`

const SliderFichaTecnicaWrap = styled.div`
      transition: flex-wrap 500ms ease;
      padding-bottom: 2.3em;
      display: flex;
      flex-wrap: wrap;
      overflow-x: scroll;
    //   justify-content: space-between;

      scrollbar-color: #ff5e1d #0d6efd00;
      scrollbar-width: thin;
      scrollbar-radius: 2px;

      &:first-of-type {
        margin-left: -2vw;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 69px;
        background-color: #ff5e1d #3330;
        cursor:pointer;

      }

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #3330;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #ff510a;
        border-radius: 25px;
        cursor: pointer;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        //background: #fe7434;
        background: none;
        cursor: pointer;

      }


`

const VerMas = styled.p`
      text-align: right;
      cursor: pointer;
      font-size: 0.8rem;
      margin: 0;
      padding-top: 2em;
`

const ContenedorFicha = styled.div`
    // border: 2px #00ad9d solid;
    // height: 250px;
    height: 330px;
    //cursor: pointer;

    // width: 150px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    // padding-left: 2vw;
    color: white;
    // width: 12vw;
    //margin-bottom: 2vw;
    //margin-top: 1em;

   
    div {
      height: 100%;
      // width: 12vw;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2px 2px 0 0;

      }
    // &:first-of-type {
    //   margin-left: -2vw;
    // }  


    .fondo-verde {
      background:#00ad9d;
      padding: 0.6em;
      border-radius: 3px ;
      margin-top: -3px;
      height: 170px;
      width: 220px;
      color: #FBF0E5;

    a {
      cursor:pointer;
    }

    }

    p {
      margin: 0;
      line-height: 1.2;
      color: white;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 1rem;
      font-family: 'Krona One';
      padding: 0.4em 0.8em;
      color: #f5efe8;
      transition: all 150ms ease;
    }

    &:hover .nombre {
      color: #fff;
    }

    .cargo {
      font-size: 1rem;
      font-family: 'Calibri', sans-serif;
      text-transform: capitalize;
      color:#f5efe8c7;
      margin-top: -5px;
    }

    

`

const Raya = styled.div`
    background: #d5d3d3;
    height: 1px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
`

const TextoFichaTecnica = styled.div`
  padding-bottom: 0.5em;

  p {
    // font-size: .9rem;
    // font-family: ${redHat};
  }
`

const Interesar = styled.div`
    padding: 3em 0;

`

const Arriba = styled.p`
    position: absolute;
    right: 5vw;
    font-size: .5em;
    cursor: pointer;
`









