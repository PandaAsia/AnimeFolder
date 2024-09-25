import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardTop = ({ numero, AniDataTop }) => {
  return (
    <>
      <div className="card mb-3 mx-2">
        <Link
          to={`/Anime/${AniDataTop.mal_id}`}
          className="p-2 text-not-decoration bg-color-card border border-3"
        >
          <div className="row g-0">
            <div className="col-2 col-sm-1 text-light d-flex flex-wrap justify-content-center align-items-center">
              <p className="card-text fs-1 ">{numero}</p>
            </div>
            <div className="col-4 img-size2">
              <img
                src={AniDataTop.images.jpg.image_url}
                className="img-fluid  w-100 h-100 fw-bold"
                alt={AniDataTop.title}
              ></img>
            </div>
            <div className="col-5  col-sm-7">
              <div className="card-body ">
                <p className="card-text m-0">
                  <small className="text-light">{AniDataTop.type}</small>
                </p>
                <h5 className="card-title text-light m-0 text-truncate">
                  {AniDataTop.title}
                </h5>
                <p className="card-text text-light m-0">
                  episodes: {AniDataTop.episodes}
                </p>
                <p className="card-text text-light">
                  <i className="bi bi-star-fill me-1"></i>
                  {AniDataTop.score}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default CardTop;
