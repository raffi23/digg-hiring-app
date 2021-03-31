import styled from "styled-components";
import { colors } from "./SharedStyles";

export const Heading = styled.label`
  color: ${colors.textGray};
  font-size: ${(props) => (props.large ? "36px" : "22px")};
`;
