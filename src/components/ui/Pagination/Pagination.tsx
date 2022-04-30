import React from 'react';
import './Pagination.css';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (num: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination-container'>
      {pageNumbers.map((number) => {
        return (
          <li key={number} className='pagination-list'>
            <span
              onClick={() => props.paginate(number)}
              className='pagination-number'
            >
              {number}
            </span>
          </li>
        );
      })}
    </nav>
  );
}
