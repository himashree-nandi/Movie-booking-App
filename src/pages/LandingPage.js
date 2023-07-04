import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { getAllMovies } from "../api/movieApi";
import { CSpinner } from "@coreui/react";
import MoviesList from "../components/MoviesList/MoviesList";

function LandingPage() {
  const [moviesData, setMoviesData] = useState(null);

  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMoviesData(movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  // const getMoviesData = () => {
  //   console.log(moviesData);
  //   return moviesData.map((movie, index) => (
  //     <MovieCard key={index} MovieDetail={movie} />
  //   ));
  // };
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="text-center">
        {moviesData === null ? (
          <CSpinner color="primary" variant="grow" />
        ) : (
          <MoviesList moviesData={moviesData} />
        )}
      </div>
    </div>
  );
}
export default LandingPage;
