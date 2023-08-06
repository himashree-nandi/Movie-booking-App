import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel";
import { getAllMovies } from "../../api/movieApi";
import { CSpinner } from "@coreui/react";
import MoviesList from "../../components/MoviesList/MoviesList";
let allMovies=[]
function LandingPage() {
  const [moviesData, setMoviesData] = useState(null);

  // function for search movie
  const filterMovie=(searchValue)=>{
    console.log(allMovies)
    const movieFilter=allMovies.filter((movie)=>{
      const movieName=movie.name.toLowerCase()
      console.log(movieName)
      return movieName.startsWith(searchValue.toLowerCase())
    })
    setMoviesData(movieFilter)
  }
  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMoviesData(movies);
      allMovies=movies

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
      <Navbar filterMovie={filterMovie}/>
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
