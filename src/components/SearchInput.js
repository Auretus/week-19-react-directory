import React from "react";

function SearchInput(props) {
  return (
    <div>
      <input
        style={{ width: "30%" }}
        className="center"
        value={props.results}
        onChange={props.handleInputChange}
        placeholder="Type a first or last name"
        id="name"
      />
    </div>
  );
}
export default SearchInput;