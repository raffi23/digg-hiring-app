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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.center && "center"};
  margin: ${(props) => !props.fullWidth && `${containerSpacing} auto`};
  padding: ${(props) => (props.contain ? `${containerSpacing}` : "0")};
  width: ${(props) => (props.fullWidth ? "100%" : "90%")};
  max-width: 1400px;
  min-height: 84vh;
`;

export default PageContainer;
