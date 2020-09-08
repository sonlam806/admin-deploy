/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from 'react';
import objectPath from 'object-path';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { toAbsoluteUrl } from '../../../_helpers';
import { AsideSearch } from './AsideSearch';
import { AsideMenu } from './aside-menu/AsideMenu';

import { Brand } from '../brand/Brand';
import { KTUtil } from './../../../_assets/js/components/util';
import AsideFooter from './AsideFooter';
import { HuongDaOnlineMenu } from './huongda-online-menu/HuongDaOnlineMenu';

export function Aside() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      asideClassesFromConfig: uiService.getClasses('aside', true),
      asideSecondaryDisplay: objectPath.get(
        uiService.config,
        'aside.secondary.display'
      ),
      asideSelfMinimizeToggle: objectPath.get(
        uiService.config,
        'aside.self.minimize.toggle'
      ),
      extrasSearchDisplay: objectPath.get(
        uiService.config,
        'extras.search.display'
      ),
      extrasNotificationsDisplay: objectPath.get(
        uiService.config,
        'extras.notifications.display'
      ),
      extrasQuickActionsDisplay: objectPath.get(
        uiService.config,
        'extras.quick-actions.display'
      ),
      extrasQuickPanelDisplay: objectPath.get(
        uiService.config,
        'extras.quick-panel.display'
      ),
      extrasLanguagesDisplay: objectPath.get(
        uiService.config,
        'extras.languages.display'
      ),
      extrasUserDisplay: objectPath.get(
        uiService.config,
        'extras.user.display'
      ),
    };
  }, [uiService]);

  const tabs = {
    tabId1: 'kt_aside_tab_1',
    tabId2: 'kt_aside_tab_2',
    tabId3: 'kt_aside_tab_3',
  };
  const [activeTab, setActiveTab] = useState(tabs.tabId1);
  const handleTabChange = (id) => {
    setActiveTab(id);
    const asideWorkspace = KTUtil.find(
      document.getElementById('kt_aside'),
      '.aside-secondary .aside-workspace'
    );
    if (asideWorkspace) {
      KTUtil.scrollUpdate(asideWorkspace);
    }
  };

  return (
    <>
      {/* begin::Aside */}
      <div
        id='kt_aside'
        className={`aside aside-left d-flex ${layoutProps.asideClassesFromConfig}`}
      >
        {/* begin::Primary */}
        <div className='aside-primary d-flex flex-column align-items-center flex-row-auto'>
          <Brand />
          {/* begin::Nav Wrapper */}
          <div className='aside-nav d-flex flex-column align-items-center flex-column-fluid py-5 scroll scroll-pull'>
            {/* begin::Nav */}
            <ul className='list-unstyled flex-column' role='tablist'>
              {/* begin::Item */}
              <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='latest-project'>Quản lý bài viết</Tooltip>
                  }
                >
                  <a
                    href='#'
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId1 && 'active'}`}
                    data-toggle='tab'
                    data-target={`#${tabs.tabId1}`}
                    role='tab'
                    onClick={() => handleTabChange(tabs.tabId1)}
                  >
                    <span className='custom-svg'>
                      <SVG src={toAbsoluteUrl('/media/svg/dashboard.svg')} />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={<Tooltip id='metronic-features'>HuongDa ID</Tooltip>}
                >
                  <a
                    href='#'
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId2 && 'active'}`}
                    data-toggle='tab'
                    data-target={`#${tabs.tabId2}`}
                    onClick={() => handleTabChange(tabs.tabId2)}
                    role='tab'
                  >
                    <span className='custom-svg'>
                      <SVG
                        src={toAbsoluteUrl(
                          // '/media/svg/icons/Communication/Group.svg'
                          '/media/svg/HD.svg'
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='metronic-features'>HuongDa Online</Tooltip>
                  }
                >
                  <a
                    href='#'
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId3 && 'active'}`}
                    data-toggle='tab'
                    data-target={`#${tabs.tabId3}`}
                    onClick={() => handleTabChange(tabs.tabId3)}
                    role='tab'
                  >
                    <span className='custom-svg'>
                      <SVG
                        src={toAbsoluteUrl(
                          // '/media/svg/icons/Media/Equalizer.svg'
                          '/media/svg/Vong.svg'
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              {/* <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
                title='Project Management'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='project-management'>
                      Project Management
                    </Tooltip>
                  }
                >
                  <a
                    href='#'
                    className='nav-link btn btn-icon btn-clean btn-lg'
                    data-toggle='tab'
                    data-target='#kt_aside_tab_4'
                    role='tab'
                  >
                    <span className='svg-icon svg-icon-lg'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/General/Shield-check.svg'
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li> */}
              {/* end::Item */}

              {/* begin::Item */}
              {/* <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
                title='User Management'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='user-management'>User Management</Tooltip>
                  }
                >
                  <a
                    href='#'
                    className='nav-link btn btn-icon btn-clean btn-lg'
                    data-toggle='tab'
                    data-target='#kt_aside_tab_5'
                    role='tab'
                  >
                    <span className='svg-icon svg-icon-lg'>
                      <SVG
                        src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li> */}
              {/* end::Item */}

              {/* begin::Item */}
              {/* <li
                className='nav-item mb-3'
                data-toggle='tooltip'
                data-placement='rigth'
                data-container='body'
                data-boundary='window'
                title='Finance & Accounting'
              >
                <OverlayTrigger
                  placement='right'
                  overlay={
                    <Tooltip id='finance-accounting'>
                      Finance & Accounting
                    </Tooltip>
                  }
                >
                  <a
                    href='#'
                    className='nav-link btn btn-icon btn-clean btn-lg'
                    data-toggle='tab'
                    data-target='#kt_aside_tab_6'
                    role='tab'
                  >
                    <span className='svg-icon svg-icon-lg'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/Files/File-plus.svg'
                        )}
                      />
                    </span>
                  </a>
                </OverlayTrigger>
              </li> */}
              {/* end::Item */}
            </ul>
            {/* end::Nav */}
          </div>
          {/* end::Nav Wrapper */}

          {/* begin::Footer */}
          <AsideFooter layoutProps={layoutProps} />
          {/* end::Footer */}
        </div>
        {/* end::Primary */}

        {layoutProps.asideSecondaryDisplay && (
          <>
            {/* begin::Secondary */}
            <div className='aside-secondary d-flex flex-row-fluid'>
              {/* begin::Workspace */}
              <div className='aside-workspace scroll scroll-push my-2'>
                <div className='tab-content'>
                  <AsideSearch isActive={activeTab === tabs.tabId1} />
                  <AsideMenu isActive={activeTab === tabs.tabId2} />
                  <HuongDaOnlineMenu isActive={activeTab === tabs.tabId3} />
                </div>
              </div>
              {/* end::Workspace */}
            </div>
            {/* end::Secondary */}
          </>
        )}
      </div>
      {/* end::Aside */}
    </>
  );
}
