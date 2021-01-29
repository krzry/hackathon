import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    alignItems: "center",
  },
  navBut: {
    fontSize: theme.spacing(2),
    padding: theme.spacing(3),
    listStyleType: "none",
    cursor: "pointer",
  },
  a: {
    "&:hover": {
      color: "blue",
    },
    textDecoration: "none",
    color: "black",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { setInput, setMatches } = useContext(UserContext);
  const history = useHistory();

  const homeFn = () => {
    setMatches(false);
    setInput("");
    history.push("/");
  };

  return (
    <div className={classes.nav}>
      <h1 style={{ cursor: "pointer", margin: "0" }} onClick={homeFn}>
        Jikan API
      </h1>
      <ul style={{ display: "flex", margin: "0px" }}>
        <li className={classes.navBut}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jikan.docs.apiary.io/"
            className={classes.a}
          >
            Documentation
          </a>
        </li>
        <li className={classes.navBut}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jikan.moe/faqs"
            className={classes.a}
          >
            FAQs
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
