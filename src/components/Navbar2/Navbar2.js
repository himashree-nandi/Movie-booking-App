import React from "react";
import { TOKEN } from "../../utils/constants";
import { Button } from "react-bootstrap";
import isLoggedIn from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function Navbar2() {
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
<>
<Navbar expand="lg" className="bg-dark text-light sticky-top ">
        <Container fluid>
          <Navbar.Brand href="/" className="lg">
            <i className="text-danger">MBA</i>
          </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Button
              size="lg"
                variant="outline-black"
                className="btn btn-danger text-white"
                onClick={onAuthButtonClick}
              >
                {token ? "Logout" : "Login"}
              </Button>
            </Form>
        </Container>
      </Navbar>
</>    
  );
}
