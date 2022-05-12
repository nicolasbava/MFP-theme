import React from "react"
import {Global, css} from "frontity"



const Base = () => { 

    const naranja = "#EC7342"

    const grisFuente = "#333"
    
    const fondoRosa = "#fbf0e5"

    const redHat = "'Red Hat Text', sans-serif"

    const kronaOne = "'Krona One', sans-serif"

    return (
        <Global 
            styles = {css`

            @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Red+Hat+Display:wght@400;500;600&family=Red+Hat+Text:wght@300;400&display=swap');

           
                html {
                    // font-family: "Calibri", sans-serif;
                    font-family: 'Krona One', sans-serif;
                    color: ${grisFuente};
                }

                body {
                    background-color: ${fondoRosa};
                    margin: 0;
                    box-sizing: border-box;
                }

                a {
                    text-decoration: none;
                    transition: 250ms ease-in-out;
                    color: ${grisFuente};

                }
                
                a:hover {
                    color: #EC7342;
                }


                img {
                    display: block;
                    height: 160px
                }

                p {
                    font-family: ${redHat};
                }

                h1, h2, h3, h4 {
                    font-family: ${kronaOne};
                }



            `}
        />
    )   

}

export default Base