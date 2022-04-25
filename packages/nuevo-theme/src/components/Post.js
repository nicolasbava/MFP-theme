import React from 'react'
import {connect} from 'frontity'

const Post = ({ state, element }) => {
    const data = state.source.get(state.source.link)
    const post = state.source[data.type][data.id]

    // const postTitle = state.source[data.type][data.id].title.rendered;
    // podria funcionar este codigo de arriba probar



    

    if ( element === 'pelicula')  {
        return (
            <>
            
               <h3 dangerouslySetInnerHTML={{ __html:pelicula.title.rendered }}></h3>
            </>
        )
    } else if (element === 'artista') {
       return ( <p>SOY UN Artista</p>)
    }

    
}

export default connect(Post)