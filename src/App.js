import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SiteList from "./components/SiteList";
import { generallist } from "./config/list";

const ContentWrapper = styled.div`
  display: flex;
  background: black;
  height: 90vh;
  overflow-y: scroll;
`;
const LeftMenu = styled.div`
  width: 10vw;

  height: 100vh;
  background: teal;
  ul {
    list-style: none;
    li {
      a {
        padding: 1.6rem;
        display: block;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`;
const Header = styled.header`
  min-height: 10vh;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
`;
const Content = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="App-header">Developer Links</Header>
        <ContentWrapper>
          <LeftMenu>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/general">General</Link>
              </li>
              <li>
                <Link to="/general">Youtube Channel</Link>
              </li>
            </ul>
          </LeftMenu>
          <Content>
            <Switch>
              <Route path="/general">
                <SiteList list={generallist} />
              </Route>
            </Switch>
          </Content>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;
