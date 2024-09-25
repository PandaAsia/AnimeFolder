/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { QueryData } from "../Api/Api";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import Character from "./Character";

const ListCharacters = ({ id }) => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;

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
    <>
      {loading && <Loader />}
      {error && (
        <Message
          bgColor={"#dc3545"}
          msg={`Error ${error.status}: ${error.statusText}`}
        />
      )}
      {db.length > 0 && (
        <article>
          <header className="text-center mb-4 mt-2">
            <h4 className="text-light fw-bold">Characters</h4>
          </header>
          <section className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-1 ">
            {db.map((item) => {
              const { name, mal_id, images } = item.character;
              return (
                <Character
                  key={mal_id}
                  nameCharacter={name}
                  imgCharacter={images.jpg.image_url}
                />
              );
            })}
          </section>
        </article>
      )}
    </>
  );
};
export default ListCharacters;
