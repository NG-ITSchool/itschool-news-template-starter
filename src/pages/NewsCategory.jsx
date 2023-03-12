import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

export function NewsCategory() {
  const { categoryId } = useParams();

  return <Layout>{categoryId}</Layout>;
}
