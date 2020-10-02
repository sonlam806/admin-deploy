import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../_helpers';
export default function ServiceMenuList({ getMenuItemActive }) {
  return (
    <>
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
            <SVG src={toAbsoluteUrl('/media/svg/icons/Shopping/Wallet.svg')} />
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
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Component.svg')} />
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
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Magic.svg')} />
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
            <SVG
              src={toAbsoluteUrl('/media/svg/icons/Design/Pen-tool-vector.svg')}
            />
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
            <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Stamp.svg')} />
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
    </>
  );
}
