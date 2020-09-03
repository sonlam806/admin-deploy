import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { LanguageSelectorDropdown } from '../extras/dropdowns/LanguageSelectorDropdown';
import { QuickUserToggler } from '../extras/QuickUserToggler';

// utils functions
import { toAbsoluteUrl } from '../../../_helpers';
// Fix this component later with props ({layoutProps});
export default function AsideFooter({ layoutProps }) {
  return (
    <div className='aside-footer d-flex flex-column align-items-center flex-column-auto py-4 py-lg-10'>
      {/* begin::Aside Toggle */}
      {layoutProps.asideSecondaryDisplay &&
        layoutProps.asideSelfMinimizeToggle && (
          <>
            <OverlayTrigger
              placement='right'
              overlay={<Tooltip id='toggle-aside'>Đóng/Mở Menu</Tooltip>}
            >
              <span
                className='aside-toggle btn btn-icon btn-primary btn-hover-primary shadow-sm'
                id='kt_aside_toggle'
              >
                <i className='ki ki-bold-arrow-back icon-sm' />
              </span>
            </OverlayTrigger>
          </>
        )}
      {/* end::Aside Toggle */}

      {/* begin::Search */}
      {/* {layoutProps.extrasSearchDisplay && (
        <OverlayTrigger
          placement='right'
          overlay={<Tooltip id='toggle-search'>Quick Search</Tooltip>}
        >
          <a
            href='#'
            className='btn btn-icon btn-clean btn-lg mb-1'
            id='kt_quick_search_toggle'
          >
            <span className='svg-icon svg-icon-lg'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/Search.svg')} />
            </span>
          </a>
        </OverlayTrigger>
      )} */}
      {/* end::Search */}

      {/* begin::Notifications */}
      {/* {layoutProps.extrasNotificationsDisplay && (
        <OverlayTrigger
          placement='right'
          overlay={<Tooltip id='toggle-notifications'>Notifications</Tooltip>}
        >
          <a
            href='#'
            className='btn btn-icon btn-clean btn-lg mb-1 position-relative'
            id='kt_quick_notifications_toggle'
            data-placement='right'
            data-container='body'
            data-boundary='window'
          >
            <span className='svg-icon svg-icon-lg'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Layers.svg')} />
            </span>
          </a>
        </OverlayTrigger>
      )} */}
      {/* end::Notifications */}

      {/* begin::Quick Actions */}
      {/* {layoutProps.extrasQuickActionsDisplay && (
        <OverlayTrigger
          placement='right'
          overlay={<Tooltip id='toggle-quick-actions'>Quick Actions</Tooltip>}
        >
          <a
            href='#'
            className='btn btn-icon btn-clean btn-lg mb-1'
            id='kt_quick_actions_toggle'
          >
            <span className='svg-icon svg-icon-lg'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Media/Equalizer.svg')}
              />
            </span>
          </a>
        </OverlayTrigger>
      )} */}
      {/* end::Quick Actions */}

      {/* begin::Quick Panel */}
      {/* {layoutProps.extrasQuickPanelDisplay && (
        <OverlayTrigger
          placement='right'
          overlay={<Tooltip id='toggle-quick-panel'>Quick Panel</Tooltip>}
        >
          <a
            href='#'
            className='btn btn-icon btn-clean btn-lg mb-1 position-relative'
            id='kt_quick_panel_toggle'
            data-placement='right'
            data-container='body'
            data-boundary='window'
          >
            <span className='svg-icon svg-icon-lg'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Layout/Layout-4-blocks.svg'
                )}
        />
            </span>
            <span className='label label-sm label-light-danger label-rounded font-weight-bolder position-absolute top-0 right-0 mt-1 mr-1'>
              3
            </span>
          </a>
        </OverlayTrigger>
      )} */}
      {/* end::Quick Panel */}

      {/* begin::Languages*/}
      {/* {layoutProps.extrasLanguagesDisplay && <LanguageSelectorDropdown />} */}
      {/* end::Languages */}

      {/* begin::User*/}
      {/* {layoutProps.extrasUserDisplay && <QuickUserToggler />} */}
      {/* end::User */}
    </div>
  );
}
