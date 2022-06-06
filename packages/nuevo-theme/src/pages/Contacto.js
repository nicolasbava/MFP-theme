import React from "react"
import {connect, Global, css, styled} from "frontity"
import Link from "../components/Link"

const Contacto = ({state}) => {
    const contacto = state.source.contacto[1425]

    console.log(contacto)

    return (
        <Contenedor>
            <article className="flex-noticias">
                <p className="krona"><Link href="/">{"> "}CATÁLOGO </Link>{" > "}CONTACTO{" > "}ESCRÍBENOS</p>
            </article>

            <Flex>
                <div>
                    <h3>¿TE GUSTARÍA SABER MÁS? ¿ENCONTRASTE UNA PELICULA Y QUERÉS SABER QUE TIENE? ¿TENÉS INFORMACIÓN SOBRE PELÍCULAS LOCALES?¿RECONOCISTE A ALGUIEN EN UNA PELÍCULA?¿QUERÉS OCUPAR IMÁGENES PARA TU PROYECTO?<br/>
                    ¡ESCRÍBENOS!                      
                    </h3>

                </div>

                <div 
                className="form"
                dangerouslySetInnerHTML={{__html: contacto.content.rendered }}></div>

            </Flex>
            
        </Contenedor>
    )
}

export default connect(Contacto)

const Flex = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    // align-items: center;
    width: 100%;
    
    div .wpcf7-form {
        text-align: center;
        max-width: 500px;
        margin: auto;
        margin-top: 7%;
    }



    div {
        width: 100%;
        
    }

    div h3 {
        font-size: 1rem;
        line-height: 1.7;
    }

    @media (min-width: 969px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // align-items: center;

        div {
            width: 48%;
        }

        .form {
            margin-left: 1em;
            margin-top: -1.5em;
            text-align: left;
        }

        div .wpcf7-form {
            text-align: left;
            // max-width: 500px;
            // margin: auto;
            // margin-top: 7%;
        }
    }
`;

const Contenedor = styled.section`
    padding: 0 7% ; 
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

    h3 {
        font-size: 1.2rem;
        font-weight: normal;
    }

    // TEXTAREA

    // textarea {
    //     width: 94%;
    // }

    // INPUT
    input {
        border-radius: 5px;
        border: none;
        font-family: 'red hat display';

        //padding: .3em .5em;
    }

    // BOTON SUBMIT
    input.wpcf7-form-control.has-spinner.wpcf7-submit {
        background: #f9672d;
        color: #fbf0e5;
        font-weight: normal;
        font-family: 'Krona One';
        text-transform: uppercase;
        //padding: 0.3em 0.6em;
        width: 238px;
        margin-left: 15%;
        margin-right: auto;
    }

    .flex-noticias {
        // padding-top: 1em;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;

        p {
            font-size: .7rem;
            padding-top: 3em;
            padding-bottom: 3em;
        }
    }
`;

/* 
const Contenedor = styled.main`
    padding-left: 7%;
    padding-right: 5%;
    // margin-top: 3%;
    padding-bottom: 7%;

    p {
        font-size: .7rem;
        padding-bottom: 3em;
        padding-top: 3em;
        margin: 0;
    }

    .flex-noticias {
        // padding-top: 1em;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;

        p {
            font-size: .7rem;
            padding-top: 3em;
            padding-bottom: 3em;
        }
    }
`


*/