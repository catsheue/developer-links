import styled from "styled-components";
import { useState } from "react";

const Line = styled.div`
  width: 2.3rem;
  height: 0.3rem;
  background: ${({ on }) => (on ? "none" : "#fff")};
  border-radius: 1rem;

  margin-top: 1rem;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;

    width: 100%;
    height: 0.3rem;
    border-radius: 1rem;
    background: yellow;
    transform-origin: -20% 210%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    transform: ${({ on }) =>
      on ? "rotate(45deg) translate(-2px, -1px)" : "none"};
  }

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 2rem;

    width: 100%;
    height: 0.3rem;
    border-radius: 1rem;
    background: red;
    transform-origin: 0% -31%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    transform: ${({ on }) =>
      on ? "rotate(-45deg) translate(0, -1px)" : "none"};
  }
`;
const Wrapper = styled.div`
  position: fixed;
  right: 2.3rem;
  top: 2.5rem;
  cursor: pointer;

  height: 3rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Hamburger = () => {
  const [on, setOn] = useState(false);
  return (
    <Wrapper onClick={() => setOn((prevState) => !prevState)}>
      <Line on={on} />
    </Wrapper>
  );
};
