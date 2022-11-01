import { TextField } from "@mui/material";
import React from "react";

function Input({type, lable, name, value, handleChange}) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={name}
      label={lable}
      name={name}
      type={type}
      autoComplete={name}
      autoFocus
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
}

export default Input;
