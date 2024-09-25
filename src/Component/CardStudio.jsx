/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const CardStudio = ({ onRequestData }) => {
  const [titleStudio, setTitleStudio] = useState("");
  const [titleJapan, setTitleJapan] = useState("");
  //console.log(onRequestData);

  useEffect(() => {
    function GetTitle(title) {
      return onRequestData.titles.find((el) => el.type == title);
    }
    setTitleStudio(GetTitle("Default"));
    setTitleJapan(GetTitle("Japanese"));
    //console.log(titleJapan);
  }, []);

  return (
    <>
      <article className="card col border-0 btn-hover-Secontcolor">
        <Link
          to={`/Studios/${onRequestData.mal_id}`}
          className="m-2 border-0 rounded shadow text-not-decoration title-anime"
        >
          <div className="overflow-hidden">
            <img
              src={onRequestData.images.jpg.image_url}
              className="card-img-top img-fluid"
              alt={`es el logo de ${
                titleStudio ? titleStudio.title : titleJapan.title
              }`}
            ></img>
          </div>
          <div className="card-body PrimaryColor rounded-bottom-2">
            <h6 className="card-text lh-1 fw-bold text-black text-center text-truncate">
              {titleStudio ? titleStudio.title : titleJapan.title}
            </h6>
          </div>
        </Link>
      </article>
    </>
  );
};
export default CardStudio;
