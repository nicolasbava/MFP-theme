import React from "react"
import {connect,styled,css,Global} from "frontity"

const IconosRedes = () => {

    return (
        <Contenedor>
            <a href="https://www.facebook.com/memoriafilmicapencopolitana" target="_blank"> 
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="" target="_blank"> 
                <i class="fa-brands fa-facebook-square"></i>
            </a>
        </Contenedor>
    )
}

export default connect(IconosRedes)

const Contenedor = styled.section`
    margin-top: 2em;
    width: 100%;
    text-align: right;
    //background: grey;
    //padding: 0 7%;

    i {
        font-size: 1rem;
        margin-left: 1em;
    }

    a {
        cursor:pointer;
    }
`;