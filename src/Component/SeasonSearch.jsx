/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { QueryData } from "../Api/Api";
import { useParams } from "react-router-dom";
import Loader from "./Loading/LoaderCard";
import Message from "./Message";
import CardAni from "./CardAni";
import ListOptions from "./ListOptions";

import Paginations from "./Paginations";

const SeasonSearch = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { year, season } = useParams();
  const { type } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const clearVarible = () => {
    setDB([]);
  };

  //https://api.jikan.moe/v4/seasons/now
  //https://api.jikan.moe/v4/seasons/{year}/{season}  ?filter=movie`
  const url = `https://api.jikan.moe/v4/seasons/${
    year && season ? `${year}/${season}` : `now`
  }?page=${currentPage + 1}${type ? `&filter=${type}` : ""}&limit=24`;

  useEffect(() => {
    clearVarible();
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
  }, [url, type]);

  useEffect(() => {
    setCurrentPage(0);
  }, [type]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    clearVarible();
  };

  return (
    <section>
      <h2 className="my-3 fs-4 text-end text-bg-ThreeColor">
        {year && season ? `${season}-${year}` : `Season Now`}
      </h2>
      <section className="d-flex justify-content-center my-3">
        <ListOptions />
      </section>
      <section className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-1">
        {loading && <Loader />}
        {error && (
          <Message
            bgColor={"#dc3545"}
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db &&
          db.map((el, index) => {
            return <CardAni key={index} AniData={el} />;
          })}
      </section>
      <Paginations
        handlePageChange={handlePageChange}
        perPage={perPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default SeasonSearch;
