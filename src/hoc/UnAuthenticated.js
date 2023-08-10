import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function UnAuthenticated() {
    const location=useLocation()
    const currentPath=location.pathname
    console.log(currentPath)
  return (
    <div className="bg-black text-danger vh-100 text-center d-flex flex-column align-items-center justify-content-center">
      <h1>You need to be logged in to access this page</h1>
      <br/>
      <Link to={`/login?redirectKey=${currentPath}`}>
        <Button size="lg" variant="danger" className="text-white">
          Login{" "}
        </Button>
      </Link>
    </div>
  );
}
