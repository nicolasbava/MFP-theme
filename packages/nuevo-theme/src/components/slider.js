<>
<SliderFichaTecnica className="panel" ref={scrollRef} style={{ overflow: "auto", wrap }}>

    {typeof equipo === "undefined" ? <p>Cargando...</p> : 
    
    Object.values(equipo).map((val, key) => {
    return (                    
        <ContenedorFicha  value={key}>

        <div style={{backgroundImage:`url(http://memoriafilmica.cl/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-29-at-3.44.31-PM.jpeg)`}}></div>
        <article className="fondo-verde">                        
            {val.nombre.length === 0 ? null : 
            
            val.nombre.map((val,key) =>{
            return (
                <FichaLink link={"artistas/" + 'nombre'}>
                    <p dangerouslySetInnerHTML={{__html:element.nombre[0].post_title}}></p><span>{', '} </span>
                    
                </FichaLink>
            )
            })}

            {/* {val.nombre_texto.length === 0 ? null : 
                <p>{val.nombre_texto}</p>
            } */}
                
            <p className="cargo"> CARGO </p>
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
