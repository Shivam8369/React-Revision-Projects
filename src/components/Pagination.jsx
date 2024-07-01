import React, { useState } from 'react';
import { autocompleteData } from '../Utilities/AutoSearchData';

const Pagination = ({ ItemPerPage }) => {
  const [currPage, setCurrPage] = useState(1);

  const IndexOfLastItem = currPage * ItemPerPage;
  const IndexOfFirstItem = IndexOfLastItem - ItemPerPage;
  const currentItems = autocompleteData.slice(IndexOfFirstItem, IndexOfLastItem);

  const TotalPageNumber = [];
  for (let i = 1; i <= Math.ceil(autocompleteData.length / ItemPerPage); i++) {
    TotalPageNumber.push(i);
  }

  const listItemStyle = {
    padding: '50px',
    maxWidth: '50%',
    margin: '5px 20px',
    border: '1px solid #eee',
    borderRadius: '4px',
    listStyleType: 'none',
    minHeight : '200px',
    backgroundColor: 'yellow',
  };


  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    padding: '0'
  };

  const paginationItemStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    borderRadius: '4px',
    listStyleType: 'none'
  };

  const container = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const box = {
    display:'flex', 
    justifyContent: 'center', 
    maxWidth: '80%',
    minHeight: '40px',
    textAlign: 'center',
    padding: '20px', 
    fontFamily: 'Arial, sans-serif' 
  };

  return (
    <div style={container}>
      <div style={box} >
        {currentItems.map((item, index) => (
          <li key={index} style={listItemStyle}>{item}</li>
        ))}
      </div>

      <ul style={paginationStyle}>
        {TotalPageNumber.map((number, index) => (
          <li key={index} onClick={() => setCurrPage(number)} style={paginationItemStyle}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
