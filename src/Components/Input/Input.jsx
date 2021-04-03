import React from "react";
import { Container, InputLabel, InputText, InputError } from "./Input.styles";

/*
  type: input type
  placeholder: placeholder for an empty component text
  label: text to explain selection
  value: current selection
  fullWidth: determines if the component should take 100% of container width
  name: state name
  onChange: takes a function for on value changes
  error: takes a text to display as an error
*/

function Input({
  fullWidth,
  label,
  placeholder,
  error,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <Container fullWidth={fullWidth}>
      {label && <InputLabel lift={value}>{label}</InputLabel>}
      <InputText
        lift={value?.length ? true : false}
        fullWidth={fullWidth}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {error && <InputError>{error}</InputError>}
    </Container>
  );
}

export default Input;
