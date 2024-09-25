/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QueryData } from "../Api/Api";
import Loader from "../Component/Loading/LoaderCard";
import Message from "../Component/Message";
import ListCharacters from "../Component/ListCharacters";
import ImgNotFount from "../assets/ImgNotFount.png";

const Anime = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagen, setImagen] = useState("");
  const [listStudio, setListStudio] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [listTheme, setListThema] = useState([]);
  const [listDemographic, setListDemographic] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [musicOpening, setMusicOpenning] = useState([]);
  const [musicEndings, setMusicEndings] = useState([]);

  const [showComponent1, setShowComponent1] = useState(false);

  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}/full`;

  useEffect(() => {
    setLoading(true);
    QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
        setImagen(res.data.images.jpg.image_url);
        setListStudio(res.data.studios);
        setListGenres(res.data.genres);
        setListDemographic(res.data.demographics);
        setListThema(res.data.themes);
        setTrailer(res.data.trailer.embed_url);
        setMusicOpenning(res.data.theme.openings);
        setMusicEndings(res.data.theme.endings);
      } else {
        setDB(null);
        setError(res);
      }
      setTimeout(() => {
        setShowComponent1(true);
      }, 1000);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <main className="pt-5">
        <section className="container-lg pt-4">
          {loading && <Loader />}
          {error && (
            <Message
              bgColor={"#dc3545"}
              msg={`Error ${error.status}: ${error.statusText}`}
            />
          )}
          {db && (
            <section className="row">
              <section className="col-12 col-sm-12 col-lg-3 margin-img-main">
                <article>
                  <img
                    src={imagen ? imagen : ImgNotFount}
                    alt={`es la imagen del anime ${db.title}`}
                    className="img-fluid w-100"
                  />
                  <div className="my-2">
                    <p
                      className={`text-center fw-bold py-1 ${
                        db.airing ? "text-bg-success" : "text-bg-danger"
                      }`}
                    >
                      {db.airing ? "Currently Airing" : "Finished Airing"}
                    </p>
                  </div>
                </article>
              </section>
              <section className="col-12 col-sm-7 col-lg-9 order-sm-1 order-lg-0">
                <article className="info-anime">
                  <h1 className="fs-1 text-color-primary mb-3">{db.title}</h1>
                  <nav>
                    {db.year && db.season ? (
                      <Link
                        to={`/Season/${db.year}/${db.season}`}
                        className="btn btn-primary me-2 bg-color-btn1 border-0 fw-bold text-uppercase"
                      >{`${db.season} ${db.year}`}</Link>
                    ) : (
                      ""
                    )}
                    {db.type && (
                      <Link
                        to={`/Animes/&type=${db.type}`}
                        className="btn btn-primary me-2 bg-color-btn1 border-0 fw-bold text-uppercas"
                      >
                        {db.type}
                      </Link>
                    )}
                    {listStudio &&
                      listStudio.map((el, index) => (
                        <Link
                          to={`/Studios/${el.mal_id}`}
                          key={index}
                          className="btn btn-primary me-2 bg-color-btn1 border-0 fw-bold text-uppercas"
                        >
                          {el.name}
                        </Link>
                      ))}
                  </nav>
                  {db.synopsis && (
                    <section className="my-2 ">
                      <h6 className="py-2 border-bottom border-3 border-white fw-bold text-light">
                        Synopsis
                      </h6>
                      <p className="white-space text-light text-p-size text-start">
                        {db.synopsis}
                      </p>
                    </section>
                  )}
                  <article className="d-flex my-3">
                    <h6 className="mt-2 me-2 text-light fw-bold mb-3">
                      Genres:
                    </h6>
                    <nav className="text-start">
                      {listGenres &&
                        listGenres.map((el, index) => (
                          <Link
                            key={index}
                            to={`/Animes/&genres=${el.mal_id}`}
                            className="btn btn-primary me-2 bg-color-btn2 border-0 fw-bold mb-2"
                          >
                            {el.name}
                          </Link>
                        ))}
                      {listDemographic &&
                        listDemographic.map((el, index) => (
                          <Link
                            key={index}
                            to={`/Animes/&genres=${el.mal_id}`}
                            className="btn btn-primary me-2 bg-color-btn2 border-0 fw-bold mb-2"
                          >
                            {el.name}
                          </Link>
                        ))}
                      {listTheme &&
                        listTheme.map((el, index) => (
                          <Link
                            key={index}
                            to={`/Animes/&genres=${el.mal_id}`}
                            className="btn btn-primary me-2 bg-color-btn2 border-0 fw-bold mb-2"
                          >
                            {el.name}
                          </Link>
                        ))}
                    </nav>
                  </article>
                </article>
              </section>
              <section className="col-12 col-sm-5 col-lg-3 ">
                <article>
                  <article className="border border-3 border-start-0 border-white rounded-end mb-3 rounded-0">
                    <div className="d-flex justify-content-center my-3">
                      <section className="bg-black rounded-circle p-3 my-auto">
                        <h6 className="m-0 text-center text-light">Score</h6>
                        <h3 className="m-0 text-center text-color-primary">
                          {db.score ? db.score : "--"}
                        </h3>
                      </section>
                      <section className="my-auto ms-3 text-light fw-bold">
                        <h6>
                          Ranked:{" "}
                          <span className="text-color-primary">
                            {db.rank ? db.rank : "-"}
                          </span>{" "}
                        </h6>
                        <h6>
                          Popularity:{" "}
                          <span className="text-color-primary">
                            {db.popularity ? db.popularity : "-"}
                          </span>
                        </h6>
                      </section>
                    </div>
                  </article>
                  <article className="border border-3 border-white border-start-0 rounded-end mb-3 rounded-0 ps-2 py-4 ">
                    <h6 className="text-p-size text-light">
                      Type:{" "}
                      <span className="text-color-primary">{db.type}</span>
                    </h6>
                    <h6 className="text-p-size text-light">
                      Status: <span>{db.status}</span>
                    </h6>
                    {listStudio.length > 0 && (
                      <h6 className="text-p-size text-light d-flex mb-1">
                        Studios:
                        <nav className="d-flex flex-wrap">
                          {listStudio.map((el, index) => (
                            <Link
                              to={`/Studios/${el.mal_id}`}
                              key={index}
                              className="text-color-primary mx-1 text-not-decoration mb-1"
                            >
                              {el.name}
                            </Link>
                          ))}
                        </nav>
                      </h6>
                    )}
                    {listGenres.length > 0 && (
                      <h6 className="text-p-size text-light d-flex">
                        Genres:
                        <nav className="d-flex flex-wrap">
                          {listGenres.map((el, index) => (
                            <Link
                              key={index}
                              to={`/Animes/&genres=${el.mal_id}`}
                              className="text-color-primary mx-1 text-not-decoration mb-1"
                            >
                              {el.name}
                            </Link>
                          ))}
                        </nav>
                      </h6>
                    )}
                    {listTheme.length > 0 && (
                      <h6 className="text-p-size text-light d-flex">
                        Theme:
                        <nav className="d-flex flex-wrap">
                          {listTheme.map((el, index) => (
                            <Link
                              key={index}
                              to={`/Animes/&genres=${el.mal_id}`}
                              className="text-color-primary mx-1 text-not-decoration mb-1"
                            >
                              {el.name}
                            </Link>
                          ))}
                        </nav>
                      </h6>
                    )}
                    {listDemographic.length > 0 && (
                      <h6 className="text-p-size text-light d-flex">
                        Demographic:
                        <nav className="d-flex flex-wrap">
                          {listDemographic.map((el, index) => (
                            <Link
                              key={index}
                              to={`/Animes/&genres=${el.mal_id}`}
                              className="text-color-primary mx-1 text-not-decoration mb-1"
                            >
                              {el.name}
                            </Link>
                          ))}
                        </nav>
                      </h6>
                    )}

                    <h6 className="text-p-size text-light">
                      Episodes: <span>{db.episodes ? db.episodes : "-"}</span>
                    </h6>
                    <h6 className="text-p-size text-light">
                      Duration: <span>{db.duration ? db.duration : "-"}</span>
                    </h6>
                    <h6 className="text-p-size text-light">
                      Rating: <span>{db.rating ? db.rating : "-"}</span>
                    </h6>
                    <h6 className="text-p-size text-light">
                      Source: <span>{db.source ? db.source : "-"}</span>
                    </h6>
                  </article>
                  {trailer && (
                    <article className="ratio ratio-16x9 mb-3 d-none d-lg-block">
                      <iframe
                        src={trailer}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </article>
                  )}
                  {musicOpening.length > 0 && (
                    <article className="my-4 list-unstyled text-light">
                      <header>
                        <h6 className="fw-bold">Opening Theme</h6>
                      </header>
                      {musicOpening.map((el, index) => {
                        return (
                          <li key={index} className="ms-2 text-size-small">
                            {el}
                          </li>
                        );
                      })}
                    </article>
                  )}
                  {musicEndings.length > 0 && (
                    <article className="list-unstyled text-light">
                      <header>
                        <h6 className="fw-bold">Ending Theme</h6>
                      </header>
                      {musicEndings.map((el, index) => {
                        return (
                          <li key={index} className="ms-2 text-size-small">
                            {el}
                          </li>
                        );
                      })}
                    </article>
                  )}
                </article>
              </section>
              <section className="col-12 col-sm-12 col-lg-9 order-sm-2 order-lg-0">
                {showComponent1 && <ListCharacters id={id} />}
              </section>
            </section>
          )}
        </section>
      </main>
    </>
  );
};
export default Anime;
