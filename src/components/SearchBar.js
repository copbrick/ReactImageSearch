import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form id="form" onSubmit={handleFormSubmit}>
        <label>Enter Search Term:</label>
        <input value={term} onChange={handleChange} />
        <button
          id="submitBtn"
          type="submit"
          form="form"
          value={term}
          className="btn btn-primary"
          onClick={handleChange}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
