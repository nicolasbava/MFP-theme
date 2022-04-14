import { connect, styled } from "frontity";
import Link from "./link";



/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const data = state.source.get(state.router.link);
      const isCurrentPage = data.route === link;

      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  font-family: 'Krona One', sans-serif;
  list-style: none;
  display: flex;
  // width: 848px;
  background-color: #f5ebda;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: hidden;
  justify-content: flex-end;
  border-bottom: 1px solid #0000003b;
  border-radius: 2px;


  @media screen and (max-width: 686px) {
    display: none;
    margin-right: 7%;
  }
`;

const NavItem = styled.div`
  
  padding: 0;
  margin: 0 16px;
  padding-block: max(30px, 2%);
  color: #333;
  font-size: 0.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
  text-transform: uppercase;


  a {
    transition: 350ms ease-in-out;
  }

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: orange;
    }
  }

  &:first-of-type {
    position: absolute;
    left: 0;
    margin-left: 7%;
  }

  &:last-of-type {
    margin-right: 3%;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }

  a:hover {
    color: orange;
  }
`;
