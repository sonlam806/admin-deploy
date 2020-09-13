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

        {/* Bài viết */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/huong-da-online/posts',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink
            className='menu-link menu-toggle'
            to='/huong-da-online/posts'
          >
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Shopping/Box2.svg')} />
            </span>
            <span className='menu-text'>Bài viết</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <ul className='menu-subnav'>
              <ul className='menu-subnav'>
                <li
                  className='menu-item  menu-item-parent'
                  aria-haspopup='true'
                >
                  <span className='menu-link'>
                    <span className='menu-text'>Bài viết</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/huong-da-online/posts/post'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/huong-da-online/posts/post'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý bài viết</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/huong-da-online/posts/category'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/huong-da-online/posts/category'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý danh mục</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/huong-da-online/posts/tags'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/huong-da-online/posts/tags'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý tags</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Dự án */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/google-material',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/google-material'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Shopping/Settings.svg')}
              />
            </span>
            <span className='menu-text'>Dự án</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <ul className='menu-subnav'>
              <ul className='menu-subnav'>
                <li
                  className='menu-item  menu-item-parent'
                  aria-haspopup='true'
                >
                  <span className='menu-link'>
                    <span className='menu-text'>Dự án</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/google-material/layout/grid'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/google-material/layout/grid'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý dự án</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/google-material/navigation/breadcrumbs'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/google-material/navigation/breadcrumbs'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý công nghệ</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/google-material/inputs/autocomplete'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/google-material/inputs/autocomplete'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý danh mục</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    '/google-material/inputs/buttons'
                  )}`}
                  aria-haspopup='true'
                >
                  <NavLink
                    className='menu-link'
                    to='/google-material/inputs/buttons'
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Quản lý tag</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
