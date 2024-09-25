/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardAni = ({ AniData }) => {
  return (
    <>
      <section className="col box-sizing m-0 p-0">
        <div className="card border-0 m-1 bg-color-card ">
          <Link
            to={`/Anime/${AniData.mal_id}`}
            className="title-anime text-not-decoration"
          >
            <div className="overflow-hidden h-100">
              <img
                src={AniData.images.jpg.image_url}
                className="card-img-top img-fluid object-fit-cover img-size"
                alt={`es la imagen de protada del anime ${AniData.title}`}
              ></img>
            </div>

            <div className="card-body text-center p-0 m-2 rounded-bottom-2">
              <p className="card-text lh-1 fw-bold text-light text-center text-truncate">
                {AniData.title}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CardAni;
