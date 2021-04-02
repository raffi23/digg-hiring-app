import styled from "styled-components";
import EditSVG from "../../Images/edit.svg";
import { colors } from "../../Shared/SharedStyles";

export const EditButton = styled.div`
  background: url(${EditSVG}) no-repeat center;
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

export const HeadingLabel = styled.h3`
  color: ${colors.textPurple};
`;

export const InformLabel = styled.p`
  display: inline;
  font-weight: 300;
`;
