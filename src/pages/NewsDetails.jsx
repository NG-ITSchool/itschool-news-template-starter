import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { getNewsDetails } from "../api/adapters";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./NewsDetails.module.css";
import { getFormattedDate } from "../utils/date";

export function NewsDetails() {
  const params = useParams();
  const newsId = params.newsId + "/" + params["*"];

  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);

  const newsDetails = useFetch(newsDetailsEndpoint);

  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;

  return (
    <Layout>
      <Container className={`${styles.newsDetails} text-start`}>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <h1 className="my-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div dangerouslySetInnerHTML={{ __html: image }} className="mb-4" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="fw-bold">
                <p>{author}</p>
                <p>{getFormattedDate(date)}</p>
              </div>
              <Button variant="success">Add to favorites</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
