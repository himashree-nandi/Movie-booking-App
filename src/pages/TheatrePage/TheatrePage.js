import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieTheatre } from "../../api/movieTheatre";
import { getMovieById } from "../../api/movieDetailsApi";
import { Spinner } from "react-bootstrap";
import Navbar from "../../components/Navbar";
//--------
//  import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';

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
        {/* <Navbar expand="lg" className="bg-dark text-light">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">MBA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="text-white">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
            <Button variant="outline-black" className="btn btn-danger">LogOut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
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
