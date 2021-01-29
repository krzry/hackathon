import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  h2: { marginTop: theme.spacing(2) },
  ul: { columnCount: "2" },
  li: { listStyleType: "none" },
}));

const AnimeList = ({
  input,
  defData,
  setChosen,
  setInput,
  searchFn,
  searchEpisode,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const selectFn = (e, data) => {
    e.preventDefault();
    setChosen(data);
    searchEpisode(data.mal_id);
    history.push("/about");
  };

  const [altSearch, setaltSearch] = useState("");
  const onChangeTextField = (e) => {
    setaltSearch(e);
  };

  const confirmFn = (e) => {
    e.preventDefault();
    searchFn(altSearch);
    setInput(altSearch);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={11}>
          <Grid container spacing={1} justify="center">
            <Grid item xs={6}>
              <h2 className={classes.h2}>Results for: {input}</h2>
            </Grid>
            <Grid item xs={6}>
              <form onSubmit={confirmFn}>
                <TextField
                  style={{ float: "right", margin: "0" }}
                  id="standard-basic"
                  label="search anime.."
                  margin="normal"
                  defaultValue={altSearch}
                  onChange={(e) => onChangeTextField(e.target.value)}
                />
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <ul className={classes.ul}>
            {defData.map((row, i) => (
              <li key={i} className={classes.li}>
                <Link href="#" onClick={(e) => selectFn(e, row)}>
                  {row.title}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      ;
    </div>
  );
};

export default AnimeList;
