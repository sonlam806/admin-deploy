/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';
import PostMenuList from './PostMenuList';
import ProjectMenuList from './ProjectMenuList';
import ServiceMenuList from './ServiceMenuList';

export function HuongDaOnlineMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && 'menu-item-active'} menu-item-open `
      : '';
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/dashboard', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/dashboard'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Layers.svg')} />
            </span>
            <span className='menu-text'>HuongDa Online</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* begin:: PostMenuList */}
        <PostMenuList getMenuItemActive={getMenuItemActive} />
        {/* end:: PostMenuList */}

        {/* begin:: ProjectMenuList */}
        <ProjectMenuList getMenuItemActive={getMenuItemActive} />
        {/* end:: ProjectMenuList */}

        {/* begin: ServicesMenuList */}
        <ServiceMenuList getMenuItemActive={getMenuItemActive} />
        {/* end:: ServicesMenuList */}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
