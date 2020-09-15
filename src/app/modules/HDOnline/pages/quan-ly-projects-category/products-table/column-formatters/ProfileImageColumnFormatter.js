import React from 'react';
import { Image } from 'react-bootstrap';

export const ProfileImageColumnFormatter = (cellContent, row) => {
  return <Image src={row.profileImage} />;
};
