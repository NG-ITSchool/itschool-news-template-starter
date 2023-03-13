import { useParams } from "react-router-dom";
import { getNewsList } from "../api/adapters";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { useFetch } from "../utils/hooks/useFetch";

export function NewsCategory() {
  const { categoryId } = useParams();

  const newsEndpoint = getNewsCategoriesEndpoint(categoryId);

  const news = useFetch(newsEndpoint);

  const adaptedNews = getNewsList(news);

  let title = "";

  switch (categoryId) {
    case "technology": {
      title = "Tech";
      break;
    }
    case "football": {
      title = "Football";
      break;
    }
    case "games": {
      title = "Games";
      break;
    }
    case "fashion": {
      title = "Fashion";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Layout>
      <h1 className="my-5">{title}</h1>
      <NewsCardList newsList={adaptedNews} />
    </Layout>
  );
}
