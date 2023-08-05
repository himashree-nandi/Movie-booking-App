import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieTheatre } from "../../api/movieTheatre";
import { getMovieById } from "../../api/movieDetailsApi";
import { Spinner } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import MovieTheatre from "../../components/MovieTheatre/MovieTheatre";
import './theatrePage.css'
export default function TheatrePage() {
  const [theatreDetails, setTheatreDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = useParams();
  // console.log(movieId);
  const getTheatres = async () => {
    const theatresData = await movieTheatre(movieId);
    setTheatreDetails(theatresData.data);
    console.log(theatreDetails);
  };
  const getMovieDetails = async () => {
    const moviesData = await getMovieById(movieId);
    setMovieDetails(moviesData);
    console.log(movieDetails);
  };

  const init = async () => {
    await Promise.all([getMovieDetails(), getTheatres()]);
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        {/*  */}
      </div>
      <div className="text-center text-dark fw-bolder">
        <div> {isLoading && <Spinner />}</div>
        {!isLoading && (
          <>
            <div className="bg-light container-fluid">
              <Link to={`/movie/${movieId}/details`} className="link">
                <h1 className="moviename text-black"> {movieDetails.name} </h1>
              </Link>
              <div>
                <span> {movieDetails.description} </span>
                <div className="text-black">
                  <span className="badge text-bg-danger rounded-pill m-3 p-3 text-black">
                    {movieDetails.language}
                  </span>
                  <span className="badge text-bg-danger rounded-pill m-3 p-3 text-black">
                    {movieDetails.releaseStatus}
                  </span>
                </div>
                <hr />
                <h6 className="text-justify">
                  Directed by {movieDetails.director}
                </h6>
                <h6 className="text-justify">
                  Released On {movieDetails.releaseDate}
                </h6>
                <br />
              </div>
              <div className="container bg-white">
                <MovieTheatre
                  theatreDetails={theatreDetails}
                  movieId={movieId}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
