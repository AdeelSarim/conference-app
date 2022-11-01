import { Button } from "@mui/material";
import React from "react";

function SubmitButton({ handleOnClick }) {
  return (
    <Button variant="contained" onClick={handleOnClick}>
      Save
    </Button>
  );
}

export default SubmitButton;
