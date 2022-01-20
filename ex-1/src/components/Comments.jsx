import { Container, Typography } from "@mui/material";
import React from "react";
import Comment from "./Comment";

export const Comments = ({ comment }) => {
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
      {comment.length ? (
        comment.map((com) => {
          <Comment
            key={com.id}
            id={com.id}
            author={com.author}
            theme={com.theme}
            text={com.text}
          />;
        })
      ) : (
        <Typography sx={{ textAlign: "center", color: "silver" }}>
          No comments
        </Typography>
      )}
    </Container>
  );
};
