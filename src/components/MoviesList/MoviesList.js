import React from "react";
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesList(props) {
  const {moviesData} = props;

  const getMoviesData = () => {
    return moviesData.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ));
  };

  return <div>
        <h2 style={{fontWeight:"650"}}>Recommended Movies</h2>
    <div style={{flexFlow:"wrap"}} className="bg-white d-flex justify-content-center">
        {getMoviesData()}
    </div>
  </div>;
}
