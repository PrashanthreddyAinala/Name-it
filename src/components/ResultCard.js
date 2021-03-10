import React from "react";

const nameUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
function ResultCard(props) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameUrl}${props.eachName}`}
    >
      <div className="result-card">
        <p>{props.eachName}</p>
      </div>
    </a>
  );
}

export default ResultCard;
