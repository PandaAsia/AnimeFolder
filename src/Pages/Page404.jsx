import soro from "../assets/404.webp";
const Page404 = () => {
  return (
    <>
      <main className="pt-5 h-75">
        <div className="container-lg text-light pt-4 d-md-flex h-100">
          <section className="d-flex flex-column justify-content-center align-items-center  w-md-50 flex-fill w-100">
            <h2 className="fs-1 fs-md-2">404</h2>
            <p className="fs-3 fs-md-5">PAGE NOT FOUND</p>
          </section>
          <div className="w-100 m-auto pt-3 flex-fill">
            <img
              src={soro}
              alt="Img Perdida"
              className="w-100 h-100 img-fluid "
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Page404;
