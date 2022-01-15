import "../styles/App.scss";
import React from "react";
import FormComment from "./FormComment";
import { Grid } from "@mui/material";
import { Comments } from "./Comments";

const App = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{ m: "0 auto", p: "4vw" }}>
        <FormComment item xs={4} />
        <Comments item xs={8} />
      </Grid>
    </React.Fragment>
  );
};

export default App;
