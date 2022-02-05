import { Container, Typography } from "@mui/material";
import React from "react";

export const Comment = ({ author, theme, text, className }) => {
  return (
    <Container
      sx={{
        p: "0.8vw",
        m: "1vw auto",
        width: "40vw",
        border: "1px solid silver",
        borderRadius: "4px",
      }}
      className={className}
    >
      <Typography variant="p" component="span">
        {author}
      </Typography>{" "}
      <br />
      <Typography
        variant="p"
        component="span"
        sx={{
          fontWeight: "bolder",
        }}
      >
        {theme}
        <br />
      </Typography>
      <Typography
        variant="p"
        component="span"
        sx={{
          wordBreak: "break-word",
        }}
      >
        {text}
      </Typography>
    </Container>
  );
};
