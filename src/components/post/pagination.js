import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    //the number of slider of pagination
  const pageNumbers = [];

  //for loop of slider
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination pagination-lg text-center m-5'>
        { pageNumbers.map(number => (
          <li key={number} className='page-item  text-center'>
            <Link onClick={() => paginate(number)} to={number} className='page-link'>
              {number}
            </Link>
          </li>
        )) }
      </ul>
  </nav>
  );
};

export default Pagination;