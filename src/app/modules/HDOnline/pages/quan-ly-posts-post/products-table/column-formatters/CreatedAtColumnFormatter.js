import React from 'react';
import { format } from 'date-fns';
const parseTime = (string) => {
  return format(new Date(string), 'dd/MM/yyyy HH:mm:SS');
};

export const CreatedAtColumnFormatter = (cellContent, row) => {
  const createdAt = parseTime(row.createdAt);
  return <span>{createdAt}</span>;
};
