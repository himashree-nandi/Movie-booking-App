import { TOKEN } from "../../utils/constants";
import isLoggedIn from "../../utils/helper";
import { useNavigate } from "react-router-dom";
//--------
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
export default function Navigation({ filterMovie }) {
  const token = localStorage.getItem(TOKEN);
  const isLogin = isLoggedIn();
  const navigate = useNavigate();
  const onAuthButtonClick = () => {
    if (isLogin) {
      localStorage.clear();
    }
    navigate("/login");
  };
  const inputChange = (e) => {
    filterMovie(e.target.value);
  };
  return (
    <div className=" sticky-top bg-dark">
      <Navbar expand="lg" className="bg-dark text-light sticky-top ">
        <Container fluid>
          <Navbar.Brand href="/" className="lg">
            <img
              src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo.png"
              width="80px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="text-white">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for Movies"
                className="me-5"
                aria-label="Search"
                onChange={inputChange}
              />
              <Button
                size="lg"
                variant="outline-black"
                className="btn btn-danger text-white"
                onClick={onAuthButtonClick}
              >
                {" "}
                {token ? "Logout" : "Login"}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
