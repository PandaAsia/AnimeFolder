/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import { QueryData } from "../Api/Api.js";
import Loader from "./Loading/LoaderCard.jsx";
import Message from "./Message";
import CardAniTop from "./CardAniTop.jsx";
import { Link } from "react-router-dom";

const TopAni = ({ handleUrl }) => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "https://api.jikan.moe/v4/top/anime?type=tv&limit=10";

  useEffect(() => {
    async function LoadingData() {
      setLoading(true);
      await QueryData(url).then((res) => {
        if (!res.err) {
          setDB(res.data);
          setError(null);
        } else {
          setDB(null);
          setError(res);
        }
        setLoading(false);
      });
    }
    LoadingData();
  }, []);

  return (
    <>
      <article>
        <header className="d-flex flex-row justify-content-between my-3">
          <div className="d-flex">
            <h2 className="fs-6 text-uppercase m-auto text-light fw-bold">
              Anime Top 10
            </h2>
          </div>
          <Link
            to="Topanime"
            className="btn btn-primary bg-color-btn1 border-0 fw-bold"
          >
            see more
          </Link>
        </header>
        <section>
          {loading && <Loader />}
          {error && (
            <Message
              bgColor={"#dc3545"}
              msg={`Error ${error.status}: ${error.statusText}`}
            />
          )}
          {db &&
            db.map((el, index) => (
              <CardAniTop key={index} AniDataTop={el} index={index} />
            ))}
        </section>
      </article>
    </>
  );
};
export default TopAni;
