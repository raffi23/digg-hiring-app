import styled from "styled-components";
import { windowSizes } from "../../../Shared/SharedStyles";

export const ChoicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: auto;
  gap: 10px;
`;
