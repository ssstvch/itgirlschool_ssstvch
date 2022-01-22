import React, { useState, useEffect } from "react";
import FormComment from "./FormComment";
import { Grid, Container, Typography } from "@mui/material";
import { Comment } from "./Comment";

const addDataToStorage = (comment) => {
  comment["id"] = 1;
  localStorage.setItem("comments", JSON.stringify(comment));
};

const getSecondStorageData = (comment) => {
  let comments = JSON.parse(localStorage.getItem("comments"));
  comment["id"] = comments.id + 1;
  let newComments = [comments, comment];
  console.log(newComments);
  localStorage.setItem("comments", JSON.stringify(newComments.reverse()));
};

const getStorageData = (comment) => {
  let comments = JSON.parse(localStorage.getItem("comments"));
  console.log(comments.reverse());
  comment["id"] = comments.length + 1;
  comments.push(comment);
  console.log(comments.reverse());
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
};

const Feed = () => {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments"))
  );

  const addComment = () => {
    renderComment();
    setComments(JSON.parse(localStorage.getItem("comments")));
  };

  useEffect(() => {
    console.log(
      `Количество комментариев: ${
        comments === null
          ? 0
          : comments.length === undefined
          ? 1
          : comments.length
      }`
    );
  }, [comments]);

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

        {comments === null ? (
          <Typography sx={{ textAlign: "center", color: "silver" }}>
            No comments
          </Typography>
        ) : comments.length === undefined ? (
          <Comment
            author={comments.name}
            theme={comments.theme}
            text={comments.comment}
            key={comments.id}
            id={comments.id}
          />
        ) : (
          comments.map((_) => {
            return (
              <Comment
                author={_.name}
                theme={_.theme}
                text={_.comment}
                key={_.id}
                id={_.id}
              />
            );
          })
        )}
      </Container>
    </Grid>
  );
};

export default Feed;
