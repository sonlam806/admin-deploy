import React, { useMemo } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from '../../../../../_metronic/_partials/controls';
import { CustomersFilter } from './customers-filter/CustomersFilter';
import { CustomersTable } from './customers-table/CustomersTable';
import { CustomersGrouping } from './customers-grouping/CustomersGrouping';
import { useCustomersUIContext } from './CustomersUIContext';
import { CustomerSearch } from './customers-search/CustomersSearch';

export function CustomersCard() {
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
    };
  }, [customersUIContext]);

  return (
    <Card>
      <CardHeader title='Danh sách bài viết'>
        <CustomerSearch />
        <CardHeaderToolbar>
          <button
            type='button'
            className='btn btn-primary'
            onClick={customersUIProps.newCustomerButtonClick}
          >
            Thêm bài viết
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <CustomersFilter /> */}
        {customersUIProps.ids.length > 0 && <CustomersGrouping />}
        <CustomersTable />
      </CardBody>
    </Card>
  );
}
