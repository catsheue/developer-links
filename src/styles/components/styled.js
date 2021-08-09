import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  background: black;
  height: 90vh;
  overflow-y: hidden;
`;
export const LeftMenu = styled.div`
  width: 20vw;
  height: 100vh;
  border-right: 1px solid gray;
  overflow-y: scroll;
  padding-bottom: 12rem;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #8f8f8f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #494949;
    border-radius: 5px;
  }

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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Header = styled.header`
  min-height: 10vh;
  background-color: #282c34;

  h2 {
    font-size: calc(10px + 2vmin);
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;

    padding-left: 2rem;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #8f8f8f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #494949;
    border-radius: 5px;
  }
`;
