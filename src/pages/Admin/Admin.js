import "./admin.css";
import React, { createContext, useEffect, useState } from "react";
import { getAllMovies } from "../../api/movieApi";
import { theatreApi } from "../../api/theatreApi";
import { bookingsApi } from "../../api/bookingsApi";
import { userApi } from "../../api/userApi";
import CWidget from "../../components/CWidget/CWidget";
import { key } from "../../utils/constants";
import TheatresTable from "../../components/Tables/TheatresTable";
import MoviesTable from "../../components/Tables/MoviesTable";
import BookingsTable from "../../components/Tables/BookingsTable";
import UsersTable from "../../components/Tables/UsersTable";
import Navbar2 from "../../components/Navbar2/Navbar2";

export const WedgetContext = createContext();
export default function Admin() {
  const [theatres, setTheatres] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState({
    movies: 0,
    theatres: 0,
    bookings: 0,
    users: 0,
  });

  const allPromise = async () => {
    await Promise.all([
      getMovies(),
      getAllTheatres(),
      getAllBookings(),
      getAllUsers(),
    ]);
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
  // bookings api
  const getAllBookings = async () => {
    const bookings = await bookingsApi();
    setBookings(bookings);
    // console.log(response);
    count.bookings = bookings.length;
    setCount({ ...count });
  };
  //user api
  const getAllUsers = async () => {
    const users = await userApi();
    setUsers(users);
    // console.log(response);
    count.users = users.length;
    setCount({ ...count });
  };
  // state for open tables
  const [showMoviesTable, setShowMoviesTable] = useState(false);
  const [showTheatresTable, setShowTheatresTable] = useState(false);
  const [showBookingsTable, setShowBookingsTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);
  const wedgetClick = (id) => {
    setShowMoviesTable(false);
    setShowTheatresTable(false);
    setShowBookingsTable(false);
    setShowUsersTable(false);
    if (id === "MOVIE") {
      setShowMoviesTable(true);
    } else if (id === "THEATRE") {
      setShowTheatresTable(true);
    } else if (id === "BOOKING") {
      setShowBookingsTable(true);
    } else if (id === "USER") {
      setShowUsersTable(true);
    }
  };
  const show = {};
  show[key.THEATRE] = showTheatresTable;
  show[key.MOVIE] = showMoviesTable;
  show[key.BOOKING] = showBookingsTable;
  show[key.USER] = showUsersTable;

  return (
    <div>
      <Navbar2 />
      <div className="container-fluid bg-light  text-center ">
        <h1 className="text-primary">
          Welcome , {localStorage.getItem("name")} !
        </h1>
        <h5 className="text-muted">
          Take a quick look at your {localStorage.getItem("userTypes")} stats
          below{" "}
        </h5>
        <CWidget count={count} wedgetClick={wedgetClick} show={show} />
        <br />
        <div>
          {showTheatresTable && (
            <TheatresTable theatres={theatres} setTheatres={setTheatres} />
          )}
          {showMoviesTable && <MoviesTable movies={movies} />}
          {showBookingsTable && (
            <BookingsTable bookings={bookings} setBookings={setBookings} />
          )}
          {showUsersTable && <UsersTable users={users} setUsers={setUsers}/>}
        </div>
      </div>
    </div>
  );
}
