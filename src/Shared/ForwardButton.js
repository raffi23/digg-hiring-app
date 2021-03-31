import styled from "styled-components";
import { colors } from "./SharedStyles";

export const ForwardButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50px;
  color: white;
  font-size: 22px;
  background: ${colors.ninetyDegGradient};
  height: 75.2px;
  width: max-content;
  padding: 0 60px;
  cursor: pointer;
`;
