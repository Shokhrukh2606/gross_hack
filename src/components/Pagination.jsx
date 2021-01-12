import React from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({pageCount, handlePageClick}) => {
    return (<ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
      />)
}
export default Pagination;
