import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileMenu } from "./redux/slice/menuSlice";

const Line = styled.div`
  width: 2.3rem;
  height: 0.3rem;
  background: ${({ show }) => (show ? "none" : "#fff")};
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

    transform: ${({ show }) =>
      show ? "rotate(45deg) translate(-2px, -1px)" : "none"};
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

    transform: ${({ show }) =>
      show ? "rotate(-45deg) translate(0, -1px)" : "none"};
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
  const showMobileMenu = useSelector((state) => state.menuSlice.showMobileMenu);
  const dispatch = useDispatch();
  return (
    <Wrapper onClick={() => dispatch(setShowMobileMenu(showMobileMenu))}>
      <Line show={showMobileMenu} />
    </Wrapper>
  );
};
