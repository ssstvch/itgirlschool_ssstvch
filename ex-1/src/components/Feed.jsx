import React, { useState, useEffect } from "react";
import FormComment from "./FormComment";
import { Grid, Container, Typography } from "@mui/material";
import { Comment } from "./Comment";

const checkComments = () => {
  let comment = JSON.parse(localStorage.getItem("comments"));
  comment.map((_, i) => {
    <Comment
      author={_.name}
      theme={_.theme}
      text={_.comment}
      key={_.id}
      id={_.id}
    />;
  });
};

const addDataToStorage = (comment) => {
  comment["id"] = 1;
  localStorage.setItem("comments", JSON.stringify(comment));
};

const getSecondStorageData = (comment) => {
  let comments = JSON.parse(localStorage.getItem("comments"));
  comment["id"] = comments.id + 1;
  let newComments = [comments, comment];
  console.log(newComments);
  localStorage.setItem("comments", JSON.stringify(newComments));
};

const getStorageData = (comment) => {
  let comments = JSON.parse(localStorage.getItem("comments"));
  comment["id"] = comments.length + 1;
  comments.push(comment);
  console.log(comments);
  localStorage.setItem("comments", JSON.stringify(comments));
};

const renderComment = () => {
  let inputsNode = document.querySelectorAll(".formInput"),
    comment = {},
    id,
    value,
    text;

  inputsNode.forEach((i) => {
    if (i.lastChild.firstChild.value.length === 0) {
      console.log(`No text`);
    } else {
      id = i.firstChild.innerHTML.toLowerCase();
      value = i.lastChild.firstChild.value;
      text = value.replace(/(xxx)|(ххх)|(viagra)/gim, "***");
      comment[id] = text;
    }
  });

  localStorage.getItem("comments") === null
    ? addDataToStorage(comment)
    : localStorage.getItem("comments")[0] === "{"
    ? getSecondStorageData(comment)
    : getStorageData(comment);

  console.log(comment);
};

const Feed = () => {
  const [comments, setComments] = useState();

  const addComment = (index) => {
    renderComment();
    setComments(index);
  };

  useEffect(() => {
    let comment = JSON.parse(localStorage.getItem("comments"));
    console.log(`У нас ${comments} комментариев`);
    return comment;
  });

  let comment = JSON.parse(localStorage.getItem("comments"));
  console.log(comment.length);

  return (
    <Grid container spacing={1} sx={{ p: "3vw 2vw" }}>
      <FormComment xs={4} onclick={() => addComment()} />
      <Container
        xs={8}
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

        {comment.length === undefined ? (
          <Comment
            author={comment.name}
            theme={comment.theme}
            text={comment.comment}
            key={comment.id}
            id={comment.id}
          />
        ) : comment != null ? (
          comment.map((_, i) => {
            <Comment
              author={_.name}
              theme={_.theme}
              text={_.comment}
              key={_.id}
              id={_.id}
            />;
          })
        ) : (
          <Typography sx={{ textAlign: "center", color: "silver" }}>
            No comments
          </Typography>
        )}
      </Container>
    </Grid>
  );
};

export default Feed;
