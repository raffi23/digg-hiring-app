import styled from "styled-components";
import { colors, windowSizes } from "../../Shared/SharedStyles";

export const IntroLeftContainer = styled.div`
  display: none;
  background: ${colors.oneTwentyDegGradient};
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0 0, 92% 0, 100% 30%, 90% 79%, 100% 100%, 0 100%);

  @media screen and (min-width: ${windowSizes.large}) {
    display: block;
  } ;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 380px;
  height: 398.4px;
`;

export const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 25px;
  width: 80%;
`;

export const SubDescription = styled.h3`
  color: white;
  font-size: 18px;
  line-height: 25px;
  width: 80%;
`;
