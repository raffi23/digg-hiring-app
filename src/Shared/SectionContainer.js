import styled from "styled-components";
import { colors, containerSpacing, elementSpacing } from "./SharedStyles";

/* 
  section container:

  a DIV element that can take multiple props,

  by default 
  
  -> flex - column
  -> full container width
  -> takes elements height
  -> uses margin instead of gap for safari support

  react component props:

  row: switch flex to row
  contain: adds padding by 20px
  scontain: adds padding by 10px
  gap: adds gap between elements by 20px
  sgap: adds gap between elements by 10px
  line: adds border line
*/

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => props.row && "center"};
  padding: ${(props) => props.contain && containerSpacing};
  padding: ${(props) => props.scontain && elementSpacing};
  gap: ${(props) => props.gap && containerSpacing};
  gap: ${(props) => props.sgap && elementSpacing};
  width: 100%;
  height: max-content;
  border: ${(props) => props.line && `1px solid ${colors.lightGray}`};

  // Safari
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    & > * {
      margin: ${(props) => props.gap && `0 0 ${containerSpacing} 0`};
      margin: ${(props) => props.sgap && `0 0 ${elementSpacing} 0`};
      margin: ${(props) =>
        props.gap && props.row && `0 ${containerSpacing} 0 0`};
      margin: ${(props) =>
        props.sgap && props.row && `0 ${elementSpacing} 0 0`};
    }

    & > :last-child {
      margin: 0;
    }
  }
`;
