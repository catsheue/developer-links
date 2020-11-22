
import './App.css';
import styled from 'styled-components'

const ContentWrapper = styled.div`
    display:flex;
    background: black;
`
const LeftMenu = styled.div`
    width: 20vw;
    
`
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Developer Links
      </header>
        <ContentWrapper>
            <div></div>
        </ContentWrapper>
    </div>
  );
}

export default App;
