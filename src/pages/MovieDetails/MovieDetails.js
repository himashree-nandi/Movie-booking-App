import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import { getMovieById } from "../../api/movieDetailsApi";
import "./movieDetails.css";
import { Button } from "react-bootstrap";
export default function MovieDetails() {
  const [movieDetails, setMoviesData] = useState(null);
  const { movieId } = useParams();
  console.log(movieId)

  const fetchMoviesDetails = async () => {
    const movies = await getMovieById(movieId);
    setMoviesData(movies);
    console.log(movies);
  };
  useEffect(() => {
    fetchMoviesDetails();
  }, []);
  return (
    <>
    <Navbar2 />
    <div className="app text-center">
    
      <br />

        {!movieDetails ? (
          <CSpinner color="primary" variant="grow" />
        ) : (
          <>
            <div className=" row bg-black">
              <ReactPlayer
                url={movieDetails.trailerUrl}
                controls={true}
                width="100%"
                height="30vw"
              />
            </div>
            <div style={{ padding: "40px" }} className="row my-4 p-3">
              <div className="col-lg-4 col-md-12">
                <img src={movieDetails.posterUrl} width={350} height={500} />
              </div>
              <div className="col">
                <h1 className="movieName">{movieDetails.name}</h1>
                <h2>About the Movie</h2>

                <h5>{movieDetails.description}</h5>
                <br/>
                <div>
                  <span className="text-black px-3 m-3" style={{border:"2px solid black",borderRadius:"10px"}}>
                    {movieDetails.language}{" "}
                  </span>
                  <span className="text-black px-3 m-3" style={{border:"2px solid black",borderRadius:"10px"}}>
                    {" "}
                    {movieDetails.releaseStatus}{" "}
                  </span>
                </div>
                <hr />
                <h5>Cast</h5>

                {movieDetails.casts.map((name,index) => {
                  return <li key={index}>{name}</li>;
                })}

                <h4 className="text-justify mt-4">
                  {" "}
                  Directed by {movieDetails.director}
                </h4>
                <h4 className="text-justify">
                  {" "}
                  Released On {movieDetails.releaseDate}
                </h4>

                <Link to={`/buyTickets/${movieId}`}>
                <Button className="btn btn-danger text-white p-3 m-3">
                  Book tickets
                  </Button>
                </Link>

              </div>
            </div>
          </>
        )}
      </div>
      </>
  );
}
