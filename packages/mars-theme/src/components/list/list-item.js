import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date); 

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  // Get postype si es persona
  const postType = data.type;

  /* PELICULAS FUNCIONES CARACTERISTICAS */
  const pelicula = postType === "peliculas";

   /* LIST ITEM PELICULA */

   const year = item.acf.year;
   const fotoPelicula = item.acf.foto_pelicula;
  
  return (
    
    


    <article >
      {pelicula && (
        <Link link={item.link}>
          <Cuadrado style={{backgroundImage:`url(${fotoPelicula})`}}>
            <Cartel>
              <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <Year>{year}</Year>
            </Cartel>
          </Cuadrado>
        </Link>
      )}

      {!pelicula &&(
        <Link link={item.link}>
        
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          <Year>{year}</Year>
      
      </Link>
      )}
      
      <div>
        {/* If the post has an author, we render a clickable author text. */}
        
        {/* <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate> */}
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
   
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);



const Cartel = styled.div`
  color: #fff;
  padding-top: 2em;
  padding-left: 1em;
  height: 89%;
  padding-bottom: 1em;
  transition: 500ms ease;
  opacity:0;

  &:hover {
    background: rgba(0,0,0, .7);
    opacity: 1;
  }
`

const Cuadrado = styled.div`
  background: grey;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Year = styled.p`

`

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
