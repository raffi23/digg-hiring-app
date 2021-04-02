import React from "react";
import { Container, Image, Text } from "./Choice.styles";

function Choice({ text, image, varient, onClick }) {
  return (
    <Container varient={varient} onClick={onClick}>
      {image && <Image src={image} />}
      <Text>{text}</Text>
    </Container>
  );
}

export default Choice;
