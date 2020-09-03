import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../_helpers';
import SVG from 'react-inlinesvg';

export function Brand() {
  return (
    <>
      {/* begin::Brand */}
      <div
        className={`aside-brand d-flex flex-column align-items-center flex-column-auto py-5 py-lg-12`}
      >
        {/* begin::Logo */}
        <Link to='' className='brand-logo'>
          <SVG src={toAbsoluteUrl('/media/logos/HD.svg')} />
        </Link>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}
