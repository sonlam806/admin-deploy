import React from 'react';
import { useSubheader } from '../../_metronic/layout';

export const HuongDaOnlinePage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Huong Da Online');

  return <h1>This is Huong Da Online Page</h1>;
};
