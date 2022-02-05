import { Button } from "@mui/material";
import React from "react";

const FormButton = ({ text, onclick }) => {
  return (
    <Button className="button" variant="contained" onClick={onclick}>
      {text}
    </Button>
  );
};

export default FormButton;
