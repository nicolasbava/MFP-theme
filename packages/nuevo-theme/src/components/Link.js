import React from "react"
import {connect} from "frontity"

const Link = ({ href, actions, children }) =>{

        // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
         //behavior: "smooth"
      });
    };

    return (
        <a 
            href={href}
            onClick = {event => {
                scrollToTop();
                event.preventDefault();
                actions.router.set(href);
            }}
            
        >
           
                {children}

           
        </a>
    )
}

export default connect(Link)