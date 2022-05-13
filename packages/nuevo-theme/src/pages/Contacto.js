import React from "react"
import {connect, Global, css, styled} from "frontity"

const Contacto = ({state}) => {
    const contacto = state.source.contacto[1425]

    console.log(contacto)

    return (
        <Contenedor>
            <h3>CONTACTO</h3>

            <div dangerouslySetInnerHTML={{__html: contacto.content.rendered }}></div>

        </Contenedor>
    )
}

export default connect(Contacto)

const Contenedor = styled.section`
    padding: 4em; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // INPUT
    input {
        border-radius: 5px;
        border: none;
        font-family: 'red hat display';
        width: 95%;
        padding: .3em .5em;
    }

    // BOTON SUBMIT
    input.wpcf7-form-control.has-spinner.wpcf7-submit {
        background: #f9672d;
        color: #fbf0e5;
        font-weight: normal;
        font-family: 'Krona One';
        text-transform: uppercase;
        padding: 0.3em 0.6em;
        width: 65%;
        margin-left: 5em;
        margin-right: auto;
`;