import styled from "styled-components";
import { colors, windowSizes } from "../../Shared/SharedStyles";

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 30vh;
  min-height: 81px;
  width: 100%;
  padding: 0 20px;
  margin: 0 0 120px 0;

  @media screen and (min-width: ${windowSizes.medium}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: unset;
    margin: 0;
  }
`;

export const Brand = styled.h1`
  font-size: 62px;
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0 0 40px 0;

  @media screen and (min-width: ${windowSizes.medium}) {
    margin: 0;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media screen and (min-width: ${windowSizes.medium}) {
    width: 70%;
  }
`;

export const ProgressLabel = styled.h3`
  margin: 0 0 10px 0;
`;

export const ProgressView = styled.div`
  background: ${colors.lightGray};
  width: 100%;
  height: 18px;
  border-radius: 10px;
`;

export const ProgressFill = styled.div`
  background: ${colors.ninetyDegGradient};
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.progress && props.progress};
  height: 18px;
  border-radius: 10px;
  transition: width 200ms ease-in-out;
`;
