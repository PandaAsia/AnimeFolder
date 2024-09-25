/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardAniTop = ({ index, AniDataTop }) => {
  return (
    <>
      <Link to={`/Anime/${AniDataTop.mal_id}`} className="text-not-decoration">
        <div className="card mb-2 h-25 bg-color-card border-2 border-white">
          <div className="row g-0">
            <div className="col-2 col-sm-2  d-flex flex-column justify-content-center align-items-center">
              <p className="card-text fs-3 text-light">{index + 1}</p>
            </div>
            <div className="col-2 col-sm-4">
              <img
                src={AniDataTop.images.jpg.image_url}
                className="img-fluid rounded-0"
                alt={AniDataTop.title}
              ></img>
            </div>
            <div className="col-8 col-sm-6 p-0 my-auto">
              <div className="card-body p-0 ms-2">
                <p className="card-text m-0 text-light text-size-small">
                  {AniDataTop.type}
                </p>
                <p className="card-text m-0 fw-bold text-light fs-6 text-truncate">
                  {AniDataTop.title}
                </p>
                <p className="card-text text-light text-size-small">
                  {AniDataTop.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CardAniTop;
