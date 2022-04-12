import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);


  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Nav />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>


              <Switch>
                <Loading when={data.isFetching} />
                <List when={data.isArchive} />
                <Post when={data.isPostType} />
                <PageError when={data.isError} />
              </Switch>


        
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

// const background = "url('http://localhost/memoriaFilmica/wp-content/uploads/2022/04/03-min.png')";

let arrayBackgrounds = [   
  "url('http://localhost/memoriaFilmica/wp-content/uploads/2022/04/01-min.png')",
  "url('http://localhost/memoriaFilmica/wp-content/uploads/2022/04/02-min.png')",
  "url('http://localhost/memoriaFilmica/wp-content/uploads/2022/04/03-min.png')"
  
];

let numeroRandom = Math.floor(Math.random() * arrayBackgrounds.length);


let background = arrayBackgrounds[numeroRandom];
const HeadContainer = styled.div`

  display: flex;
  align-items: center;
  // flex-direction: column;
  // background-color: #1f38c5;
  // background-color: ;
  background-blend-mode: multiply;
  // padding-block: 6%;
  background: ${background} rgba(0,0,0,0.5) no-repeat left center;
  background-size: cover;
  justify-content: space-between;



`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

console.log(numeroRandom);
