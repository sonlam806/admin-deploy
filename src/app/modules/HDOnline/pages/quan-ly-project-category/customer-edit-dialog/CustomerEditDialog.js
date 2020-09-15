import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../_redux/projects-category/projectCategoryActions';

import { CustomerEditDialogHeader } from './CustomerEditDialogHeader';
import { CustomerEditForm } from './CustomerEditForm';
import { useCustomersUIContext } from '../CustomersUIContext';

export function CustomerEditDialog({ id, show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      initCustomer: customersUIContext.initCustomer,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const dispatch = useDispatch();
  const { actionsLoading, categoryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.categories.actionsLoading,
      categoryForEdit: state.categories.categoryForEdit,
    }),
    shallowEqual
  );
  useEffect(() => {
    // server call for getting Customer by id
    dispatch(actions.fetchCategory(id));
  }, [id, dispatch]);

  // server request for saving customer
  const saveCustomer = (category) => {
    if (!id) {
      // server request for creating category
      dispatch(actions.createCategory(category)).then(() => onHide());
    } else {
      // server request for updating category
      dispatch(actions.updateCategory(category)).then(() => onHide());
    }
  };

  return (
    <Modal
      size='lg'
      show={show}
      onHide={onHide}
      aria-labelledby='example-modal-sizes-title-lg'
    >
      <CustomerEditDialogHeader id={id} />
      <CustomerEditForm
        saveCustomer={saveCustomer}
        actionsLoading={actionsLoading}
        customer={categoryForEdit || customersUIProps.initCustomer}
        onHide={onHide}
      />
    </Modal>
  );
}
