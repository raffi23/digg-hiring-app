import styled from "styled-components";
import { colors } from "../../Shared/SharedStyles";
import Check from "../../Images/check.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const CustomCheckBox = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 26px;
  width: 26px;
  transition: all 0.15s ease-out 0s;
  background: ${colors.lightGray};
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;

  &:checked {
    background: ${colors.oneTwentyDegGradient};
  }

  &:checked::before {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    content: url(${Check});
  }
`;
