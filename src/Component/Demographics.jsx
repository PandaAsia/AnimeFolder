import { Link } from "react-router-dom";

const Demographics = () => {
  return (
    <article className="my-3">
      <header className="my-3 text-title ">
        <h3 className="fs-6 text-uppercase text-light fw-bold">Demographics</h3>
      </header>
      <section className="d-flex flex-column flex-sm-row">
        {/* falta los links */}
        <Link
          to="/Animes/&genres=43"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Josei
        </Link>
        <Link
          to="/Animes/&genres=15"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Kids
        </Link>
        <Link
          to="/Animes/&genres=42"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Seinen
        </Link>
        <Link
          to="/Animes/&genres=25"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Shoujo
        </Link>
        <Link
          to="/Animes/&genres=27"
          className="btn btn-primary m-1 col bg-color-btn1 border-0 fw-bold p-1"
        >
          Shounen
        </Link>
      </section>
    </article>
  );
};
export default Demographics;
