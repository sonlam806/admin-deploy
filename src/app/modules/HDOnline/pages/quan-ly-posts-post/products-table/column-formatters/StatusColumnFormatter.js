import React from 'react';

export const StatusColumnFormatter = (cellContent, row) => (
  <span
    className={`label label-lg label-light-${
      row.status ? 'success' : 'danger'
    } label-inline`}
  >
    {row.status ? 'Công khai' : 'Không công khai'}
  </span>
);
