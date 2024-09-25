import { NavLink, Outlet } from "react-router-dom";

const TopAnime = () => {
  return (
    <>
      <main>
        <div className="container-lg pt-5">
          <h2 className="text-center py-4 text-color-primary">
            Top Anime Series
          </h2>
          <article className="my-3">
            <nav className="d-flex flex-wrap justify-content-center">
              <NavLink
                to="/TopAnime/"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                All Anime
              </NavLink>

              <NavLink
                to="/TopAnime/airing"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top Airing
              </NavLink>

              <NavLink
                to="/TopAnime/upcoming"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top Upcoming
              </NavLink>

              <NavLink
                to="/TopAnime/tv"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top TV Series
              </NavLink>

              <NavLink
                to="/TopAnime/movie"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top Movies
              </NavLink>

              <NavLink
                to="/TopAnime/ova"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top OVAs
              </NavLink>

              <NavLink
                to="/TopAnime/ona"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top ONAs
              </NavLink>

              <NavLink
                to="/TopAnime/special"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Top Specials
              </NavLink>

              <NavLink
                to="/TopAnime/bypopularity"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-primary bg-color-btn1-active border-0 m-1`
                    : `btn btn-primary bg-color-btn3 border-0 m-1`
                }
              >
                Most Popular
              </NavLink>
            </nav>
          </article>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default TopAnime;
