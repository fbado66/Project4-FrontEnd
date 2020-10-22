import React from "react";

const SearchBar = (props) => {

 let handleInput = (evt) => {
    props.changeBasedOnInput(evt.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search By title"}
        value={props.SearchCategory}
        onChange={handleInput }
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
};

export default SearchBar;
