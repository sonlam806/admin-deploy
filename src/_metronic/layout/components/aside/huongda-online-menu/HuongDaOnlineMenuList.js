/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';

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

        {/* Components */}
        {/* begin::section */}
        <li className='menu-section '>
          <h4 className='menu-text'>Bài viết</h4>
          <i className='menu-icon flaticon-more-v2'></i>
        </li>
        {/* end:: section */}

        {/* Material-UI */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý bài viết</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Adjust.svg')} />
            </span>
            <span className='menu-text'>Quản lý danh mục</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Union.svg')} />
            </span>
            <span className='menu-text'>Quản lý tag</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/* Dự án */}
        {/* start::2 Level */}
        <li className='menu-section '>
          <h4 className='menu-text'>Dự án</h4>
          <i className='menu-icon flaticon-more-v2'></i>
        </li>
        {/* end:: section */}

        {/* Material-UI */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Stamp.svg')} />
            </span>
            <span className='menu-text'>Quản lý công nghệ</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Sketch.svg')} />
            </span>
            <span className='menu-text'>Quản lý danh mục</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Design/Position.svg')}
              />
            </span>
            <span className='menu-text'>Quản lý dự án</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Mask.svg')} />
            </span>
            <span className='menu-text'>Quản lý tag</span>
            <i className='menu-arrow' />
          </NavLink>
        </li>
        {/* end::2 Level */}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
