import { Link } from "react-router-dom";

const Anime_Search = () => {
  return (
    <article className="my-3">
      <header className="my-3 text-title">
        <h2 className="fs-6 text-uppercase text-light fw-bold">Anime Search</h2>
      </header>
      <section className="d-flex flex-column flex-sm-row">
        <Link
          to="/TopAnime"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Rankings
        </Link>
        <Link
          to="/Studios"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Studios
        </Link>
        <Link
          to="/Season"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Seasons
        </Link>
      </section>
    </article>
  );
};
export default Anime_Search;
