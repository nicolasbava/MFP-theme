import React from "react"
import {Global, css} from "frontity"

const Base = () => {

    const grisFuente = "#333"

    const fondoRosa = "#fbf0e5"

    return (
        <Global 
            styles = {css`

            @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

                html {
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
                    color: orange;
                }


                img {
                    display: block;
                }

            `}
        />
    )   

}

export default Base