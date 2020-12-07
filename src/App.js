import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SiteList from "./components/SiteList";
import {
  blogList,
  booklList,
  courseList,
  generalList,
  wordpressList,
} from "./config/list";

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
    <div className="App">
      <Router>
        <Header className="App-header">Developer Links</Header>
        <ContentWrapper>
          <LeftMenu>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/general">General</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              {/*<li>*/}
              {/*  <NavLink to="/general">Youtube Channel</NavLink>*/}
              {/*</li>*/}
              <li>
                <NavLink to="/courses">Online Courses</NavLink>
              </li>
              <li>
                <NavLink to="/book">Book</NavLink>
              </li>
              <li>
                <NavLink to="/wordpress">WordPress</NavLink>
              </li>
            </ul>
          </LeftMenu>
          <Content>
            <Switch>
              <Route path="/general">
                <SiteList list={generalList} />
              </Route>
              <Route path="/blog">
                <SiteList list={blogList} />
              </Route>
              <Route path="/courses">
                <SiteList list={courseList} />
              </Route>
              <Route path="/wordpress">
                <SiteList list={wordpressList} />
              </Route>
              <Route path="/book">
                <SiteList list={booklList} />
              </Route>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </Content>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;

const IndexWrapper = styled.div`
  padding: 3rem;
  font-size: 3rem;
`;

function Index() {
  return (
    <IndexWrapper>
      <p>Hi, I collect some useful websites from web. </p>
      <p>Contact me if you wish me put some website here.</p>
    </IndexWrapper>
  );
}
