import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';

export function CustomerEditDialogHeader({ id }) {
  // Customers Redux state
  const { productForEdit, actionsLoading } = useSelector(
    (state) => ({
      productForEdit: state.technology.productForEdit,
      actionsLoading: state.technology.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState('');
  // Title couting
  useEffect(() => {
    let _title = id ? '' : 'Thêm công nghệ mới';
    if (productForEdit && id) {
      _title = `Chỉnh sửa công nghệ`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [productForEdit, actionsLoading]);

  return (
    <>
      {' '}
      {actionsLoading && <ModalProgressBar />}{' '}
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'> {title} </Modal.Title>{' '}
      </Modal.Header>{' '}
    </>
  );
}
