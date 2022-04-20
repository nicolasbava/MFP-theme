import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const postType = data.type;





  console.log(data.items)

  return (
    <>
    <Container>
      
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      {/* <Pagination /> */}
      <p>NOTICIAS >></p>     
      <div></div>  
      <div></div>  
      <Noticias>
          {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/07-min.png"></img> */}
          <div></div>
          <CartelNoticia>
            <h3>INVESTIGACION SOBRE PATRIMONIO</h3>
            <p>Lorem Ipsum es la denominación que recibe el texto en latín que habitualmente se utiliza de prueba en los proyectos de diseño gráfico y borradores para comprobar el resultado de los diseños, las grafías, los colores o la distribución del espacio.</p>
            <span>>></span><span className="leer-mas">leer noticia</span>
          </CartelNoticia>
      </Noticias> 
      <Noticias>
          {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/07-min.png"></img> */}
          <div></div>
          <CartelNoticia>
            <h3>INVESTIGACION SOBRE PATRIMONIO</h3>
            <p>Lorem Ipsum es la denominación que recibe el texto en latín que habitualmente se utiliza de prueba en los proyectos de diseño gráfico y borradores para comprobar el resultado de los diseños, las grafías, los colores o la distribución del espacio.</p>
            <span>>></span><span className="leer-mas">leer noticia</span>
          </CartelNoticia>
      </Noticias> 
      <Noticias>
          {/* <img src="https://memoriafilmica.cl/wp-content/uploads/2022/04/07-min.png"></img> */}
          <div></div>
          <CartelNoticia>
            <h3>INVESTIGACION SOBRE PATRIMONIO</h3>
            <p>Lorem Ipsum es la denominación que recibe el texto en latín que habitualmente se utiliza de prueba en los proyectos de diseño gráfico y borradores para comprobar el resultado de los diseños, las grafías, los colores o la distribución del espacio.</p>
            <span>>></span><span className="leer-mas">leer noticia</span>
          </CartelNoticia>
      </Noticias> 
    </Container>
    
    </>
  );
};

export default connect(List);

const ContenedorNoticia = styled.div`
`

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;


const Noticias = styled.div`
  border: 2px grey solid;
  border-radius: 5px;
  width: 25vw;
  
  div {
    background: url("https://memoriafilmica.cl/wp-content/uploads/2022/04/aaa.png") no-repeat;
    background-color: rgba(0, 0, 0, 0);
    background-color: #00b1a0;
    width: 25vw;
    height: 25vw;
    background-blend-mode: screen;
    cursor: pointer; 
    transition: background-color 500ms ease;
    filter: blur(0.1px);
    z-index: 0
    -webkit-filter: blur(0.1px);
    background-size: cover;
    
    &:hover {
    background-color: #00f3ff00;
    filter: blur(0);
    -webkit-filter: blur(0);

    }
  }
  

  img {
    max-width: 100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color: blue;
    background-blend-mode: multiply;
    
  }

  h3 {
    font-size: 1rem;

    color: #333;
  }

  p {
    color: #4a4a4a;
    font-size: 0.7rem;
    font-weight: initial;
    line-height: 1.4;
    text-align: justify;
    padding-bottom: 1em;    
  }

  .leer-mas {
    margin-left: 5px;
    opacity: 0;
  }

  span {
    color: #333;
    cursor: pointer;
  }

  span:hover .leer-mas {
    opacity: 1;
  }
`

const CartelNoticia = styled.section`
  padding: 1em 2em;
`

const Raya = styled.div`
    background: #d5d3d3;
    height: 2px;
    border-radius: 25px;
    position: absolute;
    left: 0;
    right: 0;

`

