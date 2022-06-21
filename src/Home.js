import styled from "styled-components";
import AdSense from "react-adsense";

const IndexWrapper = styled.div`
  padding: 6rem 0 0 10rem;
  font-size: 2rem;
  text-align: left;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const CoffeeButton = styled.a`
  margin: 2rem 0;
  display: block;
`;

export default function Home() {
  return (
    <IndexWrapper>
      <p>Hi, I collect some useful websites from web. </p>
      <p>Contact me if you wish me put some website here.</p>
      <p>javaspringtea@gmail.com</p>
      <CoffeeButton
        href="https://www.buymeacoffee.com/lunaCute"
        target="_blank"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: "60px", width: "217px" }}
        />
      </CoffeeButton>
      <AdSense.Google client="ca-pub-2367606842074628" slot="9259816228" />
    </IndexWrapper>
  );
}
