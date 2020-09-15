import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';

export function CustomerEditDialogHeader({ id }) {
  // Customers Redux state
  const { categoryForEdit, actionsLoading } = useSelector(
    (state) => ({
      categoryForEdit: state.categories.categoryForEdit,
      actionsLoading: state.categories.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState('');
  // Title couting
  useEffect(() => {
    let _title = id ? '' : 'Thêm danh mục mới';
    if (categoryForEdit && id) {
      _title = `Chỉnh sửa danh mục`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [categoryForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'> {title} </Modal.Title>
      </Modal.Header>
    </>
  );
}
