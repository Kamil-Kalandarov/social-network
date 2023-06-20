import styles from './pagination.module.css'
import ReactPaginate from 'react-paginate';


const Pagination = (props) => {
  return (
    <ReactPaginate
      breakLabel={props.breakLabel}
      previousLabel={props.previousLabel}
      nextLabel={props.nextLabel}
      onPageChange={props.onPageChange}
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={props.pageCount}
      renderOnZeroPageCount={props.renderOnZeroPageCount}
      containerClassName={styles.paginationBtns}
      pageClassName={styles.paginationBtn}
      pageLinkClassName={styles.paginationLink}
      nextLinkClassName={styles.paginationNextBtn}
      previousLinkClassName={styles.paginationPrevBtn}
      disabledClassName={styles.paginationDisabledBtn}
      activeClassName={styles.paginationActiveBtn}
      breakLinkClassName={styles.paginationBreakeBtn}
      forcePage={props.forcePage}
    /> 
  );
};

export default Pagination
