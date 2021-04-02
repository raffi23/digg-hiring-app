import styled from "styled-components";
import { colors } from "../../Shared/SharedStyles";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.fullWidth && "100%"};
  height: 60px;
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
  background: ${colors.lightGray};
  position: absolute;
  top: ${(props) => (props.lift ? "10%" : "30%")};
  font-size: ${(props) => (props.lift ? "15px" : "18px")};
  color: ${(props) =>
    props.lift ? `${colors.textPurple}` : `${colors.textGray}`};
  transition: font-size 200ms ease-in-out, top 200ms ease-in-out,
    color 200ms ease-in-out;
  z-index: 1;
`;

export const InputText = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  margin: ${(props) => props.lift && "15px 0 0 0"};
  width: ${(props) => props.fullWidth && "100%"};
  height: 100%;
  transition: margin 200ms ease-in-out;
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
