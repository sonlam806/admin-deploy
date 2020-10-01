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
          <h4 className='menu-text'>Quản lý dịch vụ</h4>
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
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý tài khoản</span>
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
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý template</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/huong-da-online/domain-control',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink
            className='menu-link menu-toggle'
            to='/huong-da-online/domain-control'
          >
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý tên miền</span>
            <i className='menu-arrow' />
          </NavLink>

          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Quản lý tên miền</span>
                </span>
              </li>

              {/* Inputs */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/dashboard',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/dashboard'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Dashboard</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/domain',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/domain'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Danh sách tên miền</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/bang-gia',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/bang-gia'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Bảng giá</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
        {/* DNS */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/huong-da-online/domain-control',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink
            className='menu-link menu-toggle'
            to='/huong-da-online/domain-control'
          >
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý DNS</span>
            <i className='menu-arrow' />
          </NavLink>

          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Quản lý DNS</span>
                </span>
              </li>

              {/* Inputs */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/dashboard',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/dashboard'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Danh sách domain</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/domain',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/domain'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Cấu hình DNS server</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
        {/* WP hosting */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/huong-da-online/domain-control',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink
            className='menu-link menu-toggle'
            to='/huong-da-online/domain-control'
          >
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Cap-2.svg')} />
            </span>
            <span className='menu-text'>Quản lý WP hosting</span>
            <i className='menu-arrow' />
          </NavLink>

          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Quản lý WP hosting</span>
                </span>
              </li>

              {/* Inputs */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/dashboard',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/dashboard'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Dashboard</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/domain',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/domain'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Cấu hình bảng giá</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/domain',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/domain'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Quản lý gói mua</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
              {/*begin:: Level 3*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  '/huong-da-online/domain',
                  true
                )}`}
                aria-haspopup='true'
                data-menu-toggle='hover'
              >
                <NavLink
                  className='menu-link menu-toggle'
                  to='/huong-da-online/domain'
                >
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>Cấu hình server</span>
                </NavLink>
              </li>
              {/* end:: Level 3 */}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
