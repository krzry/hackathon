import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import { UserContext } from "./UserContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [matches, setMatches] = useState(false);
  const [input, setInput] = useState("");
  const [defData, setDefData] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [epData, setEpData] = useState([]);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <UserContext.Provider
        value={{
          matches,
          setMatches,
          input,
          setInput,
          defData,
          setDefData,
          chosen,
          setChosen,
          epData,
          setEpData,
        }}
      >
        <Router>
          <Route path="/" exact component={Header} />
          <Route path="/about" component={About} />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
