import React from "react";
import styled from "styled-components";

const SiteBar = styled.a`
  display: flex;
  color: #fff;
  width: 100%;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  padding: 0 0 1rem 3rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;
const ImageWrapper = styled.div`
  width: 23rem;
`;

export default function SiteList({ list }) {
  return (
    <>
      {list.map((item) => {
        const { title, image, link, description } = item;
        return (
          <SiteBar href={link} target="_blank">
            <ImageWrapper>
              <img src={image} alt="" />
            </ImageWrapper>

            <div>
              <Title>{title}</Title>
              <div>{description}</div>
            </div>
          </SiteBar>
        );
      })}
    </>
  );
}
