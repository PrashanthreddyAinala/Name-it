import React, { useState } from "react";

import "../styles.css";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

const name = require("@rstacruz/startup-name-generator");
export default function App() {
  const [expanded, setExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  function handleChange(input) {
    setExpanded(!input);
    setSuggestedNames(input ? name(input) : []);
  }

  return (
    <div className="App">
      <Header expanded={expanded} />
      <Search onInputChange={handleChange} />
      <Results suggestedNames={suggestedNames} />
    </div>
  );
}
