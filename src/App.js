import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import SiteList from "./components/SiteList";
import { routeList } from "./config/routeList";
import {
  ContentWrapper,
  Content,
  Header,
  LeftMenu,
} from "./styles/components/styled";
import { Hamburger } from "./Hamburger";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header">
          <h2>Developer Links</h2>
          <Hamburger />
        </Header>
        <ContentWrapper>
          <LeftMenu>
            <ul>
              {routeList.map((item) => {
                const { path, text } = item;
                return (
                  <li key={path}>
                    <NavLink to={path}>{text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </LeftMenu>
          <Content>
            <Switch>
              {routeList.map((item) => {
                const { path, importList } = item;
                return (
                  <Route path={`/${path}`} key={path}>
                    {importList ? <SiteList list={importList} /> : <Index />}
                  </Route>
                );
              })}
            </Switch>
          </Content>
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;

const IndexWrapper = styled.div`
  padding: 6rem 0 0 10rem;
  font-size: 2rem;
  text-align: left;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

function Index() {
  return (
    <IndexWrapper>
      <p>Hi, I collect some useful websites from web. </p>
      <p>Contact me if you wish me put some website here.</p>
      <p>javaspringtea@gmail.com</p>
    </IndexWrapper>
  );
}
