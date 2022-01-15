import { Container, Typography } from "@mui/material";
import React from "react";

export const Comments = () => {
  return (
    <Container
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
          textAlign: "center",
        }}
      >
        Comments
      </Typography>
    </Container>
  );
};
