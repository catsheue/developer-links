
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const ContentWrapper = styled.div`
    display:flex;
    background: black;
        height: 90vh;
`
const LeftMenu = styled.div`
    width: 20vw;
    color: #fff;
    
`;
const Header = styled.header`
  min-height: 10vh;background-color: #282c34;
  font-size: calc(10px + 2vmin);
`

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="App-header">
          Developer Links
        </Header>
        <ContentWrapper>
          <LeftMenu>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">About</Link>
              </li>
            </ul>
          </LeftMenu>
          <div>
            <Switch>
            <Route path="/test">
              <div>test</div>
            </Route>
            </Switch>
          </div>
        </ContentWrapper>
      </Router>

    </div>
  );
}

export default App;
