import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  background: black;
  height: 90vh;
  overflow-y: scroll;
`;
export const LeftMenu = styled.div`
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
export const Header = styled.header`
  min-height: 10vh;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
`;
export const Content = styled.div`
  width: 100%;
`;
