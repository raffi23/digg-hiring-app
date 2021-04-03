import React from "react";
import {
  Container,
  InputLabel,
  SelectInput,
  InputError,
} from "./Select.styles";

/*
  label: text to explain selection
  value: current selection
  fullWidth: determines if the component should take 100% of container width
  name: state name
  onChange: takes a function for on value changes
  error: takes a text to display as an error
*/

function Select({ children, label, value, fullWidth, name, onChange, error }) {
  return (
    <Container fullWidth={fullWidth}>
      {label && (
        <InputLabel lift={value?.length ? true : false}>{label}</InputLabel>
      )}
      <SelectInput
        lift={value?.length ? true : false}
        fullWidth={fullWidth}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      >
        {children}
      </SelectInput>
      {error && <InputError>{error}</InputError>}
    </Container>
  );
}

export default Select;
