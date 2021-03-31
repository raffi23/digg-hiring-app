import React from "react";
import { Container, CustomCheckBox, Label } from "./CheckBoxInput.styles";
function CheckBoxInput({ label, name, value, checked, onChange }) {
  return (
    <Container>
      <CustomCheckBox
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <Label>{label}</Label>
    </Container>
  );
}

export default CheckBoxInput;
