import styled from "styled-components";
import { containerSpacing } from "./SharedStyles";

/* 
  page container:

  a DIV element that can take multiple props,

  by default 
  
  -> flex - column

  react component props:

  center: centers direct elements
  contain: adds padding by 20px
  fullWidth: adds 100% width, if not specified defaults to 90% and adds margin to keep page centered
*/

export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.center && "center"};
  align-items: ${(props) => props.center && "center"};
  margin: 0 auto;
  padding: ${(props) => (props.contain ? `${containerSpacing}` : "0")};
  width: ${(props) => (props.fullWidth ? "100%" : "90%")};
  height: 100%;
  max-width: 1920px;
  min-height: 84vh;
`;
