/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgNotFount from "../assets/ImgNotFount.png";

/* eslint-disable react/prop-types */
const PanelAnime = ({ PanelData }) => {
  const [panelSynopsis, setPanelSynopsis] = useState("");

  useEffect(() => {
    const palabras = PanelData.synopsis.split(" ");
    if (palabras.length > 15) {
      const primera10Palabras = palabras.slice(0, 25).join(" ");
      setPanelSynopsis(`${primera10Palabras} ...`);
    } else {
      setPanelSynopsis(PanelData.synopsis);
    }
  }, [PanelData]);

  return (
    <>
      <section className="card text-bg-dark vh-100 border-0">
        <img
          src={
            PanelData.images.jpg.image_url
              ? PanelData.images.jpg.image_url
              : ImgNotFount
          }
          className="card-img object-fit-cover h-100 border-0"
          alt={PanelData.title}
        ></img>
        <article className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-end justify-content-lg-center">
          <div className="container-lg mb-5 mb-lg-0 pt-lg-5">
            <section className="col-12 col-lg-6 d-block d-lg-none">
              <p className="card-text fs-4 m-0 text-title p-0">
                <small>{PanelData.type}</small>
              </p>
              <h2 className="card-title fs-1 fw-bold text-title p-0">
                {PanelData.title}
              </h2>
              <p className="card-text fs-5 p-0">{panelSynopsis}</p>
              <div className="p-0 d-flex">
                <Link
                  to={`/Anime/${PanelData.mal_id}`}
                  className="btn btn-primary bg-color-btn1 border-0 fw-bold border col-12 col-sm-6 col-lg-4"
                >
                  view
                </Link>
              </div>
            </section>
            <section className="card d-none d-lg-block h-100% bg-black bg-gradient bg-opacity-50 p-5 border border-0">
              <div className="row g-0 text-white">
                <div className="col-md-3">
                  <img
                    src={
                      PanelData.images.jpg.image_url
                        ? PanelData.images.jpg.image_url
                        : ImgNotFount
                    }
                    className="img-fluid rounded w-100"
                    alt={PanelData.title}
                  ></img>
                </div>
                <div className="col-md-9 d-flex align-items-center ps-4">
                  <div className="card-body">
                    <p className="card-text fs-4 m-0 text-title p-0">
                      <small>{PanelData.type}</small>
                    </p>
                    <h2 className="card-title fs-1 fw-bold text-title p-0">
                      {PanelData.title}
                    </h2>
                    <p className="card-text">{panelSynopsis}</p>
                    <Link
                      to={`/Anime/${PanelData.mal_id}`}
                      className="btn btn-primary bg-color-btn1 border-0 fw-bold border col-12 col-sm-6 col-lg-4"
                    >
                      view
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </section>
    </>
  );
};
export default PanelAnime;
