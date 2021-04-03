import styled from "styled-components";
import { colors } from "./SharedStyles";

/*
Heading of type label

props:
-> large: makes text larger
*/

export const Heading = styled.label`
  color: ${colors.textGray};
  font-size: ${(props) => (props.large ? "26pt" : "18pt")};
`;
