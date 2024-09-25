/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { QueryData } from "../Api/Api";
import { useEffect } from "react";
import Loader from "../Component/Loading/LoaderCard";
import Message from "../Component/Message";
import CardStudio from "../Component/CardStudio";
import Paginations from "../Component/Paginations";

const Studios = () => {
  const [db, setDB] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  async function LoadingData() {
    setLoading(true);
    const url = `https://api.jikan.moe/v4/producers?page=${
      currentPage + 1
    }&limit=24`;
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
    });
    setLoading(false);
  }

  useEffect(() => {
    LoadingData();
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setDB(0);
  };

  return (
    <main className="container-lg pt-5">
      <h2 className="text-center fs-1 py-4 text-color-primary">
        Studios Anime
      </h2>
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
            return <CardStudio key={index} onRequestData={el} />;
          })}
      </section>
      <Paginations
        handlePageChange={handlePageChange}
        perPage={perPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Studios;
