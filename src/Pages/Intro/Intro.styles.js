import styled from "styled-components";
import { colors, windowSizes } from "../../Shared/SharedStyles";

export const IntroLeftContainer = styled.div`
  display: none;
  background: ${colors.oneTwentyDegGradient};
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 92% 0, 100% 30%, 90% 79%, 100% 100%, 0 100%);

  @media screen and (min-width: calc(${windowSizes.medium} + 200px)) {
    display: block;
  } ;
`;

export const Brand = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 40pt;
  margin: 0 0 40px 0;
  color: black;
  z-index: 100;

  @media screen and (min-width: ${windowSizes.medium}) {
    position: fixed;
    top: 20px;
    left: 30px;
    color: white;
    margin: 0;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 480px;
  height: 50vh;
  margin: calc(40px + 40pt) 0 0 0;
`;

export const Description = styled.p`
  color: white;
  font-size: 12pt;
  line-height: 40px;
  width: 80%;
`;

export const SubDescription = styled.h3`
  color: white;
  font-size: 14pt;
  line-height: 40px;
  width: 80%;
`;
