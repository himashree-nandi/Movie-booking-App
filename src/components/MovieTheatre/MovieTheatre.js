import React from "react";
import { Link } from "react-router-dom";

function MovieTheatre({ theatreDetails, movieId }) {
  return (
    <div>
      {theatreDetails.map((theatre) => TheatreComponent(theatre, movieId))}
    </div>
  );
}
export default MovieTheatre;

function TheatreComponent(theatre, movieId) {
  return (
    <>
      <Link
        to={`/buyTickets/${movieId}/${theatre._id}`}
        className="text-decoration-none fw-bold"
      >
        <div
          style={{ border: "1px solid grey", cursor: "pointer" }}
          className="row py-4"
        >
          <div className="col  align-items-center" style={{fontSize:"18px",textAlign:"center"}}>
            <div className="text-center">
              <h5>{theatre.name}</h5>
            </div>
          </div>

          <div className="col">
            <div className=" text-success fw-bold">
              <i className="bi bi-phone text-success"></i>
              m-Ticket
            </div>
          </div>

          <div className="col">
            <div className=" text-danger"style={{fontSize:"18px"}} >
              <i className="bi bi-cup-straw text-danger"></i>
              Food And Beverages
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
