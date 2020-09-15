// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../_redux/posts/postsActions';
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  // headerSortingClasses,
} from '../../../../../../_metronic/_helpers';
import * as uiHelpers from '../CustomersUIHelpers';
import * as columnFormatters from './column-formatters';
import { Pagination } from '../../../../../../_metronic/_partials/controls';
import { useCustomersUIContext } from '../CustomersUIContext';

export function CustomersTable() {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
      openEditCustomerDialog: customersUIContext.openEditCustomerDialog,
      openDeleteCustomerDialog: customersUIContext.openDeleteCustomerDialog,
    };
  }, [customersUIContext]);

  // Getting curret state of customers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.posts }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    customersUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchProducts(customersUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: 'profileImage',
      text: 'ảnh đại diện',
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.ProfileImageColumnFormatter,
    },
    {
      dataField: 'postName',
      text: 'tên bài viết',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'slug',
      text: 'Slug',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'language',
      text: 'Ngôn ngữ',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'createDate',
      text: 'Ngày tạo',
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.CreateDateColumnFormatter,
    },
    {
      dataField: 'owner',
      text: 'Người tạo',
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.OwnerColumnFormatter,
    },
    {
      dataField: 'species',
      text: 'Chuyên mục',
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.OwnerColumnFormatter,
    },
    {
      dataField: 'action',
      text: 'Chức năng',
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditProductPage: customersUIContext.openEditCustomerDialog,
        openDeleteProductDialog: customersUIContext.openDeleteCustomerDialog,
      },
      classes: 'text-right pr-0',
      headerClasses: 'text-right pr-3',
      style: {
        minWidth: '100px',
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: customersUIProps.queryParams.pageSize,
    page: customersUIProps.queryParams.pageNumber,
  };
  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses='table-responsive'
                bordered={false}
                classes='table table-head-custom table-vertical-center overflow-hidden'
                bootstrap4
                remote
                keyField='id'
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  customersUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: customersUIProps.ids,
                  setIds: customersUIProps.setIds,
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
