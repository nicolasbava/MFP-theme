import React from 'react'
import {connect} from 'frontity'
import Featured from './Featured'







const Post = ({ state, element, libraries }) => {
    const data = state.source.get(state.router.link)
    
    const post = state.source[data.type][data.id]    

    if ( element === 'pelicula')  {
        return (
            <Pelicula>
                <p>PELICULAS ASAS</p>
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h2>
                <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>

            </Pelicula>
        )
    } else if (element === 'artista') {
       return ( 
        <>
           <p>SOY UN Artista</p>
           <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h2>
                <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
        </>   
           )
    }

    
}

export default connect(Post)

