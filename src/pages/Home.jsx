import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getNewsList } from "../api/adapters";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { useFetch } from "../utils/hooks/useFetch";

export function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const gamesNewsEndpoint = getNewsCategoriesEndpoint("games", 1, 6);
  const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 6);

  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let gamesData = useFetch(gamesNewsEndpoint);
  let fashionData = useFetch(fashionNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedGamesData = getNewsList(gamesData);
  const adaptedFashionData = getNewsList(fashionData);
  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p className="d-flex justify-content-center pt-3">
            Look at the all news about technology in section{"  "}
            <Link to="/category/technology" className="text-success ms-2">
              Tech
            </Link>{" "}
            .
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          <NewsCardList newsList={adaptedFootballData} />
          <p className="d-flex justify-content-center pt-3">
            Look at the all news about football in section{"  "}
            <Link to="/category/technology" className="text-success ms-2">
              Football
            </Link>{" "}
            .
          </p>
        </Container>
      </section>
      <section className="games my-5">
        <Container>
          <h1 className="mb-5 pt-3">Games</h1>
          <NewsCardList newsList={adaptedGamesData} />
          <p className="d-flex justify-content-center pt-3">
            Look at the all news about games in section{"  "}
            <Link to="/category/technology" className="text-success ms-2">
              Games
            </Link>{" "}
            .
          </p>
        </Container>
      </section>
      <section className="fashion my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fashion</h1>
          <NewsCardList newsList={adaptedFashionData} />
          <p className="d-flex justify-content-center pt-3">
            Look at the all news about fashion in section{"  "}
            <Link to="/category/technology" className="text-success ms-2">
              Fashion
            </Link>{" "}
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">FAVORITES</h1>

          <p>Want to save some news to read them late?{"  "}</p>
          <p>
            Inside the news page you hava a button to add your news to
            favorites.
          </p>
          <p className="d-flex justify-content-center pt-3">
            {" "}
            Check your
            <Link to="/favorites" className="text-success mx-2">
              Favorites
            </Link>
            section to discover saved news!
          </p>
        </Container>
      </section>
    </Layout>
  );
}
