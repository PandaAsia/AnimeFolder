import { useEffect, useState } from "react";
import { QueryData } from "../Api/Api";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import { Link } from "react-router-dom";

const ListSeason = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "https://api.jikan.moe/v4/seasons";

  useEffect(() => {
    setLoading(true);
    QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
        //console.log(res.data);
      } else {
        setDB(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);
  return (
    <article className="">
      <h3 className="my-3 fs-4 text-end text-bg-ThreeColor">List Season</h3>
      {loading && <Loader />}
      {error && (
        <Message
          bgColor={"#dc3545"}
          msg={`Error ${error.status}: ${error.statusText}`}
        />
      )}
      <div className="row g-1">
        {db &&
          db.map((el, index) => {
            return (
              <div key={index} className="row col-12 p-0 m-0">
                {el.seasons.map((data, index01) => {
                  return (
                    <div
                      key={`${index}${index01}`}
                      className="col-12 col-sm-6 col-lg-3 p-1"
                    >
                      <Link
                        to={`/Season/${el.year}/${data}`}
                        key={`${index}${index01}`}
                        className="btn btn-primary w-100 bg-color-btn2 border-0 fw-bold"
                      >{`${el.year}-${data}`}</Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </article>
  );
};
export default ListSeason;
