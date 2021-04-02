import styled from "styled-components";
import { colors } from "../../../Shared/SharedStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 22px;
  color: ${(props) => props.varient === "primary" && "black"};
  color: ${(props) => props.varient === "secondary" && "white"};
  background: ${(props) => props.varient === "primary" && colors.lightGray};
  background: ${(props) =>
    props.varient === "secondary" && colors.ninetyDegGradient};
  height: 69px;
  width: max-content;
  padding: 0 40px;
  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 15px;
  height: 15px;
  margin: 0 10px 0 0;
`;

export const Text = styled.label`
  font-size: 18px;
  width: max-content;
`;
