import React from "react";

function Search(props) {
  function handleChange(event) {
    props.onInputChange(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Type keyword"
      onChange={handleChange}
      className="Search"
    />
  );
}

export default Search;
