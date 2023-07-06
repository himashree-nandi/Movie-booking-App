import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export default function MovieCard({ movie }) {
  const { name, description, language, posterUrl, casts, director } = movie;
  return (
    <Card
      className="mx-3 my-3"
      style={{ width: "18rem",borderRadius:"15px",cursor:"pointer" }}
    >
      <Card.Img
        style={{ height: "25rem", borderRadius: "12px" }}
        variant="top"
        src={posterUrl}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
        <ListGroup.Item className="d-flex justify-content-between">
          <span style={{ fontWeight: 600 }} className="text-justify">
            Cast{" "}
          </span>
          <span className="font-weight-bold"> {casts.join(", ")} </span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="bg-black text-white" style={{borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px"}}>
        <div
          style={{ fontSize: "1.5rem" }}
          className="d-flex align-items-center justify-content-between"
        >
          <i className="bi bi-star-fill text-danger"></i>
          <span>60k</span>
          <Card.Link href="#" className="text-white" style={{textDecoration:"none"}}>
            See Trailer<i className="bi   bi-arrow-right-circle"></i>
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}
