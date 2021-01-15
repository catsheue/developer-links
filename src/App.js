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
  forDummiesList
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
    <Router>
      <div className="App">
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

              <li>
                <NavLink to="/courses">Online Courses</NavLink>
              </li>
              <li>
                <NavLink to="/book">Book</NavLink>
              </li>
              <li>
                <NavLink to="/wordpress">WordPress</NavLink>
              </li>
              <li>
                <NavLink to="/interactive">Interactive learning</NavLink>
              </li>
              <li>
                <NavLink to="/agile">Agile</NavLink>
              </li>
              <li>
                <NavLink to="/library">Library</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/regex">Regex</NavLink>
              </li>
              <li>
                <NavLink to="/test">Test</NavLink>
              </li>
              <li>
                <NavLink to="/dummies">Dummies</NavLink>
              </li>
              {/*<li>*/}
              {/*  <NavLink to="/general">Youtube Channel</NavLink>*/}
              {/*</li>*/}
            </ul>
          </LeftMenu>
          <Content>
            <Switch>
              <Route path="/test">
                <SiteList list={testList} />
              </Route>
              <Route path="/services">
                <SiteList list={serviceList} />
              </Route>
              <Route path="/statistics">
                <SiteList list={statisticsList} />
              </Route>
              <Route path="/library">
                <SiteList list={libraryList} />
              </Route>
              <Route path="/regex">
                <SiteList list={regexList} />
              </Route>
              <Route path="/agile">
                <SiteList list={agileList} />
              </Route>
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
                <SiteList list={bookList} />
              </Route>
              <Route path="/interactive">
                <SiteList list={interactiveLearnList} />
              </Route>
              <Route path="/dummies">
                <SiteList list={forDummiesList} />
              </Route>
              <Route path="/">
                <Index />
              </Route>
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
