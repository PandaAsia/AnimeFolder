import { useEffect, useState } from "react";
import { QueryData } from "../Api/Api";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import { Link } from "react-router-dom";

const SearchOptions = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);
  const [genres, setGenres] = useState(null);
  const [years, setYears] = useState(null);

  const url = "https://api.jikan.moe/v4/seasons";

  useEffect(() => {
    setLoading(true);
    QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
      } else {
        setDB(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <form className="my-3">
        <section className="row">
          <div className="col-12 col-sm-6 col-lg mb-1">
            <fieldset>
              <label htmlFor="status" className="text-light pb-2 fw-bold">
                Status
              </label>
              <select
                id="status"
                name="status"
                onChange={(el) => setStatus(el.target.value)}
                className="form-select"
              >
                <option value="">Seleccionar</option>
                <option value="airing">airing</option>
                <option value="complete">complete</option>
                <option value="upcoming">upcoming</option>
              </select>
            </fieldset>
          </div>
          <div className="col-12 col-sm-6 col-lg mb-1">
            <fieldset>
              <label htmlFor="type" className="text-light pb-2 fw-bold">
                Type
              </label>
              <select
                id="type"
                name="type"
                onChange={(el) => setType(el.target.value)}
                className="form-select"
              >
                <option value="">Seleccionar</option>
                <option value="tv">tv</option>
                <option value="movie">movie</option>
                <option value="special">special</option>
                <option value="ona">ona</option>
              </select>
            </fieldset>
          </div>
          <div className="col-12 col-sm-6 col-lg mb-1">
            <fieldset>
              <label htmlFor="genres" className="text-light pb-2 fw-bold">
                Genres
              </label>
              <select
                id="genres"
                name="genres"
                onChange={(el) => setGenres(el.target.value)}
                className="form-select"
              >
                <option value="">Seleccionar</option>
                <option value="1">Action</option>
                <option value="2">Adventure</option>
                <option value="5">Avant Garde</option>
                <option value="46">Award Winning</option>
                <option value="28">Boys Love</option>
                <option value="4">Comedy</option>
                <option value="8">Drama</option>
                <option value="10">Fantasy</option>
                <option value="26">Girls Love</option>
                <option value="58">Gore</option>
                <option value="47">Gourmet</option>
                <option value="35">Harem</option>
                <option value="14">Horror</option>
                <option value="62">Isekai</option>
                <option value="66">Mahou Shoujo</option>
                <option value="18">Mecha</option>
                <option value="19">Music</option>
                <option value="38">Military</option>
                <option value="7">Mystery</option>
                <option value="22">Romance</option>
                <option value="24">Sci-Fi</option>
                <option value="23">School</option>
                <option value="36">Slice of Life</option>
                <option value="76">Survival</option>
                <option value="30">Sports</option>
                <option value="37">Supernatural</option>
                <option value="41">Suspense</option>
              </select>
            </fieldset>
          </div>
          <div className="col-12 col-sm-6 col-lg mb-1">
            {loading && <Loader />}
            {error && (
              <Message
                bgColor={"#dc3545"}
                msg={`Error ${error.status}: ${error.statusText}`}
              />
            )}
            {db && (
              <fieldset>
                <label htmlFor="Years" className="text-light pb-2 fw-bold">
                  Years
                </label>{" "}
                <select
                  id="Years"
                  name="Years"
                  onChange={(el) => setYears(el.target.value)}
                  className="form-select"
                >
                  <option value="">Seleccionar</option>
                  {db.map((el, index) => {
                    return (
                      <option value={el.year} key={index}>
                        {el.year}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
            )}
          </div>
        </section>

        <Link
          to={`/Animes/${status ? `&status=${status}` : ``}${
            type ? `&type=${type}` : ``
          }${genres ? `&genres=${genres}` : ``}${
            years ? `&start_date=${years}-01-01` : ``
          }`}
          className="btn btn-primary w-100 my-4 p-1 bg-color-btn1 border-0 fw-bold"
        >
          Aceptar
        </Link>
      </form>
    </section>
  );
};
export default SearchOptions;
