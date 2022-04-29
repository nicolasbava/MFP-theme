import React from "react"
import {connect, styled, css, Global} from "frontity"

const Equipo = ({state}) => {

 


    return (
        <>
        <Indice>
                <p>{"> "}PRESENTACIÓN {">"} EQUIPO</p>
        </Indice>
        <Contenedor>


            <h2>Equipo</h2>

            <h3>EVELYN MUNZENMAYER</h3>

            <p>Lic. en Antropología Física con diploma en Gestión del Patrimonio Cultural. Si bien su principal área de experticia ha sido la bioarqueología, ha convivido en paralelo con la constante inquietud de participar en artes y cultura, lo que la llevó a escribir de cine y música en la revista digital Humo Negro. Eventualmente, su pasión por desenterrar historias la llevó a conformar el colectivo Memoria Fílmica Pencopolitana, donde actualmente se desempeña como investigadora y gestora cultural.
            </p>

            <h3>PAULO NAVARRETE</h3>

            <h3>EDUARDO GUTIÉRREZ</h3>
            <p>
            Periodista y comunicador social con intereses y formación en arte y cultura. Ha escrito para medios como Radio Leufü, Diario Concepción e Indie Hoy (Argentina). Ha trabajado en espacios culturales como La Tienda Nacional, Corporación Cultural de Lo Barnechea, Leufü Estudio y Casa de Salud, lugar donde produjo y condujo un bloque semanal de exhibiciones audiovisuales. Actualmente se desempeña como periodista de la Bienal Concepción, Arte {"&"} Ciencia.
            Desde el 2018 es encargado de comunicaciones y gestiones dentro de Memoria Fílmica Pencopolitana.
            MARCO VALENZUELA
            Profesor de Historia y magíster en Psicología, cinéfilo desde temprana edad. Entre 2015 y 2020, ha sido productor y co-conductor del programa de cine Notas en 35 mm, de emisión semanal por radioleufu.cl. Profesor de talleres de video y comunicación popular y alternativa y realizador y editor independiente entre los años 1994 y 1999. 
            </p>

            <h3>FREDDY ROJAS MATAMALA</h3>
            <p>
            Freddy Rojas viene desde la ciudad de Los Álamos, Lebu, Provincia de Arauco, actualmente cursa la carrera de Artes Multimediales en la UNA (Universidad Nacional de las Artes) Buenos Aires, Argentina.  
            Es Diseñador Gráfico titulado en el Instituto Profesional Duoc UC Concepción el año 2015 y egresado de la Escuela de Cine y Artes Audiovisuales de Eliseo Subiela, Buenos Aires, Argentina el año 2021. 
            Actualmente dirige su estudio de diseño Rojo Lab y paralelamente se desempeña como Realizador Audiovisual independiente y productor en su proyecto Décima Films. Ha trabajado en proyectos como Casa de Salud, Wuñelfe, Festival de Cine Lebu, Mundo Villa (Argentina), Memoria Filmica Pencopolitana, entre otros. 
            </p>
                
            




        </Contenedor>
        <Imagenes>
                <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/3-16.png"></img>
                <img src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/1-7.jpg"></img>

            </Imagenes>
        </>
    )
}

export default Equipo

const Indice = styled.div`
    padding-left: 7%;
    padding-right: 7%;
    font-size: .7rem;
    font-weight: normal;
    padding-top: 3em;

    p {
        margin:0;
        padding: 0;
    font-size: .7rem;
    font-family: 'Krona One', sans-serif;

    }
`

const Imagenes = styled.div`
    display: flex;
    gap: 2vw;


    img {
        width: 48%;
        height: auto;
    }
`

const Contenedor = styled.main`
    padding-top: 5em;
    padding-left: 16%;
    padding-right: 16%;
    img {
        width: 67vw;
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
        font-size: 1.2rem;
        padding-bottom: 1em;

    }

    h3 { 
        font-weight: normal; 
        padding-bottom: 1em;    
    }

    h3, p {
        font-family: 'Red Hat Text', sans-serif;
        margin: 0;    
    }

    p {
        padding-bottom: 2em;    

    }

`