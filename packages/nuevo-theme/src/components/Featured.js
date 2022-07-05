import React from "react"
import {connect} from "frontity"

const Featured = ({state, imgID, element}) => {
    const media = state.source.attachment[imgID]
    
    
    
    if ( media === undefined) {
        return <img src="https://web.memoriafilmica.cl/wp-content/uploads/2022/04/Usuario.png"></img>
    } else {
        return (
            <>
                <img src={media.source_url} alt={media.alt_text} /> 
            </>
         
        )
    }
    

}

export default connect(Featured)