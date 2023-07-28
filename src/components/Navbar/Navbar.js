import { TOKEN } from "../../utils/constants";
import isLoggedIn from "../../utils/helper";
import { useNavigate } from "react-router-dom";
//--------
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function Navigation() {
  const token = localStorage.getItem(TOKEN);
  const isLogin = isLoggedIn();
  const navigate = useNavigate();
  const onAuthButtonClick = () => {
    if (isLogin) {
      localStorage.clear();
    }
    navigate("/login");
  };
  return (
    <div className=" sticky-top bg-dark">
      {/* //   className="  container-fluid sticky-top bg-dark "
    //   style={{ overflow: "hidden" }}
    // >
    //   <div className="row text-white p-3 ">
    //     <div className="col-4" style={{ fontWeight: "600", fontSize: "25px" }}>
    //       <h2>bookmyMovie</h2>
    //     </div>
    //     <div className="col-6">
    //       <input
    //         size="lg"
    //         type="text"
    //         className="form-control"
    //         placeholder="Search Movie"
    //       />
    //     </div>
    //     <div className="col-1">
    //       <Button className="btn btn-danger text-white" onClick={onAuthButtonClick}>
    //         {(token) ? "Logout" : "Login"}
    //       </Button>
    //     </div>
    //   </div> */}
      <Navbar expand="lg" className="bg-dark text-light sticky-top ">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">
            MBA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="text-white">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search movie"
                className="me-5"
                aria-label="Search"
              />
              <Button
                variant="outline-black"
                className="btn btn-danger"
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
