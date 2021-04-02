import React from "react";
import {
  Brand,
  NavigationContainer,
  ProgressContainer,
  ProgressFill,
  ProgressLabel,
  ProgressView,
} from "./Navigation.styles";

function Navigation({ progress }) {
  return (
    <NavigationContainer>
      <Brand>digg</Brand>
      <ProgressContainer>
        <ProgressLabel>Progress:</ProgressLabel>
        <ProgressView />
        <ProgressFill progress={progress} />
      </ProgressContainer>
    </NavigationContainer>
  );
}

export default Navigation;
