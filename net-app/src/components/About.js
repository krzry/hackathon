import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { UserContext } from "../UserContext";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  photo: {
    width: theme.spacing(35),
    height: theme.spacing(50),
    marginBottom: theme.spacing(2),
  },
  h2: { marginBottom: theme.spacing(2) },
  title: { width: "100%" },
  button: { marginTop: theme.spacing(3), float: "right" },
  a: {
    "&:hover": {
      color: "blue",
    },
    textDecoration: "none",
    color: "black",
  },
}));

const About = () => {
  const classes = useStyles();
  const history = useHistory();
  const { chosen, epData } = useContext(UserContext);

  const backFn = () => {
    history.push("/");
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <div className={classes.root}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={11}>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <h2 className={classes.h2}>{chosen.title}</h2>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={backFn}
                  >
                    Go back
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={3} justify="center">
                <Grid item xs={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src={chosen.image_url}
                    className={classes.photo}
                    variant="square"
                  />
                  <Typography variant="subtitle2" gutterBottom>
                    Rating: {chosen.score}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Status: {chosen.airing ? "Currently Airing" : "Done Airing"}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Episodes: {chosen.episodes}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Rated: {chosen.rated}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" gutterBottom>
                    Synopsis:
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Synopsis: {chosen.synopsis}
                  </Typography>

                  <h2>Episode list</h2>
                  <ul>
                    {epData.map((row) => (
                      <li key={row.episode_id}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={row.video_url}
                          className={classes.a}
                        >
                          Episode: {row.episode_id} - {row.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
