/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryData } from "../Api/Api";
import Loader from "../Component/Loading/LoaderCard";
import Message from "../Component/Message";
import ListOptions from "../Component/ListOptions";
import SearchAni from "../Component/SearchAni";

const Studio = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [mainImg, setMainImg] = useState("");
  const [titleStudio, setTitleStudio] = useState("");
  const [titleJapan, setTitleJapan] = useState("");
  const [obData, setObData] = useState("");

  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/producers/${id}`;

  function GetDate(data) {
    const fecha = new Date(data);

    const opcionesDeFormato = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fechaFormateada = fecha.toLocaleDateString(
      "en-US",
      opcionesDeFormato
    );

    return fechaFormateada;
  }

  useEffect(() => {
    setLoading(true);
    QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
        setMainImg(res.data.images.jpg.image_url);
        setTitleStudio(res.data.titles.find((name) => name.type == "Default"));
        setTitleJapan(res.data.titles.find((name) => name.type == "Japanese"));
        setObData(res.data.established);
        console.log(res.data);
      } else {
        setDB(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  return (
    <>
      <main>
        <div className="container-lg pt-5">
          <section className="row pt-4">
            {loading && <Loader />}
            {error && (
              <Message
                bgColor={"#dc3545"}
                msg={`Error ${error.status}: ${error.statusText}`}
              />
            )}
            {db && (
              <>
                <article className="col-12 col-sm-6 col-lg-3 mb-3">
                  <img
                    src={mainImg}
                    alt={titleStudio ? titleStudio.title : titleJapan.title}
                    className="img-fluid shadow"
                  />
                </article>
                <article className="col-12 col-sm-6 col-lg-9">
                  <article>
                    <h1 className="text-color-primary text-title">
                      {titleStudio ? titleStudio.title : titleJapan.title}
                    </h1>
                    <h5 className="text-light fs-6 fw-bold">
                      Japanese: {titleJapan ? titleJapan.title : "-"}
                    </h5>
                    <h5 className="text-light fs-6 fw-bold">
                      Established: {obData ? GetDate(obData) : "-"}
                    </h5>
                  </article>
                  {db.about && (
                    <section className="pt-3">
                      <p className="text-light white-space">{db.about}</p>
                    </section>
                  )}
                </article>
                <article className="col-12 my-2">
                  <h3 className="border-3 border-bottom border-white text-light pb-2 fs-4 fw-bold text-title">
                    {titleStudio ? titleStudio.title : titleJapan.title} Animes
                  </h3>
                  <div className="d-flex justify-content-center mb-4">
                    <ListOptions />
                  </div>
                  <SearchAni />
                </article>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
};
export default Studio;
