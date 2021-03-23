import "./App.css";
import React, { useState } from "react";
import AddMovie from "./components/AddMovie";
import { movies } from "./components/Movies";
import MovieList from "./components/MovieList";
import MoviesSearch from "./components/MoviesSearch";

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);
  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: Math.random() };
    console.log("movie", newMovie);
    setMovieList([...movieList, newMovie]);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newList = movieList.filter((movie) => movie.id !== id);
    setMovieList(newList);
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Movie App</h1>
        <MoviesSearch
          setNameSearch={setNameSearch}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        />
        <MovieList
          movieList={movieList}
          nameSearch={nameSearch}
          ratingSearch={ratingSearch}
          handleDelete={handleDelete}
        />
      </div>
      <AddMovie onAdd={handleAddMovie} />
    </div>
  );
}

export default App;
