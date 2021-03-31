import React from "react";
import { Container, InputLabel, InputText, InputError } from "./Input.styles";

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
