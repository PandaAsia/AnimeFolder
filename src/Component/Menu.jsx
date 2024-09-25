import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="position-fixed w-100 z-3">
        <nav className="navbar navbar-expand-lg bg-body-tertiary PrimaryColor">
          <div className="container-lg">
            <Link to="/" className="navbar-brand fw-bold btn-enlace">
              PandAsia
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-lg-end"
              id="navbarSupportedContent"
            >
              <div className="d-flex flex-column flex-lg-row justify-content-center navbar-100">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-3 mx-auto text-center">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link fw-bold btn-enlace2`
                          : `nav-link fw-bold btn-enlace`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/season"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link fw-bold btn-enlace2`
                          : `nav-link fw-bold btn-enlace`
                      }
                    >
                      Season
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Animes/&type=tv"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link fw-bold btn-enlace2`
                          : `nav-link fw-bold btn-enlace`
                      }
                    >
                      Animes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Animes/&type=movie"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link fw-bold btn-enlace2`
                          : `nav-link fw-bold btn-enlace`
                      }
                    >
                      Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Animes/&type=ova"
                      className={({ isActive }) =>
                        isActive
                          ? `nav-link fw-bold btn-enlace2`
                          : `nav-link fw-bold btn-enlace`
                      }
                    >
                      Ovas
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                  <Link to="/Programming" className="nav-link text-light">
                    Programming
                  </Link>
                </li> */}
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(el) => setSearch(el.target.value)}
                    required
                  ></input>
                  <Link
                    className="btn btn-primary border-0 bg-color-btn3"
                    type="submit"
                    to={search ? `/Animes/&q=${search}&sfw` : ""}
                    onClick={() => setSearch(``)}
                  >
                    Search
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Menu;
