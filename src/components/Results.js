import React from "react";
import ResultCard from "./ResultCard";

function Results(props) {
  const suggestedName = props.suggestedNames.map((eachName) => {
    return <ResultCard key={eachName} eachName={eachName} />;
  });

  return <h1 className="card-name">{suggestedName}</h1>;
}

export default Results;
