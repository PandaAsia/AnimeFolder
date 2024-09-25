/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { QueryData } from "../Api/Api";
import { useParams } from "react-router-dom";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import CardAni from "./CardAni";
import Paginations from "./Paginations";

const SearchAni = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id, type } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  function clearData() {
    setDB([]);
  }

  const url = `https://api.jikan.moe/v4/anime?producers=${id}&page=${
    currentPage + 1
  }&limit=24&order_by=start_date&sort=desc${type ? `&type=${type}` : ""}`;

  async function LoadingData() {
    setLoading(true);
    await QueryData(url).then((res) => {
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
  }

  useEffect(() => {
    LoadingData();
  }, [currentPage, type]);

  useEffect(() => {
    clearData();
  }, [type]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    clearData();
  };

  return (
    <>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-1">
        {loading && <Loader />}
        {error && (
          <Message
            bgColor={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db && db.map((el, index) => <CardAni key={index} AniData={el} />)}
      </div>

      <Paginations
        handlePageChange={handlePageChange}
        perPage={perPage}
        currentPage={currentPage}
      />
    </>
  );
};
export default SearchAni;
