import React from "react"
import {connect, styled} from "frontity"
import Featured from "../components/Featured"
import Link from "../components/Link"
import Search from "../components/Search"
import Footer from "../components/footer"



const CatalogoProductoras = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const arrayArtistas = Object.values(state.source.productoras)
    
    const filteredArtistas = arrayArtistas.filter((productoras) =>
        productoras.title.rendered.toLowerCase().includes(state.theme.valorBusquedaGlobal.toLowerCase())
    )

    return (
        <Productoras>
            {/* {console.log(arrayArtistas)} */}
            <h1>CATALOGO PRODUCTORAS</h1>
            <Search />
            {!filteredArtistas.length > 0 && (
                <p>No encontramos nada con: {state.theme.valorBusquedaGlobal}</p>
            )}

            {/* <pre>Contador : {state.theme.contador}</pre>
            <button onClick= {actions.theme.setPlusContador}
            >Sumar 1</button> */}
        
            <p>Productoras disponibles({data.items.length})</p>
            {filteredArtistas.reverse().map((productoras) => {
                // const artista = state.source.artistas[id];

                return (
                    <>

                        {/* <p>{artistas.title.rendered}</p>  */}
                        <article key={productoras.id}>
                            <Link href={productoras.link}>
                                {/* <Featured imgID={productoras.featured_media} element='productora'/>                  */}

                                <h3 dangerouslySetInnerHTML={{__html:productoras.title.rendered}}></h3>
                            </Link>
                        </article>
                    </>

                )
            })}

            <Footer />
        </Productoras>
    )
}

export default connect(CatalogoProductoras)

const Productoras = styled.section`
    padding-left: 7%;
    padding-right: 7%;
`