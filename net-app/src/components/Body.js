import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
  },
  h2: { margin: "0", textAlign: "center" },
}));

const Body = ({ setMatches, input, setInput, searchFn }) => {
  const classes = useStyles();

  const onChangeTextField = (e) => {
    setInput(e);
  };

  const confirmFn = (e) => {
    e.preventDefault();
    setMatches(true);
    searchFn(input);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8}>
          <h2 className={classes.h2}>Search Anime:</h2>
          <form onSubmit={confirmFn}>
            <TextField
              id="outlined-basic"
              label="Search anime"
              variant="outlined"
              margin="normal"
              className={classes.text}
              autoFocus
              fullWidth
              defaultValue={input}
              onChange={(e) => onChangeTextField(e.target.value)}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
