import Card from "react-bootstrap/Card";
import "../../styles/card.css";
function CommonCard({ description, name, src, isArabic, ...rest }) {
  return (
    <Card {...rest}>
      <div className="card-img-container">
        <Card.Img variant="top" src={src} />
      </div>
      <Card.Body>
        <Card.Text>{name}</Card.Text>
        <Card.Title
          style={isArabic ? { textAlign: "right" } : { textAlign: "left" }}
        >
          {description}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CommonCard;
