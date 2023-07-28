import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieTheatre } from "../../api/movieTheatre";
import { getMovieById } from "../../api/movieDetailsApi";
import { Spinner } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";

export default function TheatrePage() {
  const [theatreDetails, setTheatreDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    init();
  }, []);
  const { movieId } = useParams();
  // console.log(movieId);
  const getTheatres = async () => {
    const theatresData = await movieTheatre(movieId);
    setTheatreDetails(theatresData);
    console.log(theatreDetails);
  };
  const getMovieDetails = async () => {
    const moviesData = await getMovieById(movieId);
    setMovieDetails(moviesData);
    console.log(movieDetails);
  };

  const init = async () => {
    await Promise.all([getMovieDetails(), getTheatres()]);
    setIsLoading(false)
  };
  return (
    <div>
      <div>
        <Navbar/>
        {/*  */}
      </div>
      <div  className="text-center text-black fw-bolder">
        <div> {isLoading && <Spinner />}</div> 
        {!isLoading && (
          <div className="bg-light">
            <h2 > {movieDetails.name} </h2>
            <div>
              <span> {movieDetails.description} </span>
              <div className="text-white">
                <span className="badge text-bg-danger rounded-pill m-2 text-white">
                  {movieDetails.language}</span>
                <span className="badge text-bg-danger rounded-pill m-2 text-white">
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
          </div>
        )}
      </div>
    </div>
  );
}
