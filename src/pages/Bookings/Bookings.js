import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTheatresById } from "../../api/theatreApi";
import { getMovieById } from "../../api/movieDetailsApi";
import { CSpinner } from "@coreui/react";
import "./bookings.css";
import Cinema from "../../components/Cinema/Cinema";
import { Button } from "react-bootstrap";
import Payment from "../../components/Payments/Payments";
import { createBooking } from "../../api/bookingsApi";
export default function Bookings() {
  const { movieId, theatreId } = useParams();
  console.log(movieId);
  console.log(theatreId);
  const [theatreDetails, setTheatreDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [modal, setModal] = useState(false);
  const [bookingsData, setBookingsData] = useState(null);
  const getTheatres = async () => {
    const theatresData = await getTheatresById(theatreId);
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

  // onclick function for open modal
  const proceedPayment = () => {
    setModal(true);
  };
  // close payment modal
  const handleClose = () => {
    setModal(false);
    setBookingsData(null);
  };
  //onclick event for confirm booking
  const confirmBooking = async () => {
    const data = {
      theatreId: theatreId,
      movieId: movieId,
      userId: localStorage.getItem("id"),
      totalCost: selectedSeats.length * movieDetails.price,
      noOfSeats: selectedSeats.length,
      timing: "EVENING",
    };
    const res = await createBooking(data);
    console.log(res);

    const paymentSuccess = true;

    if (paymentSuccess) {
      res.data.status = "SUCCESS";
    } else {
      res.data.status = "FAILED";
    }
    setBookingsData(res.data);

  };
  return (
    <>
      <Navbar2 />
      <div className="text-center bg-black fullView">
        {isLoading && <CSpinner />}
        {!isLoading && (
          <div>
            <h1 className="moviename">{movieDetails.name}</h1>
            <div>
              <ShowCase />
              <Cinema
                movieDetails={movieDetails}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
              <p className="info">
                You have selected{" "}
                <span className="count">{selectedSeats.length}</span> seats for
                the price of{" "}
                <span className="total">
                  {selectedSeats.length * movieDetails.price} Rupees
                </span>
              </p>
            </div>
            <Button
              variant="danger"
              onClick={proceedPayment}
              className="btn btn-danger text-white"
              size="lg"
            >
              Proceed to payment
            </Button>
            {!isLoading && (
          <Payment
            modal={modal}
            setModal={setModal}
            movieDetails={movieDetails}
            theatreDetails={theatreDetails}
            selectedSeats={selectedSeats}
            confirmBooking={confirmBooking}
            bookingsData={bookingsData}
            handleClose={handleClose}
          />
        )}

          </div>
        )}
      </div>
    </>
  );
}
function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}
