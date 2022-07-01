import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi';
function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
      <Category />
        <Pages />
        </BrowserRouter >
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.7rem;
font-weight:600;
font-family: 'Allura', cursive;
margin:auto;
`
const Nav = styled.div`
padding: 1rem 0 rem;
justify-content:flex-start;
align-items:center;
svg{
  font-size:1.4rem;
  margin-top:0.5rem;
}

`
export default App;
