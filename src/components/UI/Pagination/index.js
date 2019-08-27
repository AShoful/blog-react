import React from 'react';
import PropTypes from 'prop-types';
import classes from './Pagination.module.css';
import {renderPaginationBtns} from './renderPaginationBtns'


const Pagination = ({ lastPage, pageChange, page}) => {
    
  const handlePageChange = ({ target }) => {
    const btnType = target.getAttribute('data-name');
    
    if(!isNaN(btnType)) {
      updatePage(+btnType);
    } else {
      switch (btnType) {
        case 'next':
          updatePage(page + 1);
          break;
        case 'prev':
          updatePage(page - 1);
          break;
        default: 
        return null;
      }
    }
  }
const updatePage = num =>  pageChange(num)

return (
  <div className={classes.Pagination}>
    <button  onClick={handlePageChange} data-name="prev" disabled = {page ===1}>{'<'}</button> 
      {renderPaginationBtns(handlePageChange, page, lastPage)}
    <button  onClick={handlePageChange} data-name="next" disabled = {page ===lastPage}>{'>'}</button>
  </div>
  )
}

Pagination.propTypes = {
  lastPage: PropTypes.number,
}

Pagination.defaultProps = {
  lastPage: 10,
}

export default Pagination;

