import styled from "styled-components";

export const Shape = styled.div`
  position: fixed;
  top: ${(props) => props.top && props.top};
  bottom: ${(props) => props.bottom && props.bottom};
  right: ${(props) => props.right && props.right};
  left: ${(props) => props.left && props.left};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  transform: ${(props) => props.rotate && `rotateZ(${props.rotate})`};
  background: ${(props) => props.bg && `url("${props.bg}")`} no-repeat center;
  background-size: contain;
  transition: all 800ms ease-in-out;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "-1")};
`;
