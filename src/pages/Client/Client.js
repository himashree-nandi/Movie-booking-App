import React, { createContext } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/movieApi";
import { theatreApi } from "../../api/theatreApi";
import { key } from "../../utils/constants";
import TheatresTable from "../../components/Tables/TheatresTable";
import MoviesTable from "../../components/Tables/MoviesTable";
import CwedgetCard from "../../components/CwidgetCard/CwidgetCard";
import './client.css'
export const WedgetContext = createContext();
export default function Client() {
  const [theatres, setTheatres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState({
    movies: 0,
    theatres: 0,
  });
  const allPromise = async () => {
    await Promise.all([getMovies(), getAllTheatres()]);
  };
  useEffect(() => {
    allPromise();
  }, []);
  // movies api
  const getMovies = async () => {
    const movies = await getAllMovies();
    setMovies(movies);
    count.movies = movies.length;
    setCount({ ...count });
  };

  // theatres api
  const getAllTheatres = async () => {
    const theatres = await theatreApi();
    setTheatres(theatres);
    count.theatres = theatres.length;
    setCount({ ...count });
  };
  // state for open tables
  const [showMoviesTable, setShowMoviesTable] = useState(false);
  const [showTheatresTable, setShowTheatresTable] = useState(false);
  const wedgetClick = (id) => {
    setShowMoviesTable(false);
    setShowTheatresTable(false);

    if (id === "MOVIE") {
      setShowMoviesTable(true);
    } else if (id === "THEATRE") {
      setShowTheatresTable(true);
    }
  };
  const show = {};
  show[key.THEATRE] = showTheatresTable;
  show[key.MOVIE] = showMoviesTable;

  return (
    <div>
      <Navbar2 />
      <div className="container-fluid bg-light  text-center ">
        <h1 className="text-primary">
          Welcome {localStorage.getItem("name")} !
        </h1>
        <h5 className="text-muted">
          Take a quick look at your {localStorage.getItem("userTypes")} stats
          below
        </h5>
        <br />
      
      <div className=" m-5 d-flex">
        <div className="m-2">
          <CwedgetCard
            title="Theatres"
            wedgetClick={wedgetClick}
            show={show}
            id={key.THEATRE}
            value={count.theatres}
            progress={{ value: count.theatres }}
            icon="bi-building"
          />
        </div>
        <div className="m-2">
          <CwedgetCard
            title="Movies"
            wedgetClick={wedgetClick}
            show={show}
            id={key.MOVIE}
            value={count.movies}
            icon="bi-film"
            progress={{ value: count.movies }}
          />
        </div>
      </div>
      <br />
      <hr />
      {showTheatresTable && (
        <div>
          <TheatresTable theatres={theatres} />
        </div>
      )}
      {showMoviesTable && (
        <div>
          <MoviesTable movies={movies} />
        </div>
      )}
    </div>
    </div>
  );
}
