import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

export function NewsDetails() {
  const params = useParams();
  const newsId = params.newsId + "/" + params["*"];
  return <Layout>{newsId}</Layout>;
}
