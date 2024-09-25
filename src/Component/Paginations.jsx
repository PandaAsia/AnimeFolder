/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

const Paginations = ({ perPage, handlePageChange, currentPage }) => {
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <ReactPaginate
          previousLabel={<i className="bi bi-caret-left-fill"></i>}
          nextLabel={<i className="bi bi-caret-right-fill"></i>}
          breakLabel={"..."}
          pageCount={perPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName={"pagination"}
          pageClassName={"page-item mx-2"}
          pageLinkClassName={
            "page-link rounded fw-bold bg-color-btn2 border-0 my-auto"
          }
          activeClassName={"active disabled"}
          activeLinkClassName={"bg-color-btn-active "}
          previousClassName={"page-item mx-1"}
          previousLinkClassName={
            "page-link fs-4 p-0 bg-color-card border-0 text-bg-ThreeColor bg-color-pagi"
          }
          nextClassName={"page-item mx-1"}
          nextLinkClassName={
            "page-link fs-4 p-0 bg-color-card border-0 text-bg-ThreeColor bg-color-pagi"
          }
          breakClassName={"page-item mx-2"}
          breakLinkClassName={
            "page-link rounded fw-bold bg-color-btn2 border-0 my-auto"
          }
          disabledLinkClassName={"text-bg-disble"}
        />
      </div>
    </>
  );
};
export default Paginations;
