import React from 'react';
import './contentColumnFormatter.css';

export const ContentColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  extraData
) => {
  return (
    <p
      className={
        rowIndex === extraData ? 'row-content show-all-content' : 'row-content'
      }
    >
      {' '}
      {row.content}{' '}
    </p>
  );
};
