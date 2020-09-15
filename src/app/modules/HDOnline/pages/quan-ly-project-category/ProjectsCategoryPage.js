import React from 'react';
import { Route } from 'react-router-dom';
import { CustomersLoadingDialog } from './customers-loading-dialog/CustomersLoadingDialog';
import { CustomerEditDialog } from './customer-edit-dialog/CustomerEditDialog';
import { CustomerDeleteDialog } from './customer-delete-dialog/CustomerDeleteDialog';
import { CustomersDeleteDialog } from './customers-delete-dialog/CustomersDeleteDialog';
import { CustomersFetchDialog } from './customers-fetch-dialog/CustomersFetchDialog';
import { CustomersUpdateStateDialog } from './customers-update-status-dialog/CustomersUpdateStateDialog';
import { CustomersUIProvider } from './CustomersUIContext';
import { CustomersCard } from './ProjectCategoryCard';

export function ProjectsCategoryPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push('/huong-da-online/projects/category/new');
    },
    openEditCustomerDialog: (id) => {
      history.push(`/huong-da-online/projects/category/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/huong-da-online/projects/category/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/huong-da-online/projects/category/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/huong-da-online/projects/category/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push('/huong-da-online/projects/category/updateStatus');
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path='/huong-da-online/projects/category/new'>
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/projects/category/:id/edit'>
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/projects/category/deleteCustomers'>
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/projects/category/:id/delete'>
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/projects/category/fetch'>
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/projects/category/updateStatus'>
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/projects/category');
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
