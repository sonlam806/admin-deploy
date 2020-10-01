import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../_redux/posts-category/postCategoryActions';
import { CustomerEditDialogHeader } from './CustomerEditDialogHeader';
import { CustomerEditForm } from './CustomerEditForm';
import { useCustomersUIContext } from '../CustomersUIContext';

export function CustomerEditDialog({ id, show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      initCategory: customersUIContext.initCategory,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const dispatch = useDispatch();
  const { actionsLoading, categoryForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.postCategories.actionsLoading,
      categoryForEdit: state.postCategories.categoryForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Customer by id
    dispatch(actions.fetchCategory(id));
  }, [id, dispatch]);

  // server request for saving customer
  const saveCategory = (category) => {
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
        saveCategory={saveCategory}
        actionsLoading={actionsLoading}
        category={categoryForEdit || customersUIProps.initCategory}
        onHide={onHide}
      />
    </Modal>
  );
}
