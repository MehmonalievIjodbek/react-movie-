import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Movies from "../Components/Movies";
import Search from "../Components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=5be153f0&s=all")
      .then((responce) => responce.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    console.log("str", str);
    console.log("type ", type);

    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=5be153f0&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((responce) => responce.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  return (
    <>
      <div className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? <Loader /> : <Movies movies={movies} />}
      </div>
    </>
  );
}
