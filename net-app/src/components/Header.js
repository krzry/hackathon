import React, { useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Body from "./Body";
import AnimeList from "./AnimeList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { UserContext } from "../UserContext";

const Header = () => {
  const {
    matches,
    setMatches,
    input,
    setInput,
    defData,
    setDefData,
    setChosen,
    setEpData,
  } = useContext(UserContext);

  const searchFn = (val) => {
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/search/anime?q=${val.toLowerCase()}`,
    })
      .then((data) => {
        setDefData(data.data.results);
        console.log(data.data.results);
      })
      .catch((err) => console.log(err));
  };

  const searchEpisode = (val) => {
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v3/anime/${val}/episodes`,
    })
      .then((data) => {
        setEpData(data.data.episodes);
        console.log(data.data.episodes);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        {matches ? (
          <AnimeList
            input={input}
            defData={defData}
            setChosen={setChosen}
            setInput={setInput}
            searchFn={searchFn}
            searchEpisode={searchEpisode}
          />
        ) : (
          <Body
            setMatches={setMatches}
            input={input}
            setInput={setInput}
            searchFn={searchFn}
          />
        )}
      </Container>
    </div>
  );
};

export default Header;
