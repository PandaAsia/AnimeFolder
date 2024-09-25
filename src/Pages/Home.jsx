/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
//import TopAni from "../Component/ListTopAni";
import { QueryData } from "../Api/Api";
import Loader from "../Component/Loading/LoaderCard";
import Message from "../Component/Message";
import PanelAnime from "../Component/PanelAnime";
import { Link } from "react-router-dom";
import CardAni from "../Component/CardAni";
import Demographics from "../Component/Demographics";
import Anime_Search from "../Component/Anime_Search";
import TopAni from "../Component/ListTopAni";
import LoaderCard from "../Component/Loading/LoaderCard";

const Home = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [panelAni, setPanelAni] = useState(null);
  const [showComponent1, setShowComponent1] = useState(false);

  const url = "https://api.jikan.moe/v4/seasons/now?filter=tv&limit=25";

  useEffect(() => {
    async function LoadingData() {
      setLoading(true);
      await QueryData(url).then((res) => {
        if (!res.err) {
          setDB(res.data);
          setError(null);
          const indexRandom = Math.floor(Math.random() * res.data.length);
          const ValorRandom = res.data[indexRandom];
          setPanelAni(ValorRandom);
        } else {
          setDB(null);
          setError(res);
        }
        setTimeout(() => {
          setShowComponent1(true);
        }, 1000);
        setLoading(false);
      });
    }
    LoadingData();
  }, []);

  return (
    <>
      <main>
        {error && (
          <Message
            bgColor={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        <section>
          {loading && (
            <div className="pt-5">
              <LoaderCard />
            </div>
          )}
          {panelAni && <PanelAnime PanelData={panelAni} />}
        </section>

        <section className="container-lg">
          <div className="row">
            <section className="col-12 col-sm-8 col-lg-9">
              <article>
                <header className="d-flex flex-row justify-content-between my-3">
                  <div className="d-flex">
                    <h2 className="fs-6 text-uppercase text-light my-auto fw-bold">
                      {panelAni
                        ? `${panelAni.season} ${panelAni.year} Anime`
                        : `Anime season`}
                    </h2>
                  </div>

                  <Link
                    to="/Season"
                    className="btn btn-primary bg-color-btn1 border-0 fw-bold"
                  >
                    see more
                  </Link>
                </header>
                <article className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-1">
                  {loading && <Loader />}
                  {db &&
                    db.map((res, index) => (
                      <CardAni key={index} AniData={res} />
                    ))}
                </article>
              </article>
              <Anime_Search />
              <Demographics />
            </section>
            <section className="col-12 col-sm-4 col-lg-3">
              {showComponent1 && <TopAni />}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
