import React from "react"
import {connect} from "frontity"
import Link from "./Link"

const Header = () => {
    return (
       <>
            <Link href='/'>Inicio</Link> //
            <Link href='/peliculas'>Peliculas</Link> //
            <Link href='/noticias'>Noticias</Link> // 
            <Link href='/artistas'>artistas</Link> //
        </>
    )

}

export default connect(Header)