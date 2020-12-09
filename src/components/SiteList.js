import React from "react";
import styled from "styled-components";

const SiteBar = styled.a`
  display: flex;
  color: #fff;
  width: 100%;
  padding: 2rem;
  &:hover {
    background: #191919;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  padding: 0 0 1rem 0;
`;

const Description = styled.div`
  font-size: 1rem;
`;
const ImageWrapper = styled.div`
  width: 13rem;
`;
const DetailWrapper = styled.div`
  padding-left: 4rem;
  text-align: left;
`;

export default function SiteList({ list }) {
  return (
    <>
      {list.map((item) => {
        const { title, image, link, description } = item;
        return (
          <SiteBar href={link} target="_blank">
            <ImageWrapper>
              <img src={image} alt="" loading="lazy" />
            </ImageWrapper>

            <DetailWrapper>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </DetailWrapper>
          </SiteBar>
        );
      })}
    </>
  );
}
