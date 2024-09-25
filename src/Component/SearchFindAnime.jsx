/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { QueryData } from "../Api/Api";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import CardAni from "./CardAni";
import { useParams } from "react-router-dom";
import Paginations from "./Paginations";

const SearchFindAnime = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const { type } = useParams();

  const url = `https://api.jikan.moe/v4/anime?page=${currentPage + 1}${
    type ? type : ``
  }&limit=24&order_by=popularity`;

  function ClearData() {
    setDB([]);
  }

  useEffect(() => {
    setLoading(true);
    QueryData(url).then((res) => {
      if (!res.err) {
        setDB(res.data);
        setError(null);
        setPerPage(res.pagination.last_visible_page);
      } else {
        setDB(null);
        setError(res);
      }
      setLoading(false);
    });

    //console.log(type);
  }, [currentPage, type]);

  useEffect(() => {
    ClearData();
  }, [type]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    ClearData();
  };

  return (
    <>
      <section className="mx-2">
        {loading && <Loader />}
        {error && (
          <Message
            bgColor={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        <section className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 my-3">
          {db && db.map((el, index) => <CardAni key={index} AniData={el} />)}
        </section>
        <Paginations
          handlePageChange={handlePageChange}
          perPage={perPage}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};
export default SearchFindAnime;
