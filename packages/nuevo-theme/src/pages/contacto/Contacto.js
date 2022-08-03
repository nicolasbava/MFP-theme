import React from "react"
import {connect, Global, css, styled} from "frontity"
import Link from "../../components/Link"

const Contacto = ({state}) => {
    //const contacto = state.source.contacto[1425]

   // console.log(contacto)

    return (
        <Contenedor>
            <article className="flex-noticias">
                {/* OPACITY ZERO . HIDED ON PORPOUSE */}
                <p style={{opacity:'0'}} className="krona responsive"><Link href="/">{"> "}CATÁLOGO </Link>{" > "}CONTACTO{" > "}ESCRÍBENOS</p>
            </article>

            <Flex>
                <div>
                    <h3>¿TE GUSTARÍA SABER MÁS? ¿Tienes información o encontraste algún error? ¿reconociste a alguien en una película? ¿quieres ocupar imágenes para tu proyecto? 
                    </h3>
                    <br/>   
                    <a href="mailto:memoriafilmicapencopolitana@gmail.com"><h3> 
                       ¡ESCRÍBENOS!</h3></a>     
                   
                  
                    <Iconos>

                        <a href="mailto:memoriafilmicapencopolitana@gmail.com"> <i className="fa-solid fa-envelope"></i></a>     

                        <a href="https://www.youtube.com/channel/UCcCPD7ziLSWwc_tqyn_hL5w" target="_blank"> 
                            <img className="youtube blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/01-YOUTUBE-B.png"></img>
                        </a>
                        <a href="https://www.facebook.com/memoriafilmicapencopolitana" target="_blank"> 
                            <img className="blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/02-FACEBOOK-B.png"></img>
                        </a>
                        <a href="https://www.instagram.com/memoriafilmica/" target="_blank"> 
                            <img className="blanco" src="http://web.memoriafilmica.cl/wp-content/uploads/2022/04/03-INSTAGRAM-B.png"></img>
                        </a>                        

                    </Iconos>
                    

                    

                </div>

                {/* <div 
                className="form"
                dangerouslySetInnerHTML={{__html: contacto.content.rendered }}>
                    
                </div> */}

            </Flex>
            
        </Contenedor>
    )
}

export default connect(Contacto)

/* */



const Iconos = styled.article`
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin:auto;
  margin-top: 20px;

  i {
    font-size: 56px;
    margin-top: -5px;
  }

  i {
    filter: brightness(0.1);
    transition: all 300ms ease;
  }

  i:hover {
    filter: brightness(1);
  }

  & > a {
    //margin-left: 2.4vw;
    padding-top: 20px;
  }

  .blanco {
    width: 45px;
    height:auto;
  }

  .youtube {
    width: 55px;
    height: auto;
  }

  .blanco {
    filter: brightness(0.1);
    transition: all 300ms ease;
  }

  .blanco:hover {
    filter: brightness(1);
  }
`


 /*     */
const Flex = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:60vh;
    text-align: center;



    
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
       // padding-right: 1em;
        text-transform: uppercase;
        text-align: center;
    }

    @media (min-width: 969px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: -50px;

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

    textarea {
        //width: 100%;
       // border: none;
        margin-top: 7px;
        border: 1px gray solid;
        border-radius: 3px;
        font-family: 'red hat display';
        background: none;
        //border-bottom: 1px gray solid;
    }

 

    // INPUT
    input {
        // border-radius: 5px;
        border: none;
        font-family: 'red hat display';
        background: none;
        border-bottom: 1px gray solid;

        //padding: .3em .5em;
    }

    label {
        display: inline-block;
        font-family: 'Krona One';
        text-transform: uppercase;
        color: #212529;
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

    // INDICE
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

        @media (max-width: 462px){
            p {
                font-size: .5rem;
            }
        }

        @media (max-width: 270px){
            p {
                font-size: .5rem;
            }
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