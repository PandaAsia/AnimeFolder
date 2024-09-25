import { NavLink, Outlet } from "react-router-dom";

const Season = () => {
  return (
    <main>
      <div className="container-lg pt-5">
        <h2 className="text-center pt-4 fs-1 text-color-primary">
          Season Anime
        </h2>
        <nav className="border-3 border-bottom border-white d-flex justify-content-between pb-2">
          <NavLink
            to="/season"
            className={`text-not-decoration fw-bold btn-enlace1`}
          >
            Season Now
          </NavLink>
          <NavLink
            to="/season/All_Season"
            className={`text-not-decoration fw-bold btn-enlace1`}
          >
            All Season
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </main>
  );
};
export default Season;
