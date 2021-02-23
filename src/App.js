import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import SiteList from "./components/SiteList";
import {
  blogList,
  bookList,
  courseList,
  generalList,
  interactiveLearnList,
  regexList,
  wordpressList,
  testList,
  serviceList,
  agileList,
  statisticsList,
  libraryList,
  glossaryList,
  gitList,
  toolList,
} from "./config/list";
import { routeList } from "./config/list";

const ContentWrapper = styled.div`
  display: flex;
  background: black;
  height: 90vh;
  overflow-y: scroll;
`;
const LeftMenu = styled.div`
  width: 20vw;

  height: 100vh;
  border-right: 1px solid gray;
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
    <Router>
      <div className="App">
        <Header className="App-header">Developer Links</Header>
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
                  <Route
                    path={path}
                    key={path}
                    children={
                      importList ? <SiteList list={importList} /> : <Index />
                    }
                  />
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
`;

function Index() {
  return (
    <IndexWrapper>
      <p>Hi, I collect some useful websites from web. </p>
      <p>Contact me if you wish me put some website here.</p>
      <p>catsheue@gmail.com</p>
    </IndexWrapper>
  );
}
