import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";


/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */

// LINK 
  const url = 'https://localhost:3000'


  const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  
  // Get postype si es persona
  const postType = data.type;



  /* PELICULAS FUNCIONES CARACTERISTICAS */

  const pelicula = postType === "peliculas";

  const yearPelicula = post.acf.year;

  const generoPelicula = post.acf.genero;

  const colorPelicula = post.acf.color;

  const estiloPelicula = post.acf.estilo;

  const fotoPelicula = post.acf.foto_pelicula;

  const fichaTecnica = post.acf.ficha_tecnica;





  const tab = '\u00A0';


 
  console.log(postType)
  console.log(post)


  /* ARTISTAS FUNCIONES CARACTERISTITAS */

  const artistas = postType === "artistas";


  
  
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    
    <Container>
     
      <div>
        {pelicula && ( <BeforeTitle> > CATALOGO FILMICO PENCOPOLITANO</BeforeTitle>)}
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {postType == "artistas" && (
          <p>Esta es una Artista</p>
          )}



        {/* Hide author and date on pages */}
        {!data.isPage && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            {/* <DateWrapper>
              {" "}
              on <b>{date.toDateString()}</b>
            </DateWrapper> */}
          </div>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
        
    
        {/* POST TYPE PELICULAS */}
       {pelicula && (
          <Pelicula>     
              <CaractPeliculas>
                
                  <p>{yearPelicula}{tab}</p> 
                
                
                  <p>{tab}/{tab}{generoPelicula} </p> 
                
                
                  <p>{tab}/{tab}{colorPelicula} </p> 
               
              
                  <p>{tab}/{tab}{estiloPelicula}</p> 
              
              </CaractPeliculas>
              <GaleriaPelicula>              
                <p> LINK DE PELICULA </p>
                <p> GALERIA DE FOTOS PELICULAS</p>         
              </GaleriaPelicula>
              <FichaTecnicaPelicula>
                <Raya></Raya>
                <h3>> FICHA TÉCNICA</h3>
                <p>> EQUIPO Y REPARTO</p>
                
                <SliderFichaTecnica>
                {fichaTecnica.map((val, key) => {
                  return (
                    
                    <ContenedorFicha  value={key}>
                      <p>{key}</p>
                      <p>{val.cargo}</p>
                      <p>{val.cargo_nombre}</p>
                    </ContenedorFicha>

                  )
                })}                  
                </SliderFichaTecnica>
                <Raya></Raya>
                <TextoFichaTecnica>
                  <p>> FICHA TECNICA</p>
                  <div>
                    <span>{yearPelicula}{tab}</span>                 
                    <span>{tab}/{tab}{generoPelicula} </span> 
                    <span>{tab}/{tab}{colorPelicula} </span> 
                    <span>{tab}/{tab}{estiloPelicula}</span> 
                  </div>
                  <p>Formato Original: {post.acf.formato_original}</p>
                  <p>Rodaje: {post.rodaje}</p>
                  <p>Estreno: {post.acf.estreno}</p>
                  <p>Productora: </p>
                  
                   
                  
                  
                </TextoFichaTecnica>
              </FichaTecnicaPelicula>
              <Interesar>
                <p>> TE PUEDE INTERESAR</p>

              </Interesar>
              <Arriba>IR PARA ARRIBA</Arriba>
          </Pelicula>   

            )}
            

     
    </Container>




  ) : null;
};

export default connect(Post);

const Container = styled.div`
  margin: 0;
  padding: 24px;
`;

const BeforeTitle = styled.p`

`

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

const StyledLink = styled(Link)`
  padding: 0 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;








/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;

//  FICHA PELICULAS inicio

const CaractPeliculas = styled.div`
    display: flex;

    p {
      padding: 0;
      margin: 0;
    }
`
const Pelicula = styled.div`
    width: 100vw;
    overflow-x: hidden;
`

const GaleriaPelicula = styled.div`
    text-align: center;
`

const FichaTecnicaPelicula = styled.div`

    h3 {
      padding-top: 2em;
      
    }
`

const SliderFichaTecnica = styled.div`
      padding-bottom: 2.3em;
      display: flex;
`

const ContenedorFicha = styled.div`
    border: 2px #00ad9d solid;
    height: 200px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Raya = styled.div`
    background: #d5d3d3;
    height: 2px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;

`

const TextoFichaTecnica = styled.div`
  padding-top: 2em;


`

const Interesar = styled.div`

`

const Arriba = styled.p`
    position: absolute;
    right: 5vw;
    font-size: .5em;
    cursor: pointer;
`