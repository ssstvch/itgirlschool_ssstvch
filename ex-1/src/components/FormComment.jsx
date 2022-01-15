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

const renderComment = (event) => {
  console.log(event.target);
  let inputsNode = document.querySelectorAll(".formInput"),
    inputs = [];
  inputsNode.forEach((i) => inputs.push(i.lastChild.firstChild.value));

  for (let value of inputs) {
    let check = value.replace(/(xxx)|(ххх)|(viagra)/gim, "***");

    if (inputs[0] == value) {
      return <Typography>{`<b>Имя пользователя:</b> ${check}`}</Typography>;
    } else if (inputs[1] == value) {
      return <Typography>{`<b>Тема комментария:</b> ${check}`}</Typography>;
    } else {
      return <Typography>{`<b>Текст комментария:</b> ${check}`}</Typography>;
    }
  }
};

const FormComment = () => {
  return (
    <FormControl
      sx={{
        p: "1.5vw 1.5vw 3vw 1.5vw",
        border: "1px solid silver",
        borderRadius: "4px",
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
        return <FormInput key={i.id} label={i.label} />;
      })}

      <FormButton text={`Send`} action={renderComment} />
    </FormControl>
  );
};

export default FormComment;
