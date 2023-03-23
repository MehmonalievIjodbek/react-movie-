import React, { useState, useRef, useEffect } from "react";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const inputRef = useRef(null);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.value);

    console.log('e.target.type', e.target.value);

    searchMovies(search, e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field inline">
          <input
            id="email_inline"
            type="search"
            placeholder="Search"
            className="validate"
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="typehhh"
              type="radio"
              value="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="typehhh"
              type="radio"
              value="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="typehhh"
              type="radio"
              value="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
