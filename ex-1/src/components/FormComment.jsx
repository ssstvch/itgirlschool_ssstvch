import React from "react";
import { FormControl, Typography } from "@mui/material";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import "../styles/App.scss";

const inputNames = [
  { id: "name", label: "Name" },
  { id: "theme", label: "Theme" },
  { id: "comment", label: "Comment" },
];

const FormComment = ({ onchange, value, onclick }) => {
  return (
    <FormControl
      sx={{
        p: "1.5vw 1.5vw 3vw 1.5vw",
        border: "1px solid silver",
        borderRadius: "4px",
        height: "22vw",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          p: "1.5vw 1vw",
          textTransform: "uppercase",
        }}
      >
        Leave a comment
      </Typography>

      {inputNames.map((i) => {
        let id = i.id;
        return (
          <FormInput
            key={id}
            label={i.label}
            inputName={id}
            onchange={onchange}
            value={value.id}
          />
        );
      })}

      <FormButton text={`Send`} onclick={onclick} />
    </FormControl>
  );
};

export default FormComment;
