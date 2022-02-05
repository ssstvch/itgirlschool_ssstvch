import React, { useState, useEffect } from "react";
import FormComment from "./FormComment";
import { Grid, Container, Typography, Button } from "@mui/material";
import { Comment } from "./Comment";

const Feed = () => {
  // states
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments"))
  );
  const [inputText, setInputText] = useState({
    name: "",
    theme: "",
    comment: "",
  });

  // functions
  const addDataToStorage = (comment) => {
    comment["id"] = 1;
    localStorage.setItem("comments", JSON.stringify(comment));
  };
  const getSecondStorageData = (comment) => {
    let comments = JSON.parse(localStorage.getItem("comments"));
    comment["id"] = comments.id + 1;
    let newComments = [comments, comment].reverse();
    localStorage.setItem("comments", JSON.stringify(newComments));
  };
  const getStorageData = (comment) => {
    let comments = JSON.parse(localStorage.getItem("comments"));

    comments.reverse();
    comment["id"] = comments.length + 1;
    comments.push(comment);
    comments.reverse();
    localStorage.setItem("comments", JSON.stringify(comments));
  };
  const deleteComments = () => {
    localStorage.removeItem("comments");
    setComments(null);
  };

  // change comments state
  const addComment = () => {
    localStorage.getItem("comments") === null
      ? addDataToStorage(inputText)
      : localStorage.getItem("comments")[0] === "{"
      ? getSecondStorageData(inputText)
      : getStorageData(inputText);

    setComments(JSON.parse(localStorage.getItem("comments")));
    setInputText({ name: " ", theme: " ", comment: " " });

    setTimeout(() => {
      console.log(inputText);
    }, 2000);
  };

  // change input state
  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/(xxx)|(ххх)|(viagra)/gim, "***");
    setInputText({ ...inputText, [e.target.name]: value });
  };

  // useEffect for practice
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
    console.log(comments);
  }, [comments]);

  return (
    <Grid container spacing={1} sx={{ p: "3vw 2vw" }}>
      <FormComment
        xs={4}
        onclick={() => addComment()}
        onchange={handleChange}
        value={inputText}
      />
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

        <Container sx={{ height: "25vw", overflow: "auto" }}>
          {comments === null ? (
            <Typography sx={{ textAlign: "center", color: "silver" }}>
              No comments
            </Typography>
          ) : comments.length === undefined ? (
            <Container>
              <Comment
                sx={{ mt: "10vw" }}
                author={comments.name}
                theme={comments.theme}
                text={comments.comment}
                key={comments.id}
                id={comments.id}
                className={"firstComment"}
              />
              <Button
                variant="outlined"
                onClick={deleteComments}
                sx={{
                  ml: "2vw",
                  p: "0.5vw 0.8vw",
                  borderColor: "silver",
                  color: "dimGray",
                }}
              >
                Delete all comments
              </Button>
            </Container>
          ) : (
            <Container>
              {comments.map((_, index) => {
                return (
                  <Comment
                    author={_.name}
                    theme={_.theme}
                    text={_.comment}
                    key={_.id}
                    id={_.id}
                    className={index === 0 ? "firstComment" : ""}
                  />
                );
              })}
              <Button
                variant="outlined"
                onClick={deleteComments}
                sx={{
                  ml: "2vw",
                  p: "0.5vw 0.8vw",
                  borderColor: "silver",
                  color: "dimGray",
                }}
              >
                Delete all comments
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </Grid>
  );
};

export default Feed;
