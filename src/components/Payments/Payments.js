import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Payment({
  modal,
  movieDetails,
  theatreDetails,
  selectedSeats,
  confirmBooking,
  bookingsData,
  handleClose,
}) {
  return (
    <>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER SUMMARY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col">
                <h4>{movieDetails.name}</h4>
              </div>
              <div className="col">
                <h4>{selectedSeats.length} Tickets</h4>
              </div>
            </div>
            <p>{movieDetails.language}</p>
            <h6 className="text-lg">{theatreDetails.name}</h6>
            <div className="py-2 text-success fw-bold">m-Ticket</div>
            <hr />
            <div className="row">
              <h5 className="col">Total : </h5>
              <h5 className="col">
                Rs {movieDetails.price * selectedSeats.length}
              </h5>
            </div>
          </div>
          <br/>
          {bookingsData && (
            <div>
              {bookingsData.status === "SUCCESS" ? (
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img src={movieDetails.posterUrl} height={100} width={100} />

                  <h5 className="text-success fw-bolder"> Booking Confirmed !</h5>
                  <i class="bi bi-check2-circle text-success fw-bolder"></i>
                  <small> Booking Id : </small>
                  <h5 className="fw-bolder"> {bookingsData._id} </h5>
                </div>
              ) : (
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img src={movieDetails.posterUrl} height={100} width={100} />

                  <h5> Booking Failed !</h5>
                  <small>Please Retry </small>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!bookingsData &&
          <Button
          variant="danger text-white"
          size="lg"
          onClick={confirmBooking}
        >
          Confirm payment
        </Button>}
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Payment;
