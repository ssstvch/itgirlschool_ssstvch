import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({ label }) => {
  return (
    <React.Fragment>
      <TextField
        label={label}
        className={`formInput`}
        variant="outlined"
        sx={{
          m: "0.5vw 0",
        }}
      />
    </React.Fragment>
  );
};

export default FormInput;
