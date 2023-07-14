import "./admin.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAllMovies } from "../../api/movieApi";
import { theatreApi } from "../../api/theatreApi";
import { bookingsApi } from "../../api/bookingsApi";
import { userApi } from "../../api/userApi";
import CWedget from "../../components/CWedget/CWedget";
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
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-light  text-center ">
        <h1 className="text-primary">
          Welcome {localStorage.getItem("name")} !
        </h1>
        <h5 className="text-muted">
          Take a quick look at your {localStorage.getItem("userTypes")} stats
          below{" "}
        </h5>
        <br />
      </div>
      <CWedget count={count}/>
    </div>
  );
}
