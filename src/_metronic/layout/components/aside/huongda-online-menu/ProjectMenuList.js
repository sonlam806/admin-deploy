import React from 'react';
import { NavLink } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../../_helpers';
import SVG from 'react-inlinesvg';

export default function ProjectMenuList({ getMenuItemActive }) {
  return (
    <>
      {/* Components */}
      {/* begin::section */}
      <li className='menu-section '>
        <h4 className='menu-text'>Dự án</h4>
        <i className='menu-icon flaticon-more-v2'></i>
      </li>
      {/* end:: section */}

      {/* Material-UI */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          '/huong-da-online/services',
          true
        )}`}
        aria-haspopup='true'
        data-menu-toggle='hover'
      >
        <NavLink
          className='menu-link menu-toggle'
          to='/huong-da-online/services'
        >
          <span className='svg-icon menu-icon'>
            <SVG src={toAbsoluteUrl('/media/svg/icons/Shopping/Wallet.svg')} />
          </span>
          <span className='menu-text'>Quản lý dự án</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}

      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          '/huong-da-online/template',
          true
        )}`}
        aria-haspopup='true'
        data-menu-toggle='hover'
      >
        <NavLink
          className='menu-link menu-toggle'
          to='/huong-da-online/template'
        >
          <span className='svg-icon menu-icon'>
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Component.svg')} />
          </span>
          <span className='menu-text'>Quản lý công nghệ</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          '/huong-da-online/template',
          true
        )}`}
        aria-haspopup='true'
        data-menu-toggle='hover'
      >
        <NavLink
          className='menu-link menu-toggle'
          to='/huong-da-online/template'
        >
          <span className='svg-icon menu-icon'>
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Component.svg')} />
          </span>
          <span className='menu-text'>Quản lý danh mục</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          '/huong-da-online/template',
          true
        )}`}
        aria-haspopup='true'
        data-menu-toggle='hover'
      >
        <NavLink
          className='menu-link menu-toggle'
          to='/huong-da-online/template'
        >
          <span className='svg-icon menu-icon'>
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Component.svg')} />
          </span>
          <span className='menu-text'>Quản lý tag</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}
    </>
  );
}
