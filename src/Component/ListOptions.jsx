/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

import { NavLink, useParams } from "react-router-dom";

const ListOptions = () => {
  const type = ["", "tv", "ova", "ona", "movie", "special"];
  const { year, season } = useParams();
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <nav className="d-flex flex-wrap justify-content-center">
        {type.map((el, index) => {
          return (
            <NavLink
              key={index}
              to={`${
                id
                  ? `/Studios/${id}/${el}/`
                  : `${
                      year && season ? `/Season/${year}/${season}/` : `/season/`
                    }${el}`
              }`}
              className={({ isActive }) =>
                isActive
                  ? `border-0 btn btn-primary fw-bold m-2 bg-color-btn1-active `
                  : `border-0 btn btn-primary fw-bold m-2 bg-color-btn3`
              }
            >
              {el ? el : "all"}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};
export default ListOptions;
