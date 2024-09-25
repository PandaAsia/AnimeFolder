/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { QueryData } from "../Api/Api";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import CardTop from "./CardTop";
import { useParams } from "react-router-dom";
import Paginations from "./Paginations";

const TopAniList = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { producto } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const type = ["tv", "movie", "ova", "special", "ona"];
  const filter = ["airing", "upcoming", "bypopularity"];

  const url = `https://api.jikan.moe/v4/top/anime?page=${currentPage + 1}${
    type.includes(producto) ? `&type=${producto}` : ""
  }${filter.includes(producto) ? `&filter=${producto}` : ""}`;

  // const [urlUpdate, setUrlUpdate] = useState("");

  // function RestartCurrentPage() {
  //   if (producto != urlUpdate) {
  //     setCurrentPage(1);
  //     setUrlUpdate(producto);
  //   }
  // }

  let [cantList, setCantList] = useState(0);

  function cantElement() {
    let respuesta = 0;
    respuesta = 25 * currentPage + 1;
    return respuesta;
  }

  function clearData() {
    setDB([]);
  }

  useEffect(() => {
    setCantList(cantElement());
  }, [currentPage]);

  async function LoadingData() {
    setLoading(true);
    await QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
        setPerPage(res.pagination.last_visible_page);
        console.log(res);
      } else {
        setDB(null);
        setError(res);
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    cantElement();
    // RestartCurrentPage();
    LoadingData();
  }, [currentPage, producto]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    clearData();
  };

  useEffect(() => {
    setCurrentPage(0);
    clearData();
  }, [producto]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Message
          bgColor={"#dc3545"}
          msg={`Error ${error.status}: ${error.statusText}`}
        />
      )}
      <section>
        {db &&
          db.map((el, index) => (
            <CardTop key={index} numero={cantList + index} AniDataTop={el} />
          ))}
      </section>
      <Paginations
        handlePageChange={handlePageChange}
        perPage={perPage}
        currentPage={currentPage}
      />
    </>
  );
};
export default TopAniList;
