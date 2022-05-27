<>
<SliderFichaTecnica className="panel" ref={scrollRef} style={{ overflow: "auto", wrap }}>

    {typeof equipo === "undefined" ? <p>Cargando...</p> : 
    
    Object.values(equipo).map((val, key) => {
    return (                    
        <ContenedorFicha  value={key}>
        {/* FONDO imagen */}
        <div style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
        {/* FONDO verde texto */}
        <article className="fondo-verde">                        
            <>
                {/* PRODUCTORA - Equipo - Nombre Link  */}
                {element.nombre.length === 0 ? null : (
                    <FichaLink link={'artistas/' + element.nombre[0].post_name}>   
                    <p dangerouslySetInnerHTML={{__html:element.nombre[0].post_title}}></p>
                    </FichaLink>  
                )}

                {/* PRODUCTORA - Equipo - Nombre texto  */}
                {element.nombre_texto.length === 0 ? null : (
                    <p dangerouslySetInnerHTML={{__html:element.nombre_texto}}></p>

                )}

                {/* <p dangerouslySetInnerHTML={{__html: element.cargo}}></p> */}
            </>
            
            

          
            <p className="cargo" dangerouslySetInnerHTML={{__html: element.cargo}}></p>
            </article>
        </ContenedorFicha>
    )
    } 
    )
}
</SliderFichaTecnica >
<Raya style={{marginTop:`-4px`}}></Raya>
</>

{/* ========================= */}


{/* == 1. Trabajos Dirección == */}
{direccion.length === 0 ? null : (
    <p style={{paddingBottom: '0', paddingTop: '2em'}}>{"> "}Dirección</p>        
)}
<Array>     
{console.log(direccion)}

  {typeof direccion === "undefined" ? <p>Cargando...</p> :                          

      Object.values(direccion).map((element, key) => {
        return (
                    <>
                      <FichaLink link={'artistas/' + element.nombre[0].post_name}>  
                        <p dangerouslySetInnerHTML={{__html:element.nombre[0].post_title}}></p><span>{', '} </span>
                        <p dangerouslySetInnerHTML={{__html: element.cargo}}></p>
                      </FichaLink> 
                    </>
        )
    })     
}
</Array>

        </Array>
  
      </InteresarPeliculas>

  )} 
