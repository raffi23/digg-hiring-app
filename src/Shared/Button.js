import styled from "styled-components";
import { colors } from "./SharedStyles";

/* 
action button

props:

varient:
-> primary: 90deg linear gradient button
-> secondary: gray styled button
*/

export const Button = styled.button`
  outline: none;
  border-radius: 50px;
  font-size: 22px;
  color: ${(props) => props.varient === "primary" && "white"};
  color: ${(props) => props.varient === "secondary" && "black"};
  border: ${(props) => props.varient === "primary" && "1px solid transparent"};
  border: ${(props) =>
    props.varient === "secondary" && `1px solid ${colors.darkGray}`};
  background: ${(props) =>
    props.varient === "primary" && colors.ninetyDegGradient};
  background: ${(props) => props.varient === "secondary" && "white"};
  height: 75.2px;
  width: max-content;
  padding: 0 60px;
  cursor: pointer;
`;
