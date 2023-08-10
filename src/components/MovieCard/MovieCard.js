import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  const { name, language, posterUrl, director, _id } = movie;
  return (
    <>
      <Link key={_id} to={`movie/${_id}/details`}>
        <Card
          className="mx-3 my-3"
          style={{ width: "18rem", borderRadius: "15px", cursor: "pointer" }}
        >
          <Card.Img
            style={{ height: "25rem", borderRadius: "12px" }}
            variant="top"
            src={posterUrl}
          />
          <Card.Body style={{ textDecoration: "none" }}>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            {/* <Card.Text>{description}</Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <span style={{ fontWeight: 600 }} className="text-justify">
                Language{" "}
              </span>
              <span> {language} </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span style={{ fontWeight: 600 }} className="text-justify">
                Director{" "}
              </span>
              <span> {director} </span>
            </ListGroup.Item>
            {/* <ListGroup.Item className="d-flex justify-content-between">
          <span style={{ fontWeight: 600 }} className="text-justify">
            Cast{" "}
          </span>
          <span className="font-weight-bold"> {casts.join(", ")} </span>
        </ListGroup.Item> */}
          </ListGroup>
          <Card.Body
            className="bg-black text-white"
            style={{
              borderBottomRightRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ fontSize: "20px" }}
            >
              <i className="bi bi-star-fill text-danger"></i>
              <div>60k</div>
              See Trailer<i className="bi   bi-arrow-right-short"> </i>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
