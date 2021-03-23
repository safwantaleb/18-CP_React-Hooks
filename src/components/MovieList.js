import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ movieList, handleDelete, nameSearch, ratingSearch }) => {
  return (
    <div className="movies-container">
      {movieList
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(nameSearch.toLowerCase().trim()) &&
            movie.rating >= ratingSearch
        )
        .map((movie, index) => (
          <MovieCard
            movie={movie}
            key={index}
            handleDelete={(id) => handleDelete(id)}
          />
        ))}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default MovieList;
