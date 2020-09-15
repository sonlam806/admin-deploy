import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../_redux/tags/tagsActions';
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
  const { actionsLoading, tagForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.tags.actionsLoading,
      tagForEdit: state.tags.tagForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Customer by id
    dispatch(actions.fetchTags(id));
  }, [id, dispatch]);

  // server request for saving customer
  const saveCustomer = (customer) => {
    if (!id) {
      // server request for creating customer
      dispatch(actions.createTag(customer)).then(() => onHide());
    } else {
      // server request for updating customer
      dispatch(actions.updateTag(customer)).then(() => onHide());
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
        customer={tagForEdit || customersUIProps.initCustomer}
        onHide={onHide}
      />
    </Modal>
  );
}
