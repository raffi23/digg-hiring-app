import styled from "styled-components";
import { colors } from "../../Shared/SharedStyles";
import Arrow from "../../Images/arrow.svg";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.fullWidth && "100%"};
  height: 50px;
  background-color: ${colors.lightGray};
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 5px 10px;
  transition: border 200ms ease-in-out;

  &:focus-within {
    border: 1px solid ${colors.textPurple};
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.lift ? "10%" : "35%")};
  font-size: ${(props) => (props.lift ? "15px" : "18px")};
  color: ${(props) =>
    props.lift ? `${colors.textPurple}` : `${colors.textGray}`};
  transition: font-size 200ms ease-in-out, top 200ms ease-in-out,
    color 200ms ease-in-out;
  z-index: 1;
`;

export const SelectInput = styled.select`
  appearance: none;
  border: none;
  outline: none;
  background: url(${Arrow}) no-repeat 100% 50%;
  background-size: 1.2em;
  background-color: transparent;
  font-size: 18px;
  margin: ${(props) => props.lift && "15px 0 0 0"};
  width: ${(props) => props.fullWidth && "100%"};
  transition: margin 200ms ease-in-out;
  height: 100%;
  z-index: 2;
`;

export const InputError = styled.p`
  position: absolute;
  bottom: -10%;
  font-size: 1rem;
  color: red;
  z-index: 1;
  border-radius: 3px;
  background-color: ${colors.lightGray};
`;
