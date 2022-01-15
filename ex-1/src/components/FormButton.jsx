import { Button } from "@mui/material";
import React from "react";

const FormButton = ({ text, action }) => {
  return (
    <Button className="button" variant="contained" onClick={action}>
      {text}
    </Button>
  );
};

export default FormButton;
