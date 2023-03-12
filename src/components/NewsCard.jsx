import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NewsCard(props) {
  const { newsItem } = props;
  const { id, image, title, description } = newsItem;
  return (
    <Card className="h-100">
      <Link to={`/news/${id}`} className="text-dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
